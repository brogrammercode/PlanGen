package com.plangen.template.types;

import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class ServerResponse {
    private final boolean success;
    private final String message;
    private final Map<String, Object> data;
}
