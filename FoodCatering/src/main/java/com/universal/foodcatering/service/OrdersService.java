package com.universal.foodcatering.service;

import com.universal.foodcatering.bean.Orders;
import com.universal.foodcatering.repository.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class OrdersService {
    
    private final OrdersRepository ordersRepository;

    @Autowired
    public OrdersService(OrdersRepository ordersRepository) {
        this.ordersRepository = ordersRepository;
    }

    public Orders placeOrder(Orders order) {
        return ordersRepository.save(order);
    }

    public List<Orders> getAllOrders() {
        return (List<Orders>) ordersRepository.findAll();
    }

    public Orders getOrderById(int orderId) {
        return ordersRepository.findById(orderId)
               .orElseThrow(() -> new RuntimeException("Order not found"));
    }

    public Orders updateOrderStatus(int orderId, boolean status) {
        Orders order = getOrderById(orderId);
        order.setStatus(status);
        return ordersRepository.save(order);
    }
}