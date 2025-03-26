package com.universal.foodcatering.dto;

import java.util.Date;

public class OrderRequest {
    private String catererName;
    private String packageType;
    private int quantity;
    private Integer drinks;
    private Integer starter;
    private Integer mainDish;
    private Integer dessert;
    private int totalPrice;
    private Date eventDate;       // java.util.Date
    private String eventTime;     // String in "HH:mm" format
    private String eventVenue;

    // Getters and Setters
    public String getCatererName() {
        return catererName;
    }

    public void setCatererName(String catererName) {
        this.catererName = catererName;
    }

    public String getPackageType() {
        return packageType;
    }

    public void setPackageType(String packageType) {
        this.packageType = packageType;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Integer getDrinks() {
        return drinks;
    }

    public void setDrinks(Integer drinks) {
        this.drinks = drinks;
    }

    public Integer getStarter() {
        return starter;
    }

    public void setStarter(Integer starter) {
        this.starter = starter;
    }

    public Integer getMainDish() {
        return mainDish;
    }

    public void setMainDish(Integer mainDish) {
        this.mainDish = mainDish;
    }

    public Integer getDessert() {
        return dessert;
    }

    public void setDessert(Integer dessert) {
        this.dessert = dessert;
    }

    public int getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(int totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Date getEventDate() {
        return eventDate;
    }

    public void setEventDate(Date eventDate) {
        this.eventDate = eventDate;
    }

    public String getEventTime() {
        return eventTime;
    }

    public void setEventTime(String eventTime) {
        this.eventTime = eventTime;
    }

    public String getEventVenue() {
        return eventVenue;
    }

    public void setEventVenue(String eventVenue) {
        this.eventVenue = eventVenue;
    }

    @Override
    public String toString() {
        return "OrderRequest{" +
                "catererName='" + catererName + '\'' +
                ", packageType='" + packageType + '\'' +
                ", quantity=" + quantity +
                ", drinks=" + drinks +
                ", starter=" + starter +
                ", mainDish=" + mainDish +
                ", dessert=" + dessert +
                ", totalPrice=" + totalPrice +
                ", eventDate=" + eventDate +
                ", eventTime='" + eventTime + '\'' +
                ", eventVenue='" + eventVenue + '\'' +
                '}';
    }
}