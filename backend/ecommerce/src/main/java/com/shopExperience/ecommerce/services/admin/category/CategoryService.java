package com.shopExperience.ecommerce.services.admin.category;

import com.shopExperience.ecommerce.dto.CategoryDto;
import com.shopExperience.ecommerce.entity.Category;

import java.util.List;

public interface CategoryService {

    Category createCategory(CategoryDto categoryDto);

    List<Category> getAllCategories();
}
