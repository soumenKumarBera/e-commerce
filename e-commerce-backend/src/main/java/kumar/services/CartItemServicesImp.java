package kumar.services;

import kumar.Repository.CartItemRepository;
import kumar.Repository.CartRepository;
import kumar.entitys.Cart;
import kumar.entitys.CartItem;
import kumar.entitys.Product;
import kumar.entitys.User;
import kumar.exception.CartItemException;
import kumar.exception.UserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class CartItemServicesImp implements CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private UserServices userServices;

    @Autowired
    private CartRepository cartRepository;

    @Override
    public CartItem createCartItem(CartItem cartItem) {
        cartItem.setQuantity(1);
        cartItem.setPrice(cartItem.getProduct().getPrice()*cartItem.getQuantity());
        cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountedPrice()*cartItem.getQuantity());

        CartItem createdCartItem=cartItemRepository.save(cartItem);

        return createdCartItem;
    }

    @Override
    public CartItem updateCartItem(Long userId, Long id, CartItem cartitem) throws CartItemException, UserException {

        CartItem item=findCartItemById(id);
        User user=userServices.findUserById(item.getUserId());

        if(user.getId().equals(userId)) {
            item.setQuantity(cartitem.getQuantity());
            item.setPrice(item.getQuantity() * item.getProduct().getPrice());
            item.setDiscountedPrice(item.getProduct().getDiscountedPrice() * item.getQuantity());
        }
            return cartItemRepository.save(item);


    }

    @Override
    public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
        CartItem cartItem =cartItemRepository.isCartItemExist(cart, product, size, userId);
        return cartItem;
    }

    @Override
    public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {

        CartItem cartItem=findCartItemById(cartItemId);

        User user=userServices.findUserById(cartItem.getUserId());

        User reqUser=userServices.findUserById(userId);

        if(user.getId().equals(reqUser.getId())) {
            cartItemRepository.deleteById(cartItemId);
        }

            else {
                throw new UserException("you can't remove another users item");
            }


    }

    @Override
    public CartItem findCartItemById(Long cartItemId) throws CartItemException {
        Optional<CartItem> opt = cartItemRepository.findById(cartItemId);

        if (opt.isPresent()) {
            return opt.get();

        }

            throw new CartItemException("cartItem not found with id : " + cartItemId);

        };

}



