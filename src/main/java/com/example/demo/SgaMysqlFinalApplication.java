<<<<<<< HEAD
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class SgaMysqlFinalApplication {

        public static void main(String[] args) {
                SpringApplication.run(SgaMysqlFinalApplication.class, args);
        }


            @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/offering").allowedOrigins("http://149.165.157.87:8082");
            }
        };

    }


}
=======
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class SgaMysqlFinalApplication {

        public static void main(String[] args) {
        	    System.out.println("Ishneet Arora");
                SpringApplication.run(SgaMysqlFinalApplication.class, args);
        }


            @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/offering").allowedOrigins("http://149.165.157.87:8082");
            }
        };
    }


}
>>>>>>> origin/dev-microservice-E
