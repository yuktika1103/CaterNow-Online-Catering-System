package com.universal.foodcatering.controller;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.universal.foodcatering.bean.Users;
import com.universal.foodcatering.service.UserService;
import jakarta.servlet.http.HttpSession;

@RestController
public class UserController {
    
    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.POST, value = "/addusers")
    public ResponseEntity<?> addUser(@RequestBody Users user) {
        try {
            userService.addUser(user);
            return ResponseEntity.ok().body(new HashMap<String, String>() {{
                put("message", "User registered successfully!");
            }});
        } catch (Exception e) {
            return ResponseEntity.status(400).body(new HashMap<String, String>() {{
                put("message", "User registration failed!");
            }});
        }
    }

    @RequestMapping(method = RequestMethod.POST, value = "/checklogin")
    public ResponseEntity<?> login(@RequestBody HashMap<String, String> loginData, HttpSession session) {
        String email = loginData.get("email");
        String password = loginData.get("password");
        
        System.out.println("Login Attempt: Email = " + email + ", Password = " + password);
        
        Optional<Users> userOptional = userService.search(email, password);
        System.out.println("User Found: " + userOptional.isPresent());

        if (userOptional.isPresent()) {
            Users user = userOptional.get();
            session.setAttribute("username", user.getName());
            session.setAttribute("role", user.getRole());
            session.setAttribute("userId", user.getId());
            session.setAttribute("email", user.getEmail());
            System.out.println("Session Set for: " + user.getEmail());
            System.out.println("Session Set for: " + session.getAttribute("userId"));
            HashMap<String, Object> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("redirect", "/home");
            response.put("user", new HashMap<String, Object>() {{
                put("id", user.getId());
                put("name", user.getName());
                put("email", user.getEmail());
            }});

            return ResponseEntity.ok()
                    .body(response);
        } else {
            System.out.println("Invalid Login Attempt!");
            HashMap<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Invalid username or password!");
            return ResponseEntity.status(401).body(errorResponse);
        }
    }
    
    @RequestMapping(method = RequestMethod.POST, value = "/checkadminlogin")
    public ResponseEntity<?> adminLogin(@RequestBody HashMap<String, String> loginData, HttpSession session) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        boolean isValid = userService.searchAdmin(email, password);

        if (isValid) {
            session.setAttribute("role", "admin");

            HashMap<String, String> response = new HashMap<>();
            response.put("message", "Login successful");
            response.put("redirect", "/home");

            return ResponseEntity.ok(response);
        } else {
            HashMap<String, String> errorResponse = new HashMap<>();
            errorResponse.put("message", "Invalid username or password!");
            return ResponseEntity.status(401).body(errorResponse);
        }
    }
    
    @GetMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session) {
        session.invalidate();
        return ResponseEntity.ok(Map.of("message", "Logged out successfully"));
    }
}