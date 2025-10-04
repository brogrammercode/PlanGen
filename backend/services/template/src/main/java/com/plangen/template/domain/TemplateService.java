package com.plangen.template.domain;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TemplateService {
    private final TemplateRepository repo;

    public TemplateEntity createTemplate(TemplateEntity template) {
        TemplateEntity createdTemplate = repo.save(template);
        return createdTemplate;
    }

    public List<TemplateEntity> getAllTemplates() {
        List<TemplateEntity> templates = repo.findAll();
        return templates;
    }
}
