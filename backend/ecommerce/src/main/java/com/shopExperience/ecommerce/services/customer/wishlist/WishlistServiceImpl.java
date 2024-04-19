package com.shopExperience.ecommerce.services.customer.wishlist;

import com.shopExperience.ecommerce.dto.ProductDto;
import com.shopExperience.ecommerce.dto.WishlistDto;
import com.shopExperience.ecommerce.entity.Product;
import com.shopExperience.ecommerce.entity.User;
import com.shopExperience.ecommerce.entity.WishList;
import com.shopExperience.ecommerce.repository.ProductRepository;
import com.shopExperience.ecommerce.repository.UserRepository;
import com.shopExperience.ecommerce.repository.WishlistRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class WishlistServiceImpl implements WishlistService{

    private final UserRepository userRepository;

    private final ProductRepository productRepository;

    private final WishlistRepository wishlistRepository;

    public WishlistDto addProductToWishlist(WishlistDto wishlistDto) {
        Optional<Product> optionalProduct = productRepository.findById(wishlistDto.getProductId());
        Optional<User> optionalUser = userRepository.findById(wishlistDto.getUserId());

        if(optionalProduct.isPresent() && optionalUser.isPresent()) {
            WishList wishList = new WishList();
            wishList.setProduct(optionalProduct.get());
            wishList.setUser(optionalUser.get());

            return wishlistRepository.save(wishList).getWishlistDto();
        }

        return null;
    }

    public List<WishlistDto> getWishlistByUserId(Long userId) {
        return wishlistRepository.findAllByUserId(userId).stream().map(WishList::getWishlistDto).collect(Collectors.toList());
    }
}
