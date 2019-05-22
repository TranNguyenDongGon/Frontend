document.addEventListener("DOMContentLoaded",function () {
	new WOW().init();

	var menuItem = document.querySelectorAll('.menu__categorys ul li');
	var mynav = document.querySelector('.mynav');
	var prev_slide_button = document.querySelector('.slideButton .prev');
	var next_slide_button = document.querySelector('.slideButton .next');
	var dishes = document.querySelectorAll('.dish');
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


	
},false)


 