var count=1;
var array=[];
var array2=[];
function callback(){};
function sound(num){
  switch(num)
  {
    case 1:var audio=new Audio("sounds/green.mp3");
           audio.play();
           $(".green").addClass("ani");
           setTimeout(function(){
             $(".green").removeClass("ani");
           },100);
           break;
           case 2:var audio=new Audio("sounds/red.mp3");
                  audio.play();
           $(".red").addClass("ani");
           setTimeout(function(){
             $(".red").removeClass("ani");
           },100);
                  break;
                  case 3:var audio=new Audio("sounds/yellow.mp3");
                         audio.play();
                  $(".yellow").addClass("ani");
                  setTimeout(function(){
                    $(".yellow").removeClass("ani");
                  },100);
                         break;
                         case 4:var audio=new Audio("sounds/blue.mp3");
                                audio.play();
                         $(".blue").addClass("ani");
                         setTimeout(function(){
                           $(".blue").removeClass("ani");
                         },100);
                                break;
  }
}
function next()
{
  array2=[];
count++;
  var random=Math.floor(Math.random()*4+1);
  array.push(random);
  $(".enter").html("Level "+count);
    sound(array[array.length-1]);
}
$(".col").click(function(){
    array2.push(this.textContent);

    sound(array2[array2.length-1]);
    check(array2.length-1);
});
function check(count) {
   if(array[count]==array2[count]){
     if(array.length==array2.length){
       setTimeout(function () {
         next();
       }, 100);
     }
     }
     else{
         $(".enter").html("Game Over,Press Any key to Restart");
         var audio=new Audio("sounds/wrong.mp3");
                audio.play();
      $("body").addClass("game");
      setTimeout(function(){
          $("body").removeClass("game");
      },1000);
     }
   }

$(document).keydown(function(){
   count=1;
   array=[];
   array2=[];
var random=Math.floor(Math.random()*4+1);
array.push(random);
$(".enter").html("Level "+count);
  sound(array[array.length-1]);
});
