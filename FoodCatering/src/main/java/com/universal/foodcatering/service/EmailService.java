package com.universal.foodcatering.service;

import com.universal.foodcatering.dto.OrderDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private TemplateEngine templateEngine;

    public void sendOrderConfirmation(String toEmail, String userName, OrderDetails orderDetails) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        
        // Set email properties
        helper.setTo(toEmail);
        helper.setSubject("Order Confirmation #" + orderDetails.getOrderId());
        
        // Prepare the evaluation context
        Context context = new Context();
        context.setVariable("name", userName);
        context.setVariable("order", orderDetails);
        
        // Process the template
        String htmlContent = templateEngine.process("order-confirmation", context);
        helper.setText(htmlContent, true);
        
        mailSender.send(message);
    }
}