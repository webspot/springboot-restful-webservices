package net.javaguides.springboot.service;

import net.javaguides.springboot.entity.User;

import java.util.List;
import java.util.Collection;

public interface UserService {

    public User createUser(User user);

    public User updateUser(User user);

    public String deleteUser(Long userId);

    public User getUser(Long userId);

    public List<User> getAllUsers();

    // public Collection<User> bulkCreateUser(Collection<User> users);

}