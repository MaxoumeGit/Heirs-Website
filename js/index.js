var logo = $(".image");

var layer = $("#main");

layer.mousemove(function (e) {
  var ivalueX = (e.pageX * -1) / 20;
  var ivalueY = (e.pageY * -1) / 20;
  var cvalueX = (e.pageX * -1) / 20;
  var cvalueY = (e.pageY * -1) / 20;
  console.log("ok");
  logo.css("transform", "translate3d(" + cvalueX + "px," + cvalueY + "px, 0)");
});