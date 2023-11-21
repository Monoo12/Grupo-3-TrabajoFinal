// Importa las funciones que necesitas desde las bibliotecas de Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js';
import { signInWithEmailAndPassword, getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js';


// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBFNymOv7wlCZuTdXavo5nTreygvrWKU9o",
    authDomain: "argentina-prime.firebaseapp.com",
    projectId: "argentina-prime",
    storageBucket: "argentina-prime.appspot.com",
    messagingSenderId: "593223733938",
    appId: "1:593223733938:web:1408dc383161a3e794afab",
    measurementId: "G-BGF6LSFDML"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializa la autenticación
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', function () {
    // Obtén el botón de registro por su id
    const registerButton = document.getElementById('loginButton');

    // Agrega un event listener para el clic en el botón
    registerButton.addEventListener('click', login);

});

// Función de inicio de sesión
function login() {
    // Obtén los valores de los campos de entrada
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Valida los campos de entrada
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email o contraseña no válidos!');
        return;
        // No continúes ejecutando el código
    }

    signInWithEmailAndPassword(auth, email, password)
        .then(function () {
            // Usuario autenticado
            var user = auth.currentUser;
            
            // Almacena la información del usuario en localStorage
            localStorage.setItem('user', JSON.stringify(user));

            alert('Usuario autenticado!');
            window.location.href = "Selecciondeusuarios.html";
        })
        .catch(function (error) {
            // Firebase usará esto para alertar de sus errores
            var error_code = error.code;
            var error_message = error.message;

            alert(error_message);
        });
}

// Funciones de validación
function validate_email(email) {
    // Expresión regular para validar el formato de email
    var expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
}

function validate_password(password) {
    // Firebase solo acepta contraseñas con longitud mayor a 6
    return password.length >= 6;
}
