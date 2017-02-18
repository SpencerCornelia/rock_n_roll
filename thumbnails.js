window.onload = initPage;

function initPage() {
	//find the thumbnails on the page
	thumbs = document.getElementById("thumbnailPane").getElementsByTagName("IMG");

	for (var i = 0; i < thumbs.length; i++) {
		image = thumbs[i];
		image.onclick = function() {
			document.getElementById("itemDetail").src = detailURL;
			getDetails(this.title);
		}
	}
}