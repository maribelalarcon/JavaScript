$(document).ready(() => {
    $("#boton-enviar-contactanos").click((event) => {
        event.preventDefault();
        $("#formulario-contactanos").html("<h1>Recibimos tu mensaje!</h1>")
    })
});