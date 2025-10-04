package com.plangen.template.api;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.plangen.template.domain.TemplateEntity;
import com.plangen.template.domain.TemplateService;
import com.plangen.template.types.ServerResponse;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class TemplateController {

    private final TemplateService service;

    @GetMapping("/health")
    public ResponseEntity<ServerResponse> healthCheck() {
        Map<String, Object> data = Map.of(
                "service", "template-service",
                "status", "ok");

        return ResponseEntity.ok(new ServerResponse(true, "Health is UPPP !!", data));
    }

    @PostMapping("/api/v1/template")
    public ResponseEntity<ServerResponse> createTemplate(@RequestBody TemplateEntity template) {
        TemplateEntity createdTemplate = service.createTemplate(template);
        Map<String, Object> data = Map.of("data", createdTemplate);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ServerResponse(true, "Template created successfully", data));
    }

    @GetMapping("/api/v1/template/all")
    public ResponseEntity<ServerResponse> getAllTemplates() {
        List<TemplateEntity> templates = service.getAllTemplates();
        Map<String, Object> data = Map.of("templates", templates);
        return ResponseEntity.status(HttpStatus.OK)
                .body(new ServerResponse(true, "Got all templates", data));
    }

}