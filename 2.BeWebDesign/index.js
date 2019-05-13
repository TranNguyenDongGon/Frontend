document.addEventListener("DOMContentLoaded",function () {
	var slide_button = document.querySelectorAll('.slide_button div');
	var slide = document.querySelectorAll('.slideshow ul li');
	var	coverbottom1 = document.querySelector('.img_coverbottom1');
	var	coverbottom2 = document.querySelector('.img_coverbottom2');
	var	covertop = document.querySelector('.img_covertop');
	var iconbars = document.querySelector('.iconbars');
	var icontimes = document.querySelector('.icontimes');
	var menu = document.querySelector('.menu');
	// auto slide
	var time_slide = setInterval(function(){autoslide()},4000);
	// Lập để lấy từng phần tử trong slide_button vì nó là array	

	for (var i = 0; i < slide_button.length; i++) {
		// Từng cái sẽ đc click
		slide_button[i].onclick = function(){
			clearInterval(time_slide);
			// Hiệu ứng chuyển nút	
			// Trước đó phải xóa tất cả các class active, trong 1 thời điểm chỉ có 1 cái đc active	
			for (var i = 0; i < slide_button.length; i++) {
				slide_button[i].classList.remove('active');
			}
			this.classList.add('active');
			// Xong chuyển nút	

			// Hiệu ứng đổi slide
			// Tìm vị trí của buton_slice	
			var index_slide = 0;
			var button_active = this;
			for (index_slide; button_active = button_active.previousElementSibling; index_slide++) {};
			// tìm vị trí Xong

			// Làm khi bấm vào nút thì slide hiện ra tương ưng, áp dụng cái vị trí tìm mới nãy
			for (var i = 0; i < slide.length; i++) {
				slide[i].classList.remove('active');
				slide[index_slide].classList.add('active');
			}

			// Hiệu ứng chữ và cover
			// kết thúc hiệu ứng chuyển slide
		}
	}
	// autoslide();
	// Tự động chuyển slides
	function autoslide(){
		var index_slide = 0;
		var curslide = document.querySelector('.slideshow ul li.active');
		for (index_slide; curslide = curslide.previousElementSibling; index_slide++) {}

		// xử lý khi hết slide thì tự động quay lại slide đầu tiên
		if (index_slide < slide.length - 1) { // Vì khi < slide.length	thì nextElementSibling + 1 sẽ <= slide.length mà ko có index nào bằng chiều dài chuỗi bên phải -1
			for (var i = 0; i < slide.length; i++) {
				slide[i].classList.remove('active');
				slide[index_slide].nextElementSibling.classList.add('active');

				slide_button[i].classList.remove('active');
				slide_button[index_slide].nextElementSibling.classList.add('active');
			}
		}
		else{
			for (var i = 0; i < slide.length; i++) {
				slide[i].classList.remove('active');
				slide[0].classList.add('active');

				slide_button[i].classList.remove('active');
				slide_button[0].classList.add('active');
			}
		}
	}
	
	// Xử lý khi click vào icon menu

	iconbars.onclick = function(){
		this.classList.add('lost');
		icontimes.classList.add('animateRotate');
		menu.classList.add('appear');
	}
	icontimes.onclick = function(){
		this.classList.remove('animateRotate');
		iconbars.classList.remove('lost');
		menu.classList.remove('appear');
	}
	
},false)
 