package com.shopExperience.ecommerce.services.admin.coupon;

import com.shopExperience.ecommerce.entity.Coupon;

import java.util.List;

public interface AdminCouponService {

    Coupon createCoupon(Coupon coupon);

    List<Coupon> getAllCoupons();
}
