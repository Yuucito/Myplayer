function generateEmbed() {
    let input = document.getElementById("videoInput").value.trim();

    if (!input) {
        alert("Por favor, ingrese un ID de Google Drive o una URL de video.");
        return;
    }

    let videoUrl;

    // Detecta si es un ID de Google Drive (no tiene "http")
    if (!input.includes("http")) {
        const apiKey = "AIzaSyAIpSmdpo48g_EK9kQdcuDKEYJtyqNEGAU"; // Reemplaza con tu clave de API de Google
        videoUrl = `https://www.googleapis.com/drive/v3/files/${input}?alt=media&key=${apiKey}`;
    } else {
        videoUrl = input; // URL MP4 directa
    }

    let embedCode = `<iframe src="player.html?video=${encodeURIComponent(videoUrl)}" width="640" height="360" frameborder="0" allowfullscreen></iframe>`;

    document.getElementById("embedCode").value = embedCode;

    // Vista previa
    document.getElementById("video-container").innerHTML = `
        <iframe src="player.html?video=${encodeURIComponent(videoUrl)}" width="640" height="360" frameborder="0" allowfullscreen></iframe>
    `;
}
