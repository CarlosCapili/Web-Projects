function update_text() {
	var text = document.getElementById("user-text");
	var meme_text = document.getElementById("meme-text");

	meme_text.innerHTML = text.value;
}

function update_image() {
	var img = document.querySelector('img');
	var file = document.querySelector('input[type=file]').files[0];
	img.src = window.URL.createObjectURL(file);
}