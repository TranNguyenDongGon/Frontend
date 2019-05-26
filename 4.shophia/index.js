document.addEventListener('DOMContentLoaded',function(){
    var backtotop = document.querySelector('.backtotop');
    var trangthai = 'chuatoi';
    window.addEventListener('scroll',function(){
        var index = window.pageYOffset;
        
        if(index > 1000){
            if(trangthai == 'chuatoi'){
                backtotop.classList.add('hienra');
                trangthai = 'toiroi';
            }
        }
        else{
            if(trangthai == 'toiroi'){
                backtotop.classList.remove('hienra');
                trangthai = 'chuatoi';

            }
        }

    });

    backtotop.addEventListener('click',function(){
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    })
},false);
 