function generateEmbed() {
    let input = document.getElementById("videoInput").value.trim();

    if (!input) {
        alert("Por favor, ingrese un ID de Google Drive o una URL de video.");
        return;
    }

    let videoUrl;
    
    // Si el input es un ID de Google Drive (sin 'http')
    if (!input.includes("http")) {
        videoUrl = `https://drive.google.com/uc?export=download&id=${input}`;
    } else {
        videoUrl = input; // Asume que es una URL MP4 válida
    }

    let embedCode = `<iframe src="player.html?video=${encodeURIComponent(videoUrl)}" width="640" height="360" frameborder="0" allowfullscreen></iframe>`;
    
    document.getElementById("embedCode").value = embedCode;
    
    // Vista previa
    document.getElementById("video-container").innerHTML = `
        <video id="video-player" controls>
            <source src="${videoUrl}" type="video/mp4">
        </video>
    `;

    fluidPlayer("video-player");
}
