function generateEmbed() {
    let videoId = document.getElementById("videoId").value.trim();
    if (!videoId) {
        alert("Por favor, ingrese un ID de Google Drive.");
        return;
    }

    let videoUrl = `https://drive.google.com/uc?export=download&id=${videoId}`;
    let embedCode = `<iframe src="player.html?video=${videoId}" width="640" height="360" frameborder="0" allowfullscreen></iframe>`;
    
    document.getElementById("embedCode").value = embedCode;
    document.getElementById("video-container").innerHTML = `
        <video id="video-player" controls>
            <source src="${videoUrl}" type="video/mp4">
        </video>
    `;

    fluidPlayer("video-player");
}
