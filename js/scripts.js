

var isItATriangle = function(side1,side2,side3){
  alert("function fires");
    if(side1 + side2 <= side3 || side2 + side3 <= side1 || side3 + side1 <= side2){
    alert("not a triangle");
  } else if (side1 === side2 && side2 === side3){
    alert("equalateral");
  } else if(side1 === side2 || side1 === side3 || side2 === side3){
    alert("this is an isosceles triangle");
  }else{
    alert("this is a scalene triangle");
  }

}



$(document).ready(function(){
  $(".btn").click(function(){
    alert("hello");
    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    isItATriangle(side1,side2,side3);
    console.log(side1);
    console.log(side2);
    console.log(side3);
  });
});
