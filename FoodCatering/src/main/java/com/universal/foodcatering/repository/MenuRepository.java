// MenuRepository.java - Fixed
package com.universal.foodcatering.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.universal.foodcatering.bean.Menu;

public interface MenuRepository extends CrudRepository<Menu, Integer> {
    @Query("SELECT m.menuId FROM Menu m WHERE m.catererName = ?1 AND m.packageType.packageType = ?2")
    public Optional<Integer> getMenuIdByCatererAndPackage(String catererName, String packageType);
}