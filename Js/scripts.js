jQuery('document').ready(function($){
    $("#seccion1").css({"height":$(window).height()+"px"});

    var MenuBtn = $('.menu-icon'),
    menu=$('.navigation ul');


    MenuBtn.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }
    });
    
    var Opc = $('.opc'),
    opcs=$('.navigation ul li ul li a');

    Opc.click(function(){
        if(opcs.hasClass('show')){
            opcs.removeClass('show');
        }else{
            opcs.addClass('show');
        }
    });


    
    
});