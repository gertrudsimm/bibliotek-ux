

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

//SOGE-SIDE

//DIALOGBOX
function popOp(e) {
// $("#dialog").innerHTML = "<h3>Sucess!</h3><p>Du har reserveret</p>" + document.getElementById(e.id).value;
document.getElementById("dialog").innerHTML ='<h3>Sucess!</h3><p>Du har reserveret:</p><p>'+document.getElementById(e.id).value+'</p><p>Du kan hente den mandag d. 15. oktober i receptionen</p>';
document.getElementById("dialog").classList.add("show");
} //popOp slut


/**
 * file: xml-seek-word.html
 * formål: henter data om bøger fra EAAA Bibliotekets API
 **/
$(document).ready(function() {

  // get user input
  $("#myTextBox").on("change paste keyup", function() {

    // query:
    wrd = 'https://eaaa.reindex.net/EAAA/main/Api.php?Focus=rsshitlist&qe='
    wrd += encodeURIComponent($(this).val()) // uri encoder søgestrengen
    wrd += '&pagesize=500&page=1&format=rss';

    //let link = $('#test'); // viser uri til APIen som link i browseren
    //link.html('<a href="' + wrd + '">' + wrd + '</a>');

    $('#test').show();

  });




  $('#submit').click(function() {

    // "renser" #indhold ...
    $('#indhold').html('');

      $(".fokus" ).addClass( "show" );

    //$('#test').hide();

    // henter data via AJAX
    $.ajax({
      type: "GET",
      url: wrd,
      cache: false,
      dataType: "xml",
      success: function(xml) {

        //console.log(xml); // viser XML-strukturen i console-inspect-tool

        $(xml).find('item').each(function() { // ved hver <item> gøres følgende ...

          // vælger data med .find() og gemmer dem i variabler
          let titel = $(this).find('title').text();
          let forfatter = $(this).find('author').text();
          let beskrivelse = $(this).find('description').text();
          let billede = $(this).find('enclosure').attr("url"); // src til billedet
          let permalink = $(this).find('link').text();
          let pubdate = $(this).find('pubDate').text();

          // er der et billede? J/N?
          function visBillede(img){
            if (img !== undefined){ // hvis img ikke er undefined
              return '<img class="center" src="' + img + '" alt="billede af bogen">';
            }
            if (img == undefined){ // hvis billede er undefined
              return '<!-- billede af forsiden mangler -->';
            }
          }


          // tilføjer (append) markup til #indhold
          $('#indhold').append('<div class="bog">' + // .bog en bogkasse begynder
            '<a href="' + permalink + '" target="_blank">'+ visBillede( billede ) + '</a>' + // billede (måske)
            '<div class="tit"><h3><i class="fas fa-book"></i> ' + titel + '</h3></div>' + // titel
            '<div class="forfat"><h4><i class="fas fa-user-circle"></i> By: ' + forfatter + '</h4></div>' + // forfatter
            // visBillede( billede ) + // skriver kun billedtag, hvis der er et billede
            '<div class="beskriv"><p>' + beskrivelse + '</p></div>' +
            '<div class="knap mere"><button id="'+ forfatter +'" class="ora" onclick="popOp(this)" value="' + titel + '">Bestil</button> </div>' +
            '<div class="knap reserver"><button id="blaa" onclick="myFunction()">Læs mere</button> </div>' + '<div class="fyld"></div>' + // beskrivelse
            '</div>' // bogkasse slut
          );
        })
      }
    }); // ajax slut
  }); // #submit klik slut

  $('#myTextBox').keypress(function(e){
      if(e.which == 13){//Enter key pressed
        // "renser" #indhold ...
        $('#indhold').html('');

        $(".fokus" ).addClass( "show" );
        //$('#test').hide();


        // henter data via AJAX
        $.ajax({
          type: "GET",
          url: wrd,
          cache: false,
          dataType: "xml",
          success: function(xml) {

            //console.log(xml); // viser XML-strukturen i console-inspect-tool

            $(xml).find('item').each(function() { // ved hver <item> gøres følgende ...

              // vælger data med .find() og gemmer dem i variabler
              let titel = $(this).find('title').text();
              let forfatter = $(this).find('author').text();
              let beskrivelse = $(this).find('description').text();
              let billede = $(this).find('enclosure').attr("url"); // src til billedet
              let permalink = $(this).find('link').text();
              let pubdate = $(this).find('pubDate').text();

              // er der et billede? J/N?
              function visBillede(img){
                if (img !== undefined){ // hvis img ikke er undefined
                  return '<img class="center" src="' + img + '" alt="billede af bogen">';
                }
                if (img == undefined){ // hvis billede er undefined
                  return '<!-- billede af forsiden mangler -->';
                }
              }

              // tilføjer (append) markup til #indhold
              $('#indhold').append('<div class="bog">' + // .bog en bogkasse begynder
                '<a href="' + permalink + '" target="_blank">'+ visBillede( billede ) + '</a>' + // billede (måske)
                '<div class="tit"><h3><i class="fas fa-book"></i> ' + titel + '</h3></div>' + // titel
                '<div class="forfat"><h4><i class="fas fa-user-circle"></i> By: ' + forfatter + '</h4></div>' + // forfatter
                // visBillede( billede ) + // skriver kun billedtag, hvis der er et billede
                '<div class="beskriv"><p>' + beskrivelse + '</p></div>' +
                '<div class="knap mere"><button id="'+ forfatter +'" class="ora" onclick="popOp(this)" value="' + titel + '">Bestil</button> </div>' +
                '<div class="knap reserver"><button id="blaa" onclick="myFunction()">Læs mere</button> </div>' + '<div class="fyld"></div>' + // beskrivelse
                '</div>' // bogkasse slut
              );
            })
          }
        }); // ajax slut

      }
  });


}); // document ready slut
