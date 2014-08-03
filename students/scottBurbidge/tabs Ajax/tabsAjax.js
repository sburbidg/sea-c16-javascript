var tab
var content
var data

$.getJSON('http://rs.hankyates.com:3000/content', function(data){
  clip = data.name;
  content = data.content;
  console.log(data);
  $.each(data, function(clip, value){
       $(".tab").append(clip);
  });
});  

function clickHandler() {
  $(this).next().addClass("image").removeClass("noImage");
  $(this).removeClass("image").addClass("noImage");
};  

function lastImage(){
  $(".first").addClass("image").removeClass("noImage");
  $(this).removeClass("image").addClass("noImage"); 
};

function ageList(){
  var lowEnd = 0;
  var highEnd = 99;
  var ageArr = [];
  while(lowEnd <= highEnd){
     ageArr.push(lowEnd++);
  };
return ageArr
};


$(document).ready(function(){
  var age  = ageList();
  var aList = $('select');
  $.each(age, function(i){
  $('<option></option>')
      .val([i + 1])
      .text([i + 1])
      .appendTo(aList);
  });
  
  $(".tab").click(function(){
    var wind = $(this).val();
    $(".pane").addClass("paneGone").removeClass("paneSelect");
    $("#in" + wind).removeClass("paneGone").addClass("paneSelect");
  })
    
  $(".clickable").click(clickHandler);
  $(".last").click(lastImage);
})