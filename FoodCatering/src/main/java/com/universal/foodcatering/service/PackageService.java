package com.universal.foodcatering.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.universal.foodcatering.bean.Package;
import com.universal.foodcatering.repository.PackageRepository;

@Service
public class PackageService {
    
    @Autowired
    private PackageRepository packageRepository;
    
    public Package getPackageByType(String packageType) {
        return packageRepository.findById(packageType).orElse(null);
    }
}