package com.universal.foodcatering.repository;

import org.springframework.data.repository.CrudRepository;
import com.universal.foodcatering.bean.Package;

public interface PackageRepository extends CrudRepository<Package, String> {
}