package net.javaguides.springboot.service.impl;

import java.util.List;
import java.util.Collection;

import org.hibernate.sql.ast.tree.expression.Collation;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import net.javaguides.springboot.entity.User;
import net.javaguides.springboot.repository.UserRepository;
import net.javaguides.springboot.service.UserService;

@Service
public class UserServiceImpl implements UserService {

    UserRepository userRepo;

    public UserServiceImpl(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public User createUser(User user) {
        userRepo.save(user);
        return user;
        // throw new UnsupportedOperationException("Unimplemented method 'createUser'");
    }

    // @Override
    // public Collection<User> bulkCreateUser(@RequestBody Collection<User> users) {
    // userRepo.saveAll(users);
    // return users;
    // // throw new UnsupportedOperationException("Unimplemented method
    // 'createUser'");
    // }

    @Override
    public User updateUser(User user) {
        userRepo.save(user);
        return user;
        // throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }

    @Override
    public String deleteUser(Long userId) {
        userRepo.deleteById(userId);
        return "User deleted";
        // throw new UnsupportedOperationException("Unimplemented method 'deleteUser'");
    }

    @Override
    public User getUser(Long userId) {
        return userRepo.findById(userId).get();
        // throw new UnsupportedOperationException("Unimplemented method 'getUser'");
    }

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
        // throw new UnsupportedOperationException("Unimplemented method
        // 'getAllUsers'");
    }

}
