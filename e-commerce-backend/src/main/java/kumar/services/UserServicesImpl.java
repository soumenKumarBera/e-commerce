package kumar.services;

import kumar.Repository.UserRepository;
import kumar.entitys.User;
import kumar.exception.UserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServicesImpl implements UserServices{

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {

        String firstName = user.getFirstName();
        String lastname = user.getLastName();
        String email = user.getEmail();
        String password = user.getPassword();

        User createUser = new User();
        createUser.setFirstName(firstName);
        createUser.setLastName(lastname);
        createUser.setEmail(email);
        createUser.setPassword(passwordEncoder.encode(password));


        return userRepository.save(createUser);
    }

    @Override
    public User findUserById(Long userId) throws UserException {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()){
            return user.get();
        }
        throw  new UserException("User not found with id: " + userId);

    }

    @Override
    public User findUserProfileByJwt(String jwt) throws UserException {
        return null;
    }
}
