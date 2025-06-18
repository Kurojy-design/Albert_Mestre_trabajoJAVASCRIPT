document.addEventListener("DOMContentLoaded", () => {
    // Coordenadas de la empresa (EJ: Madrid)  
    const empresaCoords = [40.4168, -3.7038];
    const mapa = L.map("mapa").setView(empresaCoords, 13);

    // Capa Base
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: 'OpenStreetMap contributors'
    }).addTo(mapa);

    // Marcador de la Empresa
    const marcadorEmpresa = L.marker(empresaCoords)
    .addTo(mapa)
    .bindPopup("<b>NovaCore</b><br>Calle Innovación 42")
    .openPopup();

    // Intentar obtener ubicación del cliente
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (pos) {
                const clienteCoords = [pos.coords.latitude, pos.coords.longitude];

                // Marcar al cliente
                L.marker(clienteCoords)
                    .addTo(mapa)
                    .bindPopup("Tu Ubicación");

                // Dibujar línea de ruta

                const ruta = L.polyline ([empresaCoords, clienteCoords], {color: "blue"}).addTo(mapa);

                //Ajustar vita para que se vean ambos puntos
                mapa.fitBounds(ruta.getBounds());
            },
            function () {
                alert ("No se pudo obtener tu ubicación.");
            }
        );
    } else {
        alert("Tu navegador no admite geolocalización.");
    }
});