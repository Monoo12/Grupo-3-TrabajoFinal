document.addEventListener('DOMContentLoaded', function () {
    const storedUser = localStorage.getItem('user');
    
    if (!storedUser) {
        const user = JSON.parse(storedUser);
        console.log('Usuario NO autenticado:', user.uid);
    } else {
        window.location.href = "Selecciondeusuarios.html";
    }
});
