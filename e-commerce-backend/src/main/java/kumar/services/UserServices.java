package kumar.services;

import kumar.entitys.User;
import kumar.exception.UserException;

public interface UserServices {

    public User createUser(User user);

    public User findUserById(Long userId) throws UserException;

    public User findUserProfileByJwt(String jwt) throws UserException;
}
