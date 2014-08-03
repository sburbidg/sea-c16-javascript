$.getJSON('http://rs.hankyates.com:3000/content', function(data){
  console.log(data);
  var ii = 1
  data.forEach(function(data){
    $(".nav").append('<li class="tab" value=' + ii++ + '>' + data['name'] + '</li>');
    $(".content").append("" + data['content'] + "");
  });
});

$(document).ready(function(){
  $(".tab").click(function(){
    var wind = $(this).val();
    $(".pane").addClass("paneGone").removeClass("paneSelect");
    $("#in" + wind).removeClass("paneGone").addClass("paneSelect");
  })
})