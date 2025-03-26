package com.universal.foodcatering.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.universal.foodcatering.bean.Menu;
import com.universal.foodcatering.repository.MenuRepository;

@Service
public class MenuService {
    
    @Autowired
    public MenuRepository menuRepository;
    
    public void addItem(Menu menu) {
        menuRepository.save(menu);
    }
    
    public void updateItem(Menu menu) {
        if(menuRepository.existsById(menu.getMenuId())) {
            menuRepository.save(menu);
        } else {
            throw new RuntimeException("Menu item not found for update");
        }
    }
    
    public void deleteItem(int id) {
        if(menuRepository.existsById(id)) {
            menuRepository.deleteById(id);
        } else {
            throw new RuntimeException("Menu item not found for deletion");
        }
    }
    
    public List<Menu> getMenu(){
        List<Menu> foodMenu = new ArrayList<>();
        menuRepository.findAll().forEach(foodMenu::add);
        return foodMenu;
    }
    
    public Optional<Menu> getMenuById(int mid){
        return menuRepository.findById(mid);
    }
    
    public Integer getMenuId(String caterer, String packageType) {
        return menuRepository.getMenuIdByCatererAndPackage(caterer, packageType).orElse(null);
    }
}