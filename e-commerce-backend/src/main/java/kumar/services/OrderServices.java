package kumar.services;

import kumar.entitys.Address;
import kumar.entitys.Order;
import kumar.entitys.User;
import kumar.exception.OrderException;


import java.util.List;

public interface OrderServices {

    public Order createOrder (User user, Address shippingAddress);

    public Order findOrderById(Long orderId) throws kumar.exception.OrderException;

    public List<Order> usersOrderHistory(Long userId);

    public Order placedOrder(Long orderId) throws OrderException;

    public Order confirmedOrder(Long orderId)throws OrderException;

    public Order shippedOrder(Long orderId) throws OrderException;

    public Order deliveredOrder(Long orderId) throws OrderException;

    public Order cancledOrder(Long orderId) throws OrderException;



}
