package kumar.services;

import kumar.Repository.CategoryRepository;
import kumar.Repository.ProductRepository;
import kumar.entitys.Category;
import kumar.entitys.Product;
import kumar.exception.ProductException;
import kumar.request.CreateProductRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
public class ProductServicesImple implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserServices userServices;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public Product createProduct(CreateProductRequest createProductRequest) {

        Category topLevel = categoryRepository.findByName(createProductRequest.getTopLavelCategory());

        if(topLevel == null){
            Category topLavelCategory = new Category();
            topLavelCategory.setName(createProductRequest.getTopLavelCategory());
            topLavelCategory.setLevel(1);

            topLevel = categoryRepository.save(topLavelCategory);


        }

        Category secondLevel=categoryRepository.
                findByNameAndParant(createProductRequest.getSecondLavelCategory(),topLevel.getName());
        if(secondLevel == null) {

            Category secondLavelCategory=new Category();
            secondLavelCategory.setName(createProductRequest.getSecondLavelCategory());
            secondLavelCategory.setParentCategory(topLevel);
            secondLavelCategory.setLevel(2);

            secondLevel= categoryRepository.save(secondLavelCategory);

        }

        Category thirdLevel=categoryRepository.findByNameAndParant(createProductRequest.getThirdLavelCategory(),secondLevel.getName());

        if(thirdLevel == null) {

            Category thirdLavelCategory = new Category();
            thirdLavelCategory.setName(createProductRequest.getThirdLavelCategory());
            thirdLavelCategory.setParentCategory(secondLevel);
            thirdLavelCategory.setLevel(3);

            thirdLevel = categoryRepository.save(thirdLavelCategory);
        }

        Product product = new Product();
        product.setTitle(createProductRequest.getTitle());
        product.setColor(createProductRequest.getColor());
        product.setDescription(createProductRequest.getDescription());
        product.setDiscountedPrice(createProductRequest.getDiscountedPrice());
        product.setDiscountedPercent(createProductRequest.getDiscountPresent());
        product.setImageUrl(createProductRequest.getImageUrl());
        product.setBrand(createProductRequest.getBrand());
        product.setPrice(createProductRequest.getPrice());
        product.setSizes(createProductRequest.getSize());
        product.setQuantity(createProductRequest.getQuantity());
        product.setCategory(thirdLevel);
        product.setCreatedAt(LocalDateTime.now());

        Product savedProduct = productRepository.save(product);


        return savedProduct;
    }

    @Override
    public String deleteProduct(Long product) throws ProductException {

        Product product1=findProductById(product);

        product1.getSizes().clear();
        productRepository.delete(product1);
        return "Product deleted Successfully";


    }

    @Override
    public Product updateProduct(Long productId, Product req) throws ProductException {

        Product product=findProductById(productId);

        if(req.getQuantity() != 0) {
            product.setQuantity(req.getQuantity());
        }
            return productRepository.save(product);



    }

    @Override
    public Product findProductById(Long id) throws ProductException {

        Optional<Product> opt = productRepository.findById(id);

        if(opt.isPresent()){
            return opt.get();
        }
        throw new ProductException("Product not found with id - "+id);


    }

    @Override
    public List<Product> findProductByCategory(String category) throws ProductException {
        return List.of();
    }

    @Override
    public Page<Product> getAllProduct(String category, List<String> color, List<String> sizes, Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize) {

        Pageable pageable = PageRequest.of(pageNumber, pageSize);

        List<Product> products = productRepository.filterProducts(category, minPrice, maxPrice, minDiscount, sort);

        if (!color.isEmpty()){
            products = products.stream().filter(p -> color.stream().allMatch(c -> c.equalsIgnoreCase(p.getColor()))).toList();

        }

        if(stock != null){
            if(stock.equals("in_stock")){
                products = products.stream().filter(p -> p.getQuantity() > 0).toList();
            } else if (stock.equals("out_of_stock")) {

                products = products.stream().filter(p -> p.getQuantity() < 0).toList();

            }
        }

        //..........PAGINETION...

        int startInd = (int)pageable.getOffset();
        int endInd = Math.min(startInd + pageable.getPageSize(), products.size());

        List<Product> pageContent = products.subList(startInd, endInd);

        Page<Product> filterProduct = new PageImpl<>(pageContent, pageable,products.size());
        return filterProduct;
    }
}
