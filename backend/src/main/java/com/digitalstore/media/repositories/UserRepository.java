package com.digitalstore.media.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.digitalstore.media.models.UserModel;

@Repository
public interface UserRepository extends MongoRepository<UserModel, String>{
    UserModel findByUsername(String username);
    UserModel findByEmail(String email);

}
