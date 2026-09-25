package kumar.services;

import kumar.Repository.UserRepository;
import kumar.entitys.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class MyUserServiceImplementation implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userRepository.findByEmail(username);

        if (user == null){
            System.out.println("hello");
            throw new UsernameNotFoundException("User not found with email: "+ username);
        }

        return new CustomUserDetails(user.getId(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getPassword(), new ArrayList<>());
    }


//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//
//        User user = userRepository.findByEmail(username);
//
//        if (user == null){
//            throw new UsernameNotFoundException("User not found with email: "+ username);
//
//        }
//
//        List<GrantedAuthority> authorities = new ArrayList<>();
//
//        return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(),authorities);
//    }
}
