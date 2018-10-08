<<<<<<< HEAD
    var myDate = new Date(); /*Overkskrift til forsiden*/
=======

// LANDINGPAGE
//SLIDER

  $(document).ready(function() {
    $("#lightSlider").lightSlider();
  });

  $(document).ready(function() { var slider =
 $("#content-slider").lightSlider({
           keyPress:true,
           speed: 1000,
           auto: true,
           loop: true,
           thumbItem: 6,
           pause: 5000,
           item: 3,
           centerSlide:true,
           enableDrag:true,

       });
});

    var myDate = new Date();
>>>>>>> 27c31e75ed1678738c1aadb77550f0ce6be0a433
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'God morgen';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'God eftermiddag';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'God aften';

  document.getElementById('lblGreetings').innerHTML =
<<<<<<< HEAD
        '<b>' + greet + '</b> og velkommen til biblioteket!'; 
/* slut Overkskrift til forsiden*/
=======
        '<b>' + greet + '</b> and welcome to Encodedna.com!';
>>>>>>> 27c31e75ed1678738c1aadb77550f0ce6be0a433
