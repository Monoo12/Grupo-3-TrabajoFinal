document.addEventListener('DOMContentLoaded', function () {
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
        // El usuario ha iniciado sesión, puedes realizar acciones adicionales si es necesario
        const user = JSON.parse(storedUser);
        console.log('Usuario autenticado:', user.uid);
    } else {
        // El usuario no ha iniciado sesión, redirige a la página de inicio de sesión
        console.log('Usuario no autenticado, redirigiendo a la página de inicio de sesión.');
        window.location.href = "login.html";
    }
});
