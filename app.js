$(".btnPortfolio").click(function() {
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(".naslov-radovi").offset().top},
        'slow');
    
});

$(".button-down").click(function() {
    $('html,body').animate({
        scrollTop: $(".gallery").offset().top},
        'slow');
    
});

$(function(){
    var circle = $(".circle");
    $("#selectMenu").selectmenu({
        icons: { button: "  ui-icon-caret-1-s" },
        change: function (event, data){
            circle.css({
                width: data.item.value,
                height: data.item.value
            });
        }
    });
    
    $("#boja").selectmenu({
        change: function(event, data){
            circle.css("background-color", data.item.value);
        }
    });
});

$( function() {
    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }
    function refreshSwatch() {
      var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( ".slider-item1" ).css( "background-color", "#" + hex );
    }
 
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 255 );
    $( "#green" ).slider( "value", 140 );
    $( "#blue" ).slider( "value", 60 );
  } );

$(function(){
    let val = 0;
    val = document.querySelector("#spinner").value;
    console.log(val);
   $("#spinner").spinner({
       min:0,
       max:200,
       step:5
   }); 
   
    
});
 $( "#spinner" ).on( "spin", function( event, ui ) {
        let value = $( "#spinner" ).spinner( "value" );
        let img1 = document.querySelector('.toggleImage1');
        let img2 = document.querySelector('.toggleImage2');
        let img3 = document.querySelector('.toggleImage3');
        let img4 = document.querySelector('.toggleImage4');
        let img5 = document.querySelector('.toggleImage5');
        if(value < 10){
            
            img1.style.display="block";
            img2.style.display="none";
        }
        if((value >= 10) && (value <= 25)){
            
            img1.style.display="none";
            img2.style.display="block";
            img3.style.display="none";
        }
        if((value >= 25) && (value <= 65)){
           
            img2.style.display="none";
            img3.style.display="block";
            img4.style.display="none";
        }
        if((value >= 65) && (value <= 110)){
            
            img3.style.display="none";
            img4.style.display="block";
            img5.style.display="none";
        }
        if((value >= 110) && (value <= 200)){
           
            img4.style.display="none";
            img5.style.display="block";
            img1.style.display="none";
        }
    } );

$(".toggle").bind('click', function(){
   $(".side-menu").addClass("side-menu-slideIn");
    $(".container").addClass("noScroll");
    $(".side-menu").removeClass("side-menu-slideOut");
});

$("#menu-x").bind('click', function(){
   $(".side-menu").addClass("side-menu-slideOut");
    $(".container").removeClass("noScroll");
    $(".side-menu").removeClass("side-menu-slideIn");
});

$("#spinner").bind("keydown", function (event) {
    event.preventDefault();
});











