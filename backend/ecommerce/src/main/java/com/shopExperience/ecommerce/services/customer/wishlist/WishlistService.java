package com.shopExperience.ecommerce.services.customer.wishlist;

import com.shopExperience.ecommerce.dto.WishlistDto;

import java.util.List;

public interface WishlistService {

    WishlistDto addProductToWishlist(WishlistDto wishlistDto);

    List<WishlistDto> getWishlistByUserId(Long userId);
}
