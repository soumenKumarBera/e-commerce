package kumar.controller;

import kumar.config.JwtHelper;
import kumar.jwt.AuthRequest;
import kumar.jwt.AuthenticationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtHelper jwtHelper;

@PostMapping
private ResponseEntity<AuthenticationResponse> login(@RequestBody AuthRequest authRequest){

    String email = authRequest.getEmail();
    String password = authRequest.getPassword();

    UserDetails userDetails = athenticate(email, password);

    String jwtToken = jwtHelper.generateToken(userDetails);



    return new ResponseEntity<>(new AuthenticationResponse(jwtToken), HttpStatus.OK);




}

    private UserDetails athenticate(String email, String password) {

        UsernamePasswordAuthenticationToken upat = new UsernamePasswordAuthenticationToken(email, password);

        Authentication authentication = authenticationManager.authenticate(upat);

        return (UserDetails) authentication.getPrincipal();

    }


}
