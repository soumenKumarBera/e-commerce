package kumar.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@ControllerAdvice
public class GlobalException {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<Map<String, Object>> globalException(Exception exception){

        Map<String, Object> map = new HashMap<>();

        map.put("Status", "ERROR");
        map.put("Message",exception.getMessage());

        return  new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);

    }
}
