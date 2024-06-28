<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %> 
<!DOCTYPE html>
<html>
<head>
   <!--- basic page needs
   ================================================== -->
   <meta charset="UTF-8">
	<title>메인페이지</title>
	<meta name="description" content=""> 
	<meta name="author" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="css/header/bootstrap.min.css">
	<link rel="stylesheet" href="css/header/jquery.fancybox.css">
	<link rel="stylesheet" href="css/header/owl.carousel.css">
	<link rel="stylesheet" href="css/header/owl.transitions.css">
	<link rel="stylesheet" href="css/header/main.css">
	<link rel="stylesheet" href="css/header/responsive.css">
	<link rel="stylesheet" href="css/header/animate.min.css">
	<link rel="stylesheet" href="css/header/line-icon.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
   <!-- mobile specific metas
   ================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
 	<!-- CSS
   ================================================== -->
   <link rel="stylesheet" href="/css/base.css"> 
   <link rel="stylesheet" href="/css/vendor.css"> 
   <link rel="stylesheet" href="/css/main.css">    
   <link rel="stylesheet" href="/css/company.css">    
   <!-- script
   ================================================== -->
	<script src="js/main.js"></script>
	<script src="js/modernizr.js"></script>
	<script src="js/pace.min.js"></script>
	<script src="js/script.js"></script>
	<script src="js/biz/yb.lnb.js"></script>
	<script src="js/slide.js"></script>

   <!-- favicons
	================================================== -->
</head>
<body id="top">
<!-- header section -->
	<!-- =============== header =============== -->
<section class="banner" role="banner">
   <header class="main-header" id="header">
	<div class="header-content clearfix">
		<a class="logo" href="#">
			<img src="images/logo.png" alt="">
		</a> 
		<!-- navigation section  -->
		<nav class="navigation" role="navigation">
		  <ul class="primary-nav">
			<li><a href="#intro">홈</a></li>
			<li><a href="#features">국내여행</a></li>
			<li><a href="#infos">해외여행</a></li>
			<li><a href="#stats">항공</a></li>
			<li><a href="#pricing">호텔</a></li>
			<li><a href="#testimonials1">렌터카</a></li>
			<li><a href="#download">기업/단체</a></li>
			<li><a href="#subscribe">커뮤니티</a></li>
		  </ul>
		</nav>
		<a href="#" class="nav-toggle">Menu<span></span></a>
	</div>
   </header>
</section> <!-- /download -->
   <!-- 커뮤니티 스크롤 -->
<!-- snb -->
<div id="container" class="clearfix">
 <aside class="sidebar">
   <h3 class="tit_a_title">[고객센터]</h3>
	  <p class="snb_menu"><a href="#">공지사항</a></p>
	  <p class="snb_menu"><a href="">자주하는 질문</a></p>
	  <p class="snb_menu on_open"><a href="#none" class="active">고객문의</a></p>
	<ul class="snb_active" style="display:block">
	  <li><a href="#" class="active_form">자주하는질문</a></li>
	  <li><a href="#" class="active_form">견적문의</a></li>
	</ul>
	<h3 class="tit_b_title">[ARS상담]</h3>
	   <p class="snb_name"><a>@운영시간</a></p>
		 <p class="active"><a>월-금 09:00~18:00</a></p>
		 <p class="active"><a>*공휴일/주말 휴무*</a></p>
	   <p class="snb_name"><a>@고객센터</a></p>
		 <p class="active"><a>080-0000-0000</a></p>
	   <p class="snb_name"><a>@여행상담(국내/해외)</a></p>
		 <p class="active"><a>080-1234-1234</a></p>
	   <p class="snb_name"><a>@항공상담(국내/국외)</a></p>
		 <p class="active"><a>080-5678-5678</a></p>
</aside>
</div>
<!-- /snb -->
<!-- 슬라이드 이미지 -->
<section class="biz_travel_type">
<div id="testimonial-slider" class="flexslider animate-this">
	<ul class="slides">	
	  <li>
		<p>&ldquo;<img src="/images/s1.jpg" alt="">&rdquo;</p>
	  </li>						
	  <li>
		<p>&ldquo;<img src="/images/s2.jpg" alt="">&rdquo;</p>
							
	  </li>						
	  <li>
		<p>&ldquo;<img src="/images/s3.jpg" alt="">&rdquo;</p>
	  </li>
	</ul>
</div>
<!-- //슬라이드 이미지 -->	
<!-- =============== 기업/단체 =============== -->
   <ul class="biz_left">
     <li class="mice">
	   <p class="tit">기업/출장</p>
	   <p class="txt">전문가와 함께하는<br>특별 이벤트</p>
	   <p class="desc">기업에서 주최하는 대규모 해외 이벤트 행사를<br>원하신다면, 우리투어 전문가와 함께<br>기획 단계에서 부터 시작해보세요.</p>
	   <a href="#" class="btn_wit_g type_btn">견적 문의하기</a>
   </li>
   </ul>
   <ul class="biz_right">
      <li class="friendship">
	    <p class="tit">친목/동호회</p>
	    <p class="txt">우리들만을 위한<br>안전하고 특별한 여행</p>
	    <p class="desc">여러분의 안전하고 패키지 여행계획을 위해<br>여행 전문가와 1대1 맞춤 상담 프로그램으로<br>특별한 여행을 준비해보세요.</p>
	    <a href="#" class="btn_wit_g type_btn">견적 문의하기</a>
      </li>
  </ul>
</section>
<!-- =============== Company scroll_action =============== -->
</body>
</html>