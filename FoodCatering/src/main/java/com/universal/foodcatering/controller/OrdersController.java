package com.universal.foodcatering.controller;

import java.sql.Time;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.universal.foodcatering.bean.Orders;
import com.universal.foodcatering.bean.Users;
import com.universal.foodcatering.dto.OrderRequest;
import com.universal.foodcatering.dto.OrderDetails;
import com.universal.foodcatering.repository.UserRepository;
import com.universal.foodcatering.service.EmailService;
import com.universal.foodcatering.service.OrdersService;

import jakarta.mail.internet.ParseException;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class OrdersController {

    @Autowired
    private OrdersService ordersService;
    
    @Autowired
    private EmailService emailService;
    
    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<?> placeOrder(@RequestBody OrderRequest orderRequest, HttpSession session) {
        String username = (String) session.getAttribute("username");
        Integer userId = (Integer) session.getAttribute("userId");
        
        if (username == null || userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not logged in");
        }

        try {
            Users user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
            
            // Create and save order
            Orders order = createOrderFromRequest(orderRequest);
            Orders savedOrder = ordersService.placeOrder(order);
            
            // Send confirmation email
            OrderDetails details = new OrderDetails(savedOrder, orderRequest);
            emailService.sendOrderConfirmation(user.getEmail(), user.getName(), details);
            
            return ResponseEntity.ok(Map.of(
                "message", "Order placed successfully",
                "orderId", savedOrder.getId()
            ));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of(
                "error", "Failed to place order",
                "message", e.getMessage()
            ));
        }
    }

    private Orders createOrderFromRequest(OrderRequest orderRequest) throws ParseException, java.text.ParseException {
        Orders order = new Orders();
        order.setQuantity(orderRequest.getQuantity());
        order.setPrice(orderRequest.getTotalPrice());
        order.setCatererName(orderRequest.getCatererName());
        order.setPackageType(orderRequest.getPackageType());
        order.setDrinks(orderRequest.getDrinks());
        order.setStarter(orderRequest.getStarter());
        order.setMainDish(orderRequest.getMainDish());
        order.setDessert(orderRequest.getDessert());
        
        if (orderRequest.getEventDate() != null) {
            order.setEventDate(new java.sql.Date(orderRequest.getEventDate().getTime()));
        }
        
        if (orderRequest.getEventTime() != null) {
            SimpleDateFormat sdf = new SimpleDateFormat("HH:mm");
            Date parsedTime = sdf.parse(orderRequest.getEventTime());
            order.setEventTime(new Time(parsedTime.getTime()));
        }
        
        order.setEventVenue(orderRequest.getEventVenue());
        order.setOrderDate(new Date());
        order.setStatus(false);
        
        return order;
    }
}