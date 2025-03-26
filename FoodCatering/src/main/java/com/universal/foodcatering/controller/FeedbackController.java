package com.universal.foodcatering.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.universal.foodcatering.bean.Feedback;
import com.universal.foodcatering.repository.FeedbackRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class FeedbackController {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @RequestMapping(method = RequestMethod.POST, value="/feedback")
    public Feedback submitFeedback(@RequestBody Feedback feedback) {
        return feedbackRepository.save(feedback);
    }
    
   @RequestMapping(method = RequestMethod.GET, value="/test")
    public String test() {
        return "Backend is reachable!";
    }
}
