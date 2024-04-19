package com.shopExperience.ecommerce.services.admin.adminOrder;

import com.shopExperience.ecommerce.dto.AnalyticsResponse;
import com.shopExperience.ecommerce.dto.OrderDto;

import java.util.List;

public interface AdminOrderService {

    List<OrderDto> getAllPlacedOrders();

    OrderDto changeOrderStatus(Long orderId, String status);

    AnalyticsResponse calculateAnalytics();
}
