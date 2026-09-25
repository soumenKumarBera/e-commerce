package kumar.config;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import kumar.services.CustomUserDetails;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.*;



@Component
public class JwtHelper {

    @Value("${jwt.token.validity}")
    private long JWT_VALIDITY;

    @Value("${jwt.secret}")
    private String SECRET_KEY;


    public String generateToken(UserDetails userDetails){

        List<String> role = new ArrayList<>();

        for(GrantedAuthority grantedAuthority: userDetails.getAuthorities()){

            role.add(grantedAuthority.getAuthority());

        };

        CustomUserDetails customUserDetails = (CustomUserDetails) userDetails;

        Map<String, Object> clams = new HashMap<>();

        clams.put("id", customUserDetails.getId());
        clams.put("firstName", customUserDetails.getFirstName());
        clams.put("lastName", customUserDetails.getLastName());
        clams.put("Roles", role);

        String token = Jwts.builder()
                .claims(clams)
                .subject(userDetails.getUsername())
                .issuedAt(new Date(System.currentTimeMillis())) //issueDate
                .expiration(new Date(System.currentTimeMillis() + JWT_VALIDITY * 1000)) //expiredTime
                .signWith(getKey(), Jwts.SIG.HS512)  //secret key
                .compact();

            return token;

    }

    public SecretKey getKey(){

        byte[] bytes = SECRET_KEY.getBytes();
        return Keys.hmacShaKeyFor(bytes);

    }


}
