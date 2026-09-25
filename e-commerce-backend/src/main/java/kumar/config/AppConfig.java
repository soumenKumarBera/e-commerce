package kumar.config;

import jakarta.servlet.Filter;
import jakarta.servlet.http.HttpServletRequest;
import org.jspecify.annotations.Nullable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

@Configuration
public class AppConfig {


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)throws Exception{
        http.csrf(AbstractHttpConfigurer::disable);
        http.authorizeHttpRequests(auth ->auth
                .requestMatchers("/user", "/auth").permitAll()
                .anyRequest().authenticated()
        );
//        http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//               .addFilterBefore( jwtValidator, UsernamePasswordAuthenticationFilter.class)
//
//                .cors(cors->cors.configurationSource(new CorsConfigurationSource() {
//                    @Override
//                    public  CorsConfiguration getCorsConfiguration(HttpServletRequest request) {
//                       CorsConfiguration cfg = new CorsConfiguration();
//
//                       cfg.setAllowedOrigins(Arrays.asList(
//                               "http://localhost:300"
//                       ));
//
//                       cfg.setAllowedMethods(Collections.singletonList("*"));
//                       cfg.setAllowCredentials(true);
//                       cfg.setExposedHeaders(Collections.singletonList("*"));
//                       cfg.setExposedHeaders(Arrays.asList("Authorization"));
//                       cfg.setMaxAge(3600L);
//
//
//                        return cfg;
//                    }
//                }));


        return http.build();

    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration){
        return configuration.getAuthenticationManager();
    }


    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
