 // Agrega el listener para el evento unload
 window.addEventListener('unload', function () {
    // Realiza el logout al cerrar la pestaña o ventana
     localStorage.removeItem('user');
     alert('desconectado paaiii');

});


