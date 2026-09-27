package kumar.services;

import kumar.Repository.ProductRepository;
import kumar.Repository.ReviewRepository;
import kumar.entitys.Product;
import kumar.entitys.Review;
import kumar.entitys.User;
import kumar.exception.ProductException;
import kumar.request.ReviewRequest;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;
import java.util.List;

public class ReviewServiceImp implements ReviewServices {

    @Autowired
    private ReviewRepository reviewRepository;

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Review createReview(ReviewRequest req, User user) throws ProductException {
        Product product=productService.findProductById(req.getProductId());

        Review review=new Review();
        review.setUser(user);
        review.setProduct(product);
        review.setReview(req.getReview());
        review.setCreatedAt(LocalDateTime.now());

        return reviewRepository.save(review);
    }

    @Override
    public List<Review> getAllReview(Long productId) {


        return reviewRepository.getAllProductsReview(productId);
    }
}
