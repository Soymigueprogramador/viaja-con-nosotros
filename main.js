// Tomamos el ID del formulario.
document.getElementById('formularioContacto').addEventListener('submit', (e) => {
    e.preventDefault();

    // Levantamos los datos del formulario
    const email   = e.target.email.value;
    const nombre  = e.target.nombre.value;
    const asunto  = e.target.asunto.value;
    const plan    = e.target.plan.value;
    const mensaje = e.target.mensaje.value;

    // Validamos que todos los campos esten completos.
    if( !email || !nombre || !asunto || !mensaje ) {
        alert('Tenes que completar todos los campos antes de enviar el formulario');
        console.log('Tenes que completar todos los campos antes de enviar el formulario');
        return;
    };

    // Vlidamos el email.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if( !emailRegex.test(email) ) {
        alert(' El correo no es valido!! ');
        console.log(' El correo no es valido!! ');
    };

    // Creamos el cuerpo del mensaje.
    const cuerpoDelMensaje = `Nombre: ${nombre}%0AEmail: ${email}%0APlan: ${plan}%0AMensaje: ${mensaje}`;

    // Alerta de confirmacion de envio de formulario.
    alert(' Necesitamos abrir tu aplicacion de correo electronico antes de enviar el formulario ');
    console.log(' Necesitamos abrir tu aplicacion de correo electronico antes de enviar el formulario ');

    // Mostramos la ventana con el resultado del envío del formulario.
    window.location.href = `mailto:soymigueprogramador@gmail.com?subject=${encodeURIComponent(asunto)}&body=${cuerpoDelMensaje}`;
});