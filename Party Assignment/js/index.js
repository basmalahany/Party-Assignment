/*leftmenu*/

$(".openNav").click(function () {
    $("#leftMenu").animate({ width: "200px" }, 50);
    $("#home-content").animate({ marginLeft: "200px" }, 45);
  });
  
  $(".closebtn").click(function () {
    $("#leftMenu").animate({ width: "0px" }, 50);
    $("#home-content").animate({ marginLeft: "0px" }, 45);
  });
  
  $("#leftMenu a").click(function () {
    var sectionId = $(this).attr("href");
  
    var positionOfSection = $(sectionId).offset().top;
  
    $("html , body").animate({ scrollTop: positionOfSection }, 1500);
  });
  
  $("#sliderDown .paragraphs").click(function () {
    $(".inner").not($(this).next()).slideUp(450);
    $(this).next().slideToggle(500);
  });



  window.onload = function () {
    countDownToTime("20 November 2023 10:00:00");
  };
  
  function countDownToTime(countTo) {
    let futureDate = new Date(countTo);
    futureDate = futureDate.getTime() / 1000;
  
    let sec = new Date();
    sec = sec.getTime() / 1000;
  
    timeDifference = futureDate - sec;
  
    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - days * (24 * 60 * 60)) / 3600);
    let mins = Math.floor(
      (timeDifference - days * (24 * 60 * 60) - hours * 3600) / 60
    );
    let secs = Math.floor(
      timeDifference - days * (24 * 60 * 60) - hours * 3600 - mins * 60
    );
  
    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $(".seconds").html(`${secs} s`);
  
    setInterval(function () {
      countDownToTime(countTo);
    }, 1000);
  }
  
  var maxLength = 100;
  $("textarea").keyup(function () {
    var length = $(this).val().length;
    var AmountLeft = maxLength - length;
    if (AmountLeft <= 0) {
      $("#char").text("Your available character finished");
    } else {
      $("#char").text(AmountLeft);
    }
  });
  