jQuery('document').ready(function($){
    var MenuBtn = $('.menu-icon'),
    menu=$('.navigation ul');


    MenuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }
    });
    
    
});