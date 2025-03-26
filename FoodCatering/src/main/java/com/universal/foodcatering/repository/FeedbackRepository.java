package com.universal.foodcatering.repository;


import com.universal.foodcatering.bean.Feedback;
import org.springframework.data.repository.CrudRepository;

public interface FeedbackRepository extends CrudRepository<Feedback, Integer> {
}
