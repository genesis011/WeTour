package com.project.web.common;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Controller
public class MainController {
	@GetMapping("/")
	public String index(HttpServletRequest request, HttpServletResponse response) {
		
		String page = null;
		page = "main";
		
		return "main";
	}
}
