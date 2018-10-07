    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'God morgen';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'God eftermiddag';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'God aften';

  document.getElementById('lblGreetings').innerHTML =
        '<b>' + greet + '</b> and welcome to Encodedna.com!';