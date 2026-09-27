package kumar.services;

import kumar.entitys.Review;
import kumar.entitys.User;
import kumar.exception.ProductException;
import kumar.request.ReviewRequest;

import java.util.List;

public interface ReviewServices {


    public Review createReview(ReviewRequest req, User user)throws ProductException;
    public List<Review> getAllReview(Long productId);
}
