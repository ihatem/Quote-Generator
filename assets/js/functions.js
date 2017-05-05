/* ON LOAD */
$( document ).ready(function() {

  $.ajax({
  url: '//quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
  success: function(data) {

    var post = data.shift(); // The data is an array of posts. Grab the first one.
    var title = post.title;
    $('#quote-title').text(post.title);
    $('#quote-content').html(post.content);

    $("#header > a").hover(function(){
      $(".st0").css("fill", "rgba(52, 73, 94,1.0)");
    });
    $("#header > a").mouseleave(function(){
      $(".st0").css("fill", "rgba(52, 73, 94,0.5)");
    });

    // If the Source is available, use it. Otherwise hide it.
    if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
      $('#quote-source').html(post.custom_meta.Source);
      $("#quote-source a").text(title);
    } else {
      $('#quote-source').text(title);
    }

    var windowHeight= $(window).width();

    function myFunctionQ() {

      var $quote = $("#quote-content > p");
      var $numWords = $quote.text().split(" ").length;

      if ($numWords < 10) {
        $quote.css("font-size", "40px");
        $quote.css("line-height", "2.5rem");

      } else if (($numWords >= 10) && ($numWords < 20)) {
        $quote.css("font-size", "30px");
        $quote.css("line-height", "2rem");

      } else if (($numWords >= 10) && ($numWords < 20)) {
        $quote.css("font-size", "24px");
        $quote.css("line-height", "1.7rem");

      } else if (($numWords >= 20) && ($numWords < 30)) {
        $quote.css("font-size", "22px");
        $quote.css("line-height", "1.3rem");

      } else if (($numWords >= 30) && ($numWords < 40)) {
        $quote.css("font-size", "20px");
        $quote.css("line-height", "1.3rem");

      } else {
        $quote.css("font-size", "16px");
        $quote.css("line-height", "1.2rem");

      }
    }

    if(windowHeight < 400){
      myFunctionQ();
    }

    function myFunction() {

      var $quote = $("div#quote-content > p");
      var $numWords = $quote.text().split(" ").length;

      if (($numWords >= 10) && ($numWords < 20)) {
        $quote.css("font-size", "36px");
      } else if (($numWords >= 10) && ($numWords < 20)) {
        $quote.css("font-size", "32px");
      } else if (($numWords >= 20) && ($numWords < 30)) {
        $quote.css("font-size", "28px");
      } else if (($numWords >= 30) && ($numWords < 40)) {
        $quote.css("font-size", "24px");
      } else {
        $quote.css("font-size", "20px");
      }

    }

    myFunction();

  },
  cache: false
});

/* ON CLICK */
var i= 0;
$('.get-another-quote-button').on('click', function(e) {

  e.preventDefault();
  $.ajax({
    url: '//quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
    success: function(data) {


      var colors = ['#1abc9c', '#9b59b6', '#f1c40f', '#e67e22', '#2ecc71'];

      if (colors[i] === "#e67e22") {

        $('.heart').css("color", "rgba(52, 152, 219,1.0)");

        $('.social > a').css("color", "rgba(52, 152, 219,0.5)");

        $(".social > a").hover(function(){
          $(this).css("color", "rgba(52, 152, 219,1.0)");
        });

        $(".social > a").mouseleave(function(){
          $(this).css("color", "rgba(52, 152, 219,0.5)");
        });

      }

      else {

        $('.heart').css("color", "rgba(231, 76, 60,1.0)");

        $('.social > a').css("color", "rgba(231, 76, 60,0.5)");

        $(".social > a").hover(function(){
          $(this).css("color", "rgba(231, 76, 60,1.0)");
        });

        $(".social > a").mouseleave(function(){
          $(this).css("color", "rgba(231, 76, 60,0.5)");
        });

      }


      $('#main').css('background-color', colors[i]);


      if (i>=4)
      {
        i=0;
      }
      else
      {
        i++;
      }


      var post = data.shift(); // The data is an array of posts. Grab the first one.
      var title = post.title;
      $('#quote-title').text(post.title);
      $('#quote-content').html(post.content);

      // If the Source is available, use it. Otherwise hide it.
      if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
        $('#quote-source').html(post.custom_meta.Source);
        $("#quote-source a").text(title);
      } else {
        $('#quote-source').text(title);
      }

      function myFunction() {

        var $quote = $("div#quote-content > p");
        var $numWords = $quote.text().split(" ").length;

        if ($numWords < 10) {
          $quote.css("font-size", "40px");
        } else if (($numWords >= 10) && ($numWords < 20)) {
          $quote.css("font-size", "36px");
        } else if (($numWords >= 10) && ($numWords < 20)) {
          $quote.css("font-size", "32px");
        } else if (($numWords >= 20) && ($numWords < 30)) {
          $quote.css("font-size", "28px");
        } else if (($numWords >= 30) && ($numWords < 40)) {
          $quote.css("font-size", "24px");
        } else {
          $quote.css("font-size", "20px");
        }

      }

      myFunction();

      var windowHeight= $(window).width();

      function myFunctionQ() {

        var $quote = $("#quote-content > p");
        var $numWords = $quote.text().split(" ").length;

        if ($numWords < 10) {
          $quote.css("font-size", "40px");
          $quote.css("line-height", "2.5rem");

        } else if (($numWords >= 10) && ($numWords < 20)) {
          $quote.css("font-size", "30px");
          $quote.css("line-height", "2rem");

        } else if (($numWords >= 10) && ($numWords < 20)) {
          $quote.css("font-size", "24px");
          $quote.css("line-height", "1.7rem");

        } else if (($numWords >= 20) && ($numWords < 30)) {
          $quote.css("font-size", "22px");
          $quote.css("line-height", "1.3rem");

        } else if (($numWords >= 30) && ($numWords < 40)) {
          $quote.css("font-size", "20px");
          $quote.css("line-height", "1.3rem");

        } else {
          $quote.css("font-size", "16px");
          $quote.css("line-height", "1.2rem");

        }
      }



    	if(windowHeight < 400){
    		myFunctionQ();
        $(".source").css("display", "flex");
        $(".source").css("flex-direction", "row");
        $(".source").css("justify-content", "center");
        $(".source").css("align-items", "center");
        $(".source > p").css("margin", "0 10px 0 0");
        $(".source > p").css("font-size", "1rem");
    	}

    },
    cache: false
  });

});


});
