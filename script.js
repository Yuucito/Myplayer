document.getElementById("video-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Obtener la URL del video ingresada por el usuario
  const videoUrl = document.getElementById("video-url").value;

  // Validar que se haya ingresado una URL
  if (!videoUrl) {
    alert("Por favor, ingresa una URL válida.");
    return;
  }

  // Generar la URL del iframe con la URL del video como parámetro
  const iframeUrl = `https://yuucito.github.io/Myplayer/embed.html?video=${encodeURIComponent(videoUrl)}`;

  // Mostrar el iframe en la vista previa
  const iframePreview = document.getElementById("preview-iframe");
  iframePreview.src = iframeUrl;

  // Opcional: Mostrar la URL del iframe para copiar
  alert(`Copia este iframe:\n<iframe src="${iframeUrl}" width="640" height="360" frameborder="0" allowfullscreen></iframe>`);
});
