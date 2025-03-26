package com.universal.foodcatering.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.universal.foodcatering.bean.Menu;
import com.universal.foodcatering.service.MenuService;

import jakarta.servlet.http.HttpSession;

@RestController
public class MenuController {
    
    @Autowired
    public MenuService menuService;
    
    @Autowired
    private HttpSession session;
    
    private boolean isAdmin() {
        String role = (String) session.getAttribute("role");
        return "admin".equals(role);
    }
    
    @RequestMapping(method = RequestMethod.POST, value = "/addmenu")
    public ResponseEntity<?> addItem(@RequestBody Menu menu) {
        if(isAdmin()) {
            menuService.addItem(menu);
            return ResponseEntity.ok(Map.of("message", "Item added successfully"));
        }
        else {
            return ResponseEntity.status(403).body(Map.of("message", "Access denied!"));
        }
    }
    
    @RequestMapping(method = RequestMethod.PUT, value = "/updatemenu")
    public ResponseEntity<?> updateItem(@RequestBody Menu menu) {
        if(isAdmin()){
            try {
                menuService.updateItem(menu);
                return ResponseEntity.ok(Map.of("message", "Item updated successfully"));
            } catch (Exception e) {
                return ResponseEntity.status(400).body(Map.of("message", e.getMessage()));
            }
        }
        else {
            return ResponseEntity.status(403).body(Map.of("message", "Access denied!"));
        }
    }
     
    @RequestMapping(method = RequestMethod.DELETE, value = "/deletemenu/{id}")
    public ResponseEntity<?> deleteItem(@PathVariable int id) {
        if (isAdmin()) {
            try {
                menuService.deleteItem(id);
                return ResponseEntity.ok(Map.of("message", "Item deleted successfully"));
            } catch (Exception e) {
                return ResponseEntity.status(400).body(Map.of("message", e.getMessage()));
            }
        }
        else {
            return ResponseEntity.status(403).body(Map.of("message", "Access denied!"));
        }
    }
     
    @RequestMapping(value = "/getmenu")
    public List<Menu> getMenu(){
        return menuService.getMenu();
    }
     
    @RequestMapping(method = RequestMethod.GET, value = "/getMenuId")
    public ResponseEntity<?> getMenuId(@RequestParam String caterer, @RequestParam String packageType) {
        Integer menuId = menuService.getMenuId(caterer, packageType);
        if (menuId != null) {
            Map<String, Integer> response = new HashMap<>();
            response.put("menu_id", menuId);
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(400).body(Map.of("message", "No such menu found!"));
        }
    }
}