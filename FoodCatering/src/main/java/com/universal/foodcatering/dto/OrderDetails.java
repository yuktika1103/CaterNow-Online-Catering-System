package com.universal.foodcatering.dto;

import com.universal.foodcatering.bean.Orders;
import java.text.SimpleDateFormat;

public class OrderDetails {
    private int orderId;
    private String catererName;
    private String packageType;
    private int quantity;
    private int drinks;
    private int starter;
    private int mainDish;
    private int dessert;
    private int totalPrice;
    private String eventDate;
    private String eventTime;
    private String eventVenue;

    public OrderDetails(Orders order, OrderRequest request) {
        this.orderId = order.getId();
        this.catererName = order.getCatererName();
        this.packageType = order.getPackageType();
        this.quantity = order.getQuantity();
        this.drinks = request.getDrinks() != null ? request.getDrinks() : 0;
        this.starter = request.getStarter() != null ? request.getStarter() : 0;
        this.mainDish = request.getMainDish() != null ? request.getMainDish() : 0;
        this.dessert = request.getDessert() != null ? request.getDessert() : 0;
        this.totalPrice = order.getPrice();
        
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        this.eventDate = dateFormat.format(order.getEventDate());
        
        this.eventTime = order.getEventTime().toString().substring(0, 5);
        this.eventVenue = order.getEventVenue();
    }

    // Getters
    public int getOrderId() {
        return orderId;
    }

    public String getCatererName() {
        return catererName;
    }

    public String getPackageType() {
        return packageType;
    }

    public int getQuantity() {
        return quantity;
    }

    public int getDrinks() {
        return drinks;
    }

    public int getStarter() {
        return starter;
    }

    public int getMainDish() {
        return mainDish;
    }

    public int getDessert() {
        return dessert;
    }

    public int getTotalPrice() {
        return totalPrice;
    }

    public String getEventDate() {
        return eventDate;
    }

    public String getEventTime() {
        return eventTime;
    }

    public String getEventVenue() {
        return eventVenue;
    }

    @Override
    public String toString() {
        return "OrderDetails{" +
                "orderId=" + orderId +
                ", catererName='" + catererName + '\'' +
                ", packageType='" + packageType + '\'' +
                ", quantity=" + quantity +
                ", drinks=" + drinks +
                ", starter=" + starter +
                ", mainDish=" + mainDish +
                ", dessert=" + dessert +
                ", totalPrice=" + totalPrice +
                ", eventDate='" + eventDate + '\'' +
                ", eventTime='" + eventTime + '\'' +
                ", eventVenue='" + eventVenue + '\'' +
                '}';
    }
}