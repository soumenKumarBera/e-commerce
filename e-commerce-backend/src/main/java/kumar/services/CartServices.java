package kumar.services;

import kumar.entitys.Cart;
import kumar.entitys.User;
import kumar.exception.ProductException;
import kumar.request.AddItemRequest;


public interface CartServices {

    public Cart createCart(User user);

    public String addCartItem(Long userId, AddItemRequest req) throws ProductException;

    public Cart findUserCart(Long userId);

}
