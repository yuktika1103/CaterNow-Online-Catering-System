// Menu.java - Fixed
package com.universal.foodcatering.bean;

import jakarta.persistence.*;

@Entity
@Table(name = "menu")
public class Menu {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "menu_id")
    private int menuId;

    @Column(name = "caterer_name", nullable = false)
    private String catererName;

    @ManyToOne
    @JoinColumn(name = "package_type", referencedColumnName = "package_type")
    private Package packageType;

    public Menu() {}

    public Menu(String catererName, Package packageType) {
        this.catererName = catererName;
        this.packageType = packageType;
    }

    // Getters and Setters
    public int getMenuId() { return menuId; }
    public void setMenuId(int menuId) { this.menuId = menuId; }

    public String getCatererName() { return catererName; }
    public void setCatererName(String catererName) { this.catererName = catererName; }

    public Package getPackageType() { return packageType; }
    public void setPackageType(Package packageType) { this.packageType = packageType; }
    
    // Helper method to get packageType string (for backward compatibility)
    public String getPackageTypeString() {
        return packageType != null ? packageType.getPackageType() : null;
    }
}