


//Question# 4A: Used more than 10 jquery Selectors

$(document).ready(function(){
  $("#intro").css("background-color", "yellow");
});

$(document).ready(function(){
  $(".intro").css("background-color","purple");
});

$(document).ready(function(){
  $(".intro").css("color","white");
});

$(document).ready(function(){
  $("#second").css("background-color", "orange");
});

$(document).ready(function(){
  $("tr:even").css("font-family", "verdana");
});

$(document).ready(function(){
  $("tr:odd").css("font-size", "22px");
});

$(document).ready(function(){
  $(":header").css("text-align", "center");
});

$(document).ready(function(){
  $("input").focus();
  $(":focus").css("background-color", "orange");
});

$(document).ready(function(){
  $("p:contains(utmost)").css("color", "blue");
});

$(document).ready(function(){
  $("p:has(span)").css("border", "solid red");
});

$(document).ready(function(){
  $(".intro").css("text-shadow", "none");
});

$(document).ready(function(){
  $("li:gt(2)").css("background-color", "yellow");
});

$(document).ready(function(){
  $("p > *").css("text-decoration", "overline");
});

$(document).ready(function(){
  $("ul li:first").css("text-indent", "2em");
});

$(document).ready(function(){
  $("li:last").css("text-transform", "uppercase");
});

$(document).ready(function(){
  $(":input").css("border", "2px solid red");
});