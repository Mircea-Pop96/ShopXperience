package com.shopExperience.ecommerce.repository;

import com.shopExperience.ecommerce.entity.FAQ;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FAQRepository extends JpaRepository<FAQ, Long> {
}
