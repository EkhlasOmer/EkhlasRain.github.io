$(document).ready(function(){
	loadSkills();
});
function loadSkills(){
	$.ajax({
		url: "../skills.json",
		type: 'GET',
		success: function(json){
			result(json);
		}
	})
}
function result(data){
	var html= '';
	html+= '<ul>';
	$.each(data.skills, function(i,item){
		html+= '<li><h1>' + item.name +'</h1>';
		html+= '<p>'+ item.description+'</p></li>';
	})
	$('.container').html(html);
}