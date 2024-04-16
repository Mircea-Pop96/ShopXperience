package com.shopExperience.ecommerce.services.customer;

import com.shopExperience.ecommerce.dto.ProductDto;
import com.shopExperience.ecommerce.entity.Product;
import com.shopExperience.ecommerce.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerProductServiceImpl implements CustomerProductService{

    private final ProductRepository productRepository;
    public List<ProductDto> getAllProducts() {
        List<Product> products = productRepository.findAll();

        return products.stream().map(Product::getDto).collect(Collectors.toList());
    }

    public List<ProductDto> searchProductByTitle(String name) {
        List<Product> products = productRepository.findAllByNameContaining(name);

        return products.stream().map(Product::getDto).collect(Collectors.toList());
    }
}
