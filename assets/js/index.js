$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
      margin:10,
      loop:true,
      dots:true,
      items:3,
      nav:true,
      autoplay:true,
      responsive:{
        0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
      },
     
       
    }
  })


  $(".dropdown").click(function(){
    $(this).find(".dropdown-menu").toggleClass('menu-li-in');
  });

  $(".menu-reponsive-button p").click(function(){
    $(".menu-reponsive-xs").toggleClass('menu-in');
  });

  $(".close-menu").click(function(){
    $(".menu-reponsive-xs").toggleClass('menu-in');
  });
});