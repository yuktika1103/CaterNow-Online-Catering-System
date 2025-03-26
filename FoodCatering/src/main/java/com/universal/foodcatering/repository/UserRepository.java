package com.universal.foodcatering.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.universal.foodcatering.bean.Users;

public interface UserRepository extends CrudRepository<Users, Integer>{
	
	@Query(value="SELECT u from Users u WHERE u.email=?1 AND u.password=?2")
	public Optional<Users> search(String email, String password); 

	@Query(value="SELECT u from Users u WHERE u.email=?1 AND u.password=?2 AND u.role='admin'")
	public List<Users> searchAdmin(String email, String password);
}
