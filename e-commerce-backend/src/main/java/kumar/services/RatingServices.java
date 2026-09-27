package kumar.services;

import kumar.entitys.Rating;
import kumar.entitys.User;
import kumar.exception.ProductException;
import kumar.request.RatingRequest;

import java.util.List;

public interface RatingServices {

    public Rating createRating(RatingRequest req, User user) throws ProductException;
    public List<Rating> getProductsRating(Long productId);


}
