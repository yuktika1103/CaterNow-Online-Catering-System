package com.universal.foodcatering.bean;

import jakarta.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "orders")
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "caterer_name")
    private String catererName;
    
    private String customizations;
    private Integer dessert;
    private Integer drinks;
    
    @Column(name = "maindish")
    private Integer mainDish;
    
    @Column(name = "menu_id")
    private Integer menuId;
    
    @Column(name = "order_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date orderDate;
    
    @Column(name = "package_type")
    private String packageType;
    private Integer price;
    private Integer quantity;
    
    @Column(name = "starters")
    private Integer starter;
    private Boolean status;
    
    @Column(name = "user_id")
    private Integer userId;
    
    @Column(name = "eventDate")
    @Temporal(TemporalType.DATE)
    private Date eventDate;
    
    @Column(name = "eventTime", columnDefinition = "TIME")
    private Time eventTime;
    
    @Column(name = "eventVenue")
    private String eventVenue;

    // Constructors
    public Orders() {
        // Default constructor
    }

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCatererName() {
        return catererName;
    }

    public void setCatererName(String catererName) {
        this.catererName = catererName;
    }

    public String getCustomizations() {
        return customizations;
    }

    public void setCustomizations(String customizations) {
        this.customizations = customizations;
    }

    public Integer getDessert() {
        return dessert;
    }

    public void setDessert(Integer dessert) {
        this.dessert = dessert;
    }

    public Integer getDrinks() {
        return drinks;
    }

    public void setDrinks(Integer drinks) {
        this.drinks = drinks;
    }

    public Integer getMainDish() {
        return mainDish;
    }

    public void setMainDish(Integer mainDish) {
        this.mainDish = mainDish;
    }

    public Integer getMenuId() {
        return menuId;
    }

    public void setMenuId(Integer menuId) {
        this.menuId = menuId;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public String getPackageType() {
        return packageType;
    }

    public void setPackageType(String packageType) {
        this.packageType = packageType;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public Integer getStarter() {
        return starter;
    }

    public void setStarter(Integer starter) {
        this.starter = starter;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Date getEventDate() {
        return eventDate;
    }

    public void setEventDate(Date eventDate) {
        this.eventDate = eventDate;
    }

    public Time getEventTime() {
        return eventTime;
    }

    public void setEventTime(Time eventTime) {
        this.eventTime = eventTime;
    }

    // Helper method to set time from String (HH:mm format)
    public void setEventTimeFromString(String timeString) throws java.text.ParseException {
        if (timeString != null && !timeString.isEmpty()) {
            java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("HH:mm");
            this.eventTime = new Time(sdf.parse(timeString).getTime());
        }
    }

    public String getEventVenue() {
        return eventVenue;
    }

    public void setEventVenue(String eventVenue) {
        this.eventVenue = eventVenue;
    }

    @Override
    public String toString() {
        return "Orders{" +
                "id=" + id +
                ", catererName='" + catererName + '\'' +
                ", packageType='" + packageType + '\'' +
                ", quantity=" + quantity +
                ", price=" + price +
                ", eventDate=" + eventDate +
                ", eventTime=" + eventTime +
                ", eventVenue='" + eventVenue + '\'' +
                '}';
    }
}