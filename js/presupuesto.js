document.addEventListener("DOMContentLoaded", () => {
    const productoSelect = document.getElementById("producto");
    const plazoInput = document.getElementById ("plazo");
    const extras = document.querySelectorAll (".extra");
    const presupuestoInput = document.getElementById("presupuesto");
    const form  = document.getElementById("form-presupuesto");
    const mensajeExito = document.getElementById("mensaje-exito");

    function calcularPresupuesto () {
        const productoPrecio = parseInt(productoSelect.selectedOptions[0].dataset.precio);
        const plazo = parseInt (plazoInput.value);
        let extrasTotal = 0;

        extras.forEach(extra => {
            if (extra.checked) {
                extrasTotal += parseInt(extra.value);
            }
        });

        let total = productoPrecio + extrasTotal;
        //Aplicar descuento por plazo: cuanto más plazo, mas descuento (hasta 20%)
        let descuento = 0;
        if (plazo >= 60) descuento = 0.2;
        else if (plazo >= 30) descuento = 0.1;

        total = total - total * descuento;

        presupuestoInput.value = total.toFixed (2) + "€";
    }

    //Recalcular en cada cambio 
    productoSelect.addEventListener ("change", calcularPresupuesto);
    plazoInput.addEventListener ("input", calcularPresupuesto);
    extras.forEach (extra => extra.addEventListener("change", calcularPresupuesto));

    // validación de campos de contacto
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        mensajeExito.style.display = "none";
        const nombre = document.getElementById("nombre") .value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const telefono = document.getElementById("telefono") .value.trim();
        const email = document.getElementById("email").value.trim();
        const condiciones = document.getElementById("condiciones").checked;

        const soloLetras = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/;
        const soloNumeros = /^[0-9]+$/;
        const emailValido = /^[\w._%+-]+@[\w.-]+\.[A-Za-z]{2,}$/;

        if(!soloLetras.test(nombre)) return alert ("nombre inválido");
        if(!soloLetras.test(apellidos)) return alert ("Apellidos inválidos");
        if(!soloNumeros.test(telefono) || telefono.length !== 9) return alert ("Telefono inválido");
        if(!emailValido.test(email)) return alert ("Email Inválido");
        if(!condiciones) return alert ("Debes aceptar las condiciones");

        mensajeExito.style.display ="block";
        
        form.reset();
        presupuestoInput.value = "";
    });
    
    //Inicializa el cálculo al cargar
    calcularPresupuesto();
});