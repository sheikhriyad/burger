!(function (e) {
	"use strict";
	if (
		(e(window).scroll(function () {
			e(this).scrollTop() > 50 ? e("#header").addClass("header-scrolled") : e("#header").removeClass("header-scrolled");
		}), e("#nav-menu-container").length)) {
		var a = e("#nav-menu-container").clone().prop({
			id: "mobile-nav"
		});
		e("body").append(a),
		e(document).on("click", "#mobile-nav-toggle", function () {
			e("body").toggleClass("mobile-nav-active"), e("#mobile-nav-toggle i").toggleClass("fa-times fa-bars");
		}),
		e(document).click(function (a) {
			var t = e("#mobile-nav, #mobile-nav-toggle");
			t.is(a.target) || 0 != t.has(a.target).length || (e("body").hasClass("mobile-nav-active") && (e("body").removeClass("mobile-nav-active"), e("#mobile-nav-toggle i").toggleClass("fa-times fa-bars")));
		});
	} else e("#mobile-nav, #mobile-nav-toggle").length && e("#mobile-nav, #mobile-nav-toggle").hide();
	e("#logo a, .nav-menu a, #mobile-nav ul li a, .back-to-top").on("click", function () {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var a = e(this.hash);
			if (a.length) {
				var t = 0;
				return (e("#header").length && ((t = e("#header").outerHeight()), e("#header").hasClass("header-scrolled") || (t -= 20)), e("html, body").animate({
					scrollTop: a.offset().top - t
				}, 1500, "easeInOutExpo"), e(this).parents(".nav-menu").length && e(".nav-menu .menu-active").removeClass("menu-active"), e("body").hasClass("mobile-nav-active") && (e("body").removeClass("mobile-nav-active"), e("#mobile-nav-toggle i").toggleClass("fa-times fa-bars")), !1);
			}
		}
	});
	var t = e("section"),
		o = e(".nav-menu, #mobile-nav"),
		n = e("#header").outerHeight();
	e(window).on("scroll", function () {
		var a = e(this).scrollTop();
		t.each(function () {
			var t = e(this).offset().top - n,
				i = t + e(this).outerHeight();
			a >= t && a <= i && (o.find("li").removeClass("menu-active menu-item-active"), o.find('a[href="#' + e(this).attr("id") + '"]').parent("li").addClass("menu-active menu-item-active"));
		});
	});
	// $(document).ready(function() {
	// 	$('.intro-right').slick({
	// 		autoplay: true,
	// 		arrows: false,
	// 		autoplaySpeed: 6000,
	// 		fade: true,
	// 		fadeSpeed: 8000,
	// 		zIndex: 996
	// 	});
	// });
	$(document).ready(function () {
		$('.about-slider').slick({
			autoplay: true,
			arrows: false,
			autoplaySpeed: 6000,
			fade: true,
			fadeSpeed: 8000,
			zIndex: 996
		});
	});
	const burgerPreview = document.querySelector("#burger-preview");
	const burgerItem = document.querySelectorAll("#burger-item");
	burgerItem.forEach(el => {
		el.addEventListener("mouseover", () => {
			let bg = el.getAttribute("data-bg");
			burgerPreview.style.background = `url(${bg}) no-repeat center /contain`;
		});
	});
	const snacksPreview = document.querySelector("#snacks-preview");
	const snacksItem = document.querySelectorAll("#snacks-item");
	snacksItem.forEach(el => {
		el.addEventListener("mouseover", () => {
			let bg = el.getAttribute("data-bg");
			snacksPreview.style.background = `url(${bg}) no-repeat center /contain`;
		});
	});
	const beverazesPreview = document.querySelector("#beverazes-preview");
	const beverazesItem = document.querySelectorAll("#beverazes-item");
	beverazesItem.forEach(el => {
		el.addEventListener("mouseover", () => {
			let bg = el.getAttribute("data-bg");
			beverazesPreview.style.background = `url(${bg}) no-repeat center /contain`;
		});
	});
	new WOW().init();
	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp',
		topDistance: '300',
		topSpeed: 3000,
		animation: 'fade',
		animationInSpeed: 1500,
		animationOutSpeed: 1500,
		scrollText: '<i class="fas fa-level-up-alt"></i>',
		activeOverlay: false,
	});
})(jQuery);