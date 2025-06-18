document.addEventListener("DOMContentLoaded", function () {
    fetch("data/noticias.json")
    .then ((response) => response.json())
    .then ((noticias) =>{
        const contenedor = document.getElementById("contenedor-noticias");
        noticias.forEach((noticia) => {
            const div = document.createElement("div");
            div.classList.add("noticia");
            div.innerHTML = `<h3>${noticia.titulo}</h3><p>${noticia.contenido}</p>`;
            contenedor.appendChild(div);
        });
    })
    .catch((error) => {
        console.error("Error al cargar las noticias:", error);
    });
});