window.addEventListener('load', function(){
	let body = document.querySelector('body');
	let picture = document.getElementById('header_picture');
	
	let id = body.id;
	
	switch (id) {
		case 'home':
			picture.style.backgroundImage = "url('img/picture_header_one.jpg')";
			break;
		case 'going_further':
			picture.style.backgroundImage = "url('img/picture_header_two.jpg')";
			break;
		case 'contact':
			picture.style.backgroundImage = "url('img/picture_header_three.jpg')";
			break;
		case 'internship':
			picture.style.backgroundImage = "url('img/picture_header_four.jpg')";
			break;
		case 'event_boulogne':
			picture.style.backgroundImage = "url('img/picture_header_five.jpg')";
			break;
		case 'event_lens':
			picture.style.backgroundImage = "url('img/picture_header_six.jpg')";
			break;
		case 'event_lille':
			picture.style.backgroundImage = "url('img/picture_header_seven.jpg')";
			break;
		case 'event_maubeuge':
			picture.style.backgroundImage = "url('img/picture_header_eight.jpg')";
			break;
		default:
			picture.style.backgroundImage = "url('img/picture_header_one.jpg')";
			break;
	}
});