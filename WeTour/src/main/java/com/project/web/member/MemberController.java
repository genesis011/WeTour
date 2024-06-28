package com.project.web.member;

import org.springframework.web.bind.annotation.GetMapping;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


public class MemberController {

	@GetMapping("/login")
	public String login() {
			return "member/Login";
	}
	
	@GetMapping("/signUp")
	public String joinMember(HttpServletRequest request, HttpServletResponse response) {
		return "member/signUp";
	}

}
