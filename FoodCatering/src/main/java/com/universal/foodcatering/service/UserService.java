package com.universal.foodcatering.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.universal.foodcatering.bean.Users;
import com.universal.foodcatering.repository.UserRepository;

	@Service
	public class UserService {
		
		@Autowired
		public UserRepository userRepository;
		
		public void addUser(Users user) {
			userRepository.save(user);
		}
		
		public Optional<Users> search(String unm,String pwd) {
			Optional<Users> user = userRepository.search(unm, pwd);
			return user;
		}
		
		public boolean searchAdmin(String unm,String pwd) {
			List<Users> logindata = new ArrayList<>();
			
			logindata=userRepository.searchAdmin(unm, pwd);
			
			if(logindata.isEmpty())
				return false;	
			else
				return true;
		}
	}


