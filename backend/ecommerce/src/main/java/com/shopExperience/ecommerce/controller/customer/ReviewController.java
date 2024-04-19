package com.shopExperience.ecommerce.controller.customer;

import com.shopExperience.ecommerce.dto.OrderedProductResponseDto;
import com.shopExperience.ecommerce.dto.ReviewDto;
import com.shopExperience.ecommerce.services.customer.review.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/customer")
public class ReviewController {

    private final ReviewService reviewService;

    @GetMapping("/ordered-products/{orderId}")
    public ResponseEntity<OrderedProductResponseDto> getOrderedProductsDetailsByOrderId(@PathVariable Long orderId) {
        return ResponseEntity.ok(reviewService.getOrderedProductsDetailsByOrderId(orderId));
    }

    @PostMapping("/review")
    public ResponseEntity<?> giveReview(@ModelAttribute ReviewDto reviewDto) throws IOException {
        ReviewDto reviewDto1 = reviewService.giveReview(reviewDto);
        if(reviewDto1 != null){
            return ResponseEntity.status(HttpStatus.CREATED).body(reviewDto1);
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something went wrong!");
    }
}
