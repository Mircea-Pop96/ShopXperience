package com.shopExperience.ecommerce.repository;

import com.shopExperience.ecommerce.entity.WishList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WishlistRepository extends JpaRepository<WishList, Long> {

    List<WishList> findAllByUserId(Long userId);
}
