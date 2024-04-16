package com.shopExperience.ecommerce.services.customer;

import com.shopExperience.ecommerce.dto.ProductDto;

import java.util.List;

public interface CustomerProductService {

    List<ProductDto> searchProductByTitle(String title);
    List<ProductDto> getAllProducts();
}
