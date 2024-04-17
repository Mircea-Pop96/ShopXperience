package com.shopExperience.ecommerce.services.customer.cart;

import com.shopExperience.ecommerce.dto.AddProductInCartDto;
import com.shopExperience.ecommerce.dto.OrderDto;
import org.springframework.http.ResponseEntity;

public interface CartService {

    ResponseEntity<?> addProductToCart(AddProductInCartDto addProductInCartDto);

    OrderDto getCartByUserId(Long userId);
}
