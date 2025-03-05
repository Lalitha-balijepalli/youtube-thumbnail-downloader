function getThumbnail() {
    let videoURL = document.getElementById("videoURL").value;
    let videoId = extractVideoID(videoURL);

    if (videoId) {
        let thumbnailURL = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        document.getElementById("thumbnail").src = thumbnailURL;
        document.getElementById("downloadLink").href = thumbnailURL;
        document.getElementById("thumbnail-container").style.display = "block";
    } else {
        alert("Invalid YouTube URL! Please enter a correct link.");
    }
}

function extractVideoID(url) {
    let regex = /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|.*[?&]v=))([^?&]+)/;
    let match = url.match(regex);
    return match ? match[1] : null;
}
