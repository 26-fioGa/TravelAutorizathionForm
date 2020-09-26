document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento) {
    evento.preventDefault();
    var telefono = document.getElementById('telefono').value;
    if (telefono.length < 9 || telefono.length > 9) {
        alert('El teléfono debe tener 9 digitos');
        return;
    }
    this.submit();
}