package kumar.services;

import kumar.Repository.CartRepository;
import kumar.entitys.Cart;
import kumar.entitys.User;
import kumar.exception.ProductException;
import kumar.request.AddItemRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CartServiceImp implements CartServices {

    @Autowired
    private CartRepository cartRepository;



    @Override
    public Cart createCart(User user) {
        return null;
    }

    @Override
    public String addCartItem(Long userId, AddItemRequest req) throws ProductException {
        return "";
    }

    @Override
    public Cart findUserCart(Long userId) {
        return null;
    }
}
