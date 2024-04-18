package com.shopExperience.ecommerce.services.admin.faq;

import com.shopExperience.ecommerce.dto.FAQDto;

public interface FAQService {

    FAQDto postFAQ(Long productId, FAQDto faqDto);
}
