package com.demo.controllers;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Start {
    public static final String template = "Hello, %s!";
    public static AtomicLong idAtomicLong = new AtomicLong();

    @RequestMapping("/ready")
    public String ready(@RequestParam(value = "name", defaultValue = "World") String name){

        return String.format(template, name);
    }

}
