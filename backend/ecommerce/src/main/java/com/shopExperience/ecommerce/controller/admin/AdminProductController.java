package com.shopExperience.ecommerce.controller.admin;

import com.shopExperience.ecommerce.dto.FAQDto;
import com.shopExperience.ecommerce.dto.ProductDto;
import com.shopExperience.ecommerce.services.admin.adminproduct.AdminProductService;
import com.shopExperience.ecommerce.services.admin.faq.FAQService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminProductController {

    private final AdminProductService adminProductService;

    private final FAQService faqService;
    // Model Attribute is used for multipart images instead of requestbody
    @PostMapping("/product")
    public ResponseEntity<ProductDto> addProduct(@ModelAttribute ProductDto productDto) throws IOException {
        ProductDto productDto1 = adminProductService.addProduct(productDto);

        return ResponseEntity.status(HttpStatus.CREATED).body(productDto1);
    }

    @GetMapping("/products")
    public ResponseEntity<List<ProductDto>> getAllProducts() {
        List<ProductDto> productDtos = adminProductService.getAllProducts();

        return ResponseEntity.ok(productDtos);
    }

    @GetMapping("/search/{name}")
    public ResponseEntity<List<ProductDto>> getAllProductsByName(@PathVariable String name) {
        List<ProductDto> productDtos = adminProductService.getAllProductsByName(name);

        return ResponseEntity.ok(productDtos);
    }

    @DeleteMapping("/product/{productId}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long productId) {
        boolean deleted = adminProductService.deleteProduct(productId);

        if(deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/faq/{productId}")
    public ResponseEntity<FAQDto> postFAQ(@PathVariable Long productId, @RequestBody FAQDto faqDto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(faqService.postFAQ(productId, faqDto));
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable Long productId) {
        ProductDto productDto = adminProductService.getProductById(productId);

        if(productDto != null){
            return ResponseEntity.ok(productDto);
        }

        return ResponseEntity.notFound().build();
    }

    @PutMapping("/product/{productId}")
    public ResponseEntity<ProductDto> updateProduct(@PathVariable Long productId, @ModelAttribute ProductDto productDto) throws IOException {
        ProductDto updatedProduct = adminProductService.updateProduct(productId, productDto);

        if(updatedProduct != null){
            return ResponseEntity.ok(updatedProduct);
        }

        return ResponseEntity.notFound().build();
    }
}
