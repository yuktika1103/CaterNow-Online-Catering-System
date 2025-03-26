package com.universal.foodcatering.bean;

import jakarta.persistence.*;

@Entity
@Table(name = "packages")
public class Package {
    
    @Id
    @Column(name = "package_type", length = 50)
    private String packageType;

    @Column(name = "per_plate_price", nullable = false)
    private float perPlatePrice;

    @Column(name = "description", nullable = false)
    private String description;

    public Package() {}

    public Package(String packageType, float perPlatePrice, String description) {
        this.packageType = packageType;
        this.perPlatePrice = perPlatePrice;
        this.description = description;
    }

    // Getters and Setters
    public String getPackageType() { return packageType; }
    public void setPackageType(String packageType) { this.packageType = packageType; }

    public float getPerPlatePrice() { return perPlatePrice; }
    public void setPerPlatePrice(float perPlatePrice) { this.perPlatePrice = perPlatePrice; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}
