// $.get('https://api.github.com/users/EkhlasRain/repos?sort=created',function(data){

// }
$(document).ready(function(){
  loadProjects();
  $('#btnFav').click(function(){
    $('#favourite').fadeIn();
  })
  $('#currentBtn').click(loadProjects)
});
function loadProjects(){
  $.ajax({
    url: 'https://api.github.com/users/EkhlasRain/repos?sort=created&per_page=5',
    type: 'GET',
    success: function(json){
      result(json);
    }
  })
}
function result(data){
  var html= '';
  html+= '<ul>';
  $.each(data, function(i,item){
    // html+= '<li><h1>' + item.name +'</h1>';
    html+= '<li><a href="'+ item.html_url+'" target="_blank">' + item.name +'</a></li>';
  })
  html+= '</ul>'
  $('#result').html(html);
}