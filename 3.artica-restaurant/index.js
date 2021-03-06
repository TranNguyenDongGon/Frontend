﻿document.addEventListener("DOMContentLoaded",function () {
	new WOW().init();

	var menuItem = document.querySelectorAll('.menu__categorys ul li');
	var mynav = document.querySelector('.mynav');
	var prev_slide_button = document.querySelector('.slideButton .prev');
	var next_slide_button = document.querySelector('.slideButton .next');
	var dishes = document.querySelectorAll('.dish');
	var testimonial_button_slide = document.querySelectorAll('.slidebutton li');
	var slidesOfTestimonial = document.querySelectorAll('.testimonial');
	var added = false;
	window.addEventListener('scroll',function(){

		if(window.pageYOffset > 100){
			if(added == false){
				mynav.classList.add('fixedNav');
				added = true; // để hàm chỉ xử lý 1 lần khi cuộn cuột
			}
		}
		else{
			if(added == true){
				mynav.classList.remove('fixedNav');
				added = false;
			}
		}
	})

	var iso = new Isotope( '.menu__list', {
		itemSelector: '.food',
		layoutMode: 'masonry',
		masonry: {
			columnWidth: 540,
			gutter: 30
		  }
	  });
	// js for menu
	for(var i = 0; i < menuItem.length; i++){
		menuItem[i].addEventListener('click',function(){
			
			for (let i = 0; i < menuItem.length; i++) {
				menuItem[i].classList.remove('active');
			}
			this.classList.add('active');

			var attr = this.getAttribute('data-filter');
			iso.arrange({ filter: attr });
		})
	}

	// js for slide of testimonial
	var curIndex = 0;
	var trangthai = 'chua click';
	// biến cục bộ để có thể thay đổi giá trị
	for(var i = 0; i < testimonial_button_slide.length;i++){
		testimonial_button_slide[i].addEventListener('click',function(){

			if(trangthai == 'click roi'){return false};
			trangthai = 'click roi';
			// xu ly nut khi active
			for(var i = 0 ; i < testimonial_button_slide.length;i++){
				testimonial_button_slide[i].classList.remove('active');
			}
			this.classList.add('active');

			var curSlide = slidesOfTestimonial[curIndex];
			curButton = this;			// tinh vi tri cua active
			for(curIndex = 0; curButton = curButton.previousElementSibling;curIndex++);
			var nextSlide = slidesOfTestimonial[curIndex];

			curSlide.classList.add('leftout');
			nextSlide.classList.add('rightin');

			curSlide.addEventListener('webkitAnimationEnd',function(){
				curSlide.classList.remove('active');
				curSlide.classList.remove('leftout');
				trangthai = 'chua click';
			})

			nextSlide.addEventListener('webkitAnimationEnd',function(){
				nextSlide.classList.remove('rightin');
				nextSlide.classList.add('active');
				trangthai = 'chua click';
			})
		})
	}
},false)


 