package com.shopExperience.ecommerce.services.auth;

import com.shopExperience.ecommerce.dto.SignupRequest;
import com.shopExperience.ecommerce.dto.UserDto;

public interface AuthService {

    UserDto createUser(SignupRequest signupRequest);

    Boolean hasUserWithEmail(String email);
}
