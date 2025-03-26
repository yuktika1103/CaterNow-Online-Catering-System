package com.universal.foodcatering.repository;

import org.springframework.data.repository.CrudRepository;
import com.universal.foodcatering.bean.Orders;

public interface OrdersRepository extends CrudRepository<Orders, Integer> {
	
}
