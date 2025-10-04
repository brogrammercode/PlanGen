package com.plangen.template.api;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.plangen.template.types.ServerResponse;

@RestController
public class TemplateController {

    @GetMapping("/health")
    public ResponseEntity<ServerResponse> healthCheck() {
        Map<String, String> data = Map.of(
                "service", "template-service",
                "status", "ok");

        return ResponseEntity.ok(new ServerResponse(true, "Health is UPPP !!", data));
    }

}