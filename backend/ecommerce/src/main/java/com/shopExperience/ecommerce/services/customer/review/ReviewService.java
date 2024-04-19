package com.shopExperience.ecommerce.services.customer.review;

import com.shopExperience.ecommerce.dto.OrderedProductResponseDto;
import com.shopExperience.ecommerce.dto.ReviewDto;

import java.io.IOException;

public interface ReviewService {

    OrderedProductResponseDto getOrderedProductsDetailsByOrderId(Long orderId);

    ReviewDto giveReview(ReviewDto reviewDto) throws IOException;
}
