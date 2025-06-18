document.addEventListener("DOMContentLoaded", function() {
    const imagenes = [
        {src: "img/galeria1.png", alt: "Desarrollo Web"}, 
        {src: "img/galeria2.png", alt: "Aplicaciones móviles"},
        {src: "img/galeria3.png", alt: "Consultoría UX/UI"},
        {src: "img/galeria4.png", alt: "Hosting web"},
        {src: "img/galeria5.png", alt: "Seguridad web (SSL)"},
        {src: "img/galeria6.png", alt: "Mantenimiento técnico"}

    ];
    
    const galeria = document.getElementById("galeria");
    const lightbox = document.getElementById ("lightbox");
    const lightboxImg = document.querySelector (".lightbox-img");
    const cerrar = document.querySelector (".cerrar");

    imagenes.forEach(img => {
        const enlace = document.createElement("a");
        enlace.href = img.src;
        enlace.setAttribute ("data-lightbox", "galeria");
        enlace.innerHTML = `<img src="${img.src}" alt="${img.alt}" />`;
        
        enlace.addEventListener("click", (e) => {
            e.preventDefault(); // evita redirección
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;

        });
        galeria.appendChild(enlace);
    });

        cerrar.addEventListener("click", () => {
            lightbox.style.display = "none";
        });
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    });