function update_text() {
	var text = document.getElementById("user-text");
	var meme_text = document.getElementById("meme-text");

	meme_text.innerHTML = text.value;
}