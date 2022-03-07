var logo = $(".logo");
var spirites = $(".spirites");

var layer = $("#home_logo");

layer.mousemove(function (e) {
  var ivalueX = (e.pageX * -1) / 20;
  var ivalueY = (e.pageY * -1) / 20;
  var cvalueX = (e.pageX * -1) / 20;
  var cvalueY = (e.pageY * -1) / 20;
  console.log("ok");
  logo.css("transform", "translate3d(" + cvalueX + "px," + cvalueY + "px, 0)");
  spirites.css("transform", "translate3d(" + (cvalueX/10) + "px," + (cvalueY/10) + "px, 0)");
});
