package kumar.services;

import kumar.entitys.Product;
import kumar.exception.ProductException;

import kumar.request.CreateProductRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {

    public Product createProduct(CreateProductRequest createProductRequest);

    public String deleteProduct(Long product) throws ProductException;

    public Product updateProduct(Long productId, Product req) throws  ProductException;

    public Product findProductById(Long id) throws  ProductException;

    public List<Product> findProductByCategory(String category) throws ProductException;

    public Page<Product> getAllProduct(String category,List<String> color, List<String> sizes, Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock, Integer pageNumber, Integer pageSize);


}
