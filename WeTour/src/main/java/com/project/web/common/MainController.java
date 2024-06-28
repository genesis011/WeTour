package com.project.web.common;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Controller
public class MainController {
	@GetMapping("/")
	public String index(HttpServletRequest request, HttpServletResponse response) {
		
		String page = null;
		page = "main";
		
		return page;
	}
	@GetMapping(value={"/companyform","/admin/companyorm"})
	public String companyForm(HttpServletRequest request, HttpServletResponse response) {
		
		String page=null;
		page="/customer/CompanyForm";
		return page;
	}
}
