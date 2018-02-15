
$(document).ready(function(){
  $('.carousel').carousel({
  interval: 2000
  })
});

$(function() {
  $("#galerija .row div img").click(function(){
      var src = $(this).attr("src");
      $("#view").attr("src", src);
      $("#view").css("display", "block");
      $("#galerija .row div img").css("display", "none");
      $("#galerija").css("height", "0px");
      $("#galerija div").css("display", "none");
      $("#image").css("height", "auto");
      $(".close").css("display", "block");
      $("body").css("background", "black");
  });
  $(".close").click(function(){
    $("#galerija").css("height", "auto");
    $("#image").css("display", "block");
    $(this).css("display", "none");
    $("body").css("background", "white");
    $("#galerija .row div img").css("display", "block");
    $("#galerija div").css("display", "block");
    $("#view").css("display", "none");

  });
});
