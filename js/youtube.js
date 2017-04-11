var url='https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&key=AIzaSyBILlvrvbX5Ni4dB5wbMDDDJBMPaA6btuA&playlistId=PLX98sAmndWt3Lpd8amPDUVVykEHMidOvr'


$(document).ready(function(){

	$("#btn").click(function(){
		$.get(url,function(jsonResponse){
			addVideoToDOM(jsonResponse.items[0].snippet.resourceId.videoId);
			console.log(jsonResponse.items)
			$.each(jsonResponse.items,function(i,v){
				var onclick="addVideoToDOM('"+v.snippet.resourceId.videoId+"')";
				$('#others').append('<a href="#" onclick="'+onclick+'">'+v.snippet.title+'</a><br><br>')
				console.log(v)
			})
		})
	})})

// function for adding an iframe element to the DOM with the extracted video URL
// var playUrl='https://www.youtube.com/playlist?list=PLDoPjvoNmBAwXDFEEpc8TT6MFbDAC5XNB'
function addVideoToDOM(videoId) {
	$('#video').html(`<iframe
		width="560"
		height="315"
		src="https://www.youtube.com/embed/${videoId}"
		frameborder="0"
		allowfullscreen>
		</iframe>`
		);
}