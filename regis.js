// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js'
import { createUserWithEmailAndPassword, getAuth } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js'
import { getDatabase, ref, child, set } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFNymOv7wlCZuTdXavo5nTreygvrWKU9o",
  authDomain: "argentina-prime.firebaseapp.com",
  projectId: "argentina-prime",
  storageBucket: "argentina-prime.appspot.com",
  messagingSenderId: "593223733938",
  appId: "1:593223733938:web:1408dc383161a3e794afab",
  measurementId: "G-BGF6LSFDML"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


  // Initialize variables
  const auth = getAuth(app)
  
  document.addEventListener('DOMContentLoaded', function () {
    // Obtén el botón de registro por su id
    const registerButton = document.getElementById('registerButton');

    // Agrega un event listener para el clic en el botón
    registerButton.addEventListener('click', register);
});

function register() {
  // Get all our input fields
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var fullname = document.getElementById('fullname').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email o Contraseña no válidos')
    return;
    // Don't continue running the code
  }
  if (validate_field(fullname) == false) {
    alert('Un campo o más no son válidos!')
    return;
  }

  // Move on with Auth
  createUserWithEmailAndPassword(auth, email, password)
    .then(function () {
      // Declare user variable
      var user = auth.currentUser

      var database_ref = ref(getDatabase(app));

// Create User data
var user_data = {
    email : email,
    fullname : fullname,
    last_login : Date.now()
}

// Push to Firebase Database
set(child(database_ref, 'users/' + user.uid), user_data);
      // Done
      alert('Usuario Creado Con éxito!!')
      window.location.href = "login.html";
    })
    .catch(function (error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message

      alert(error_message)
    })
}
  




  
  
  


  
  // Validate Functions
 function validate_email(email) {
  // Declare the expression variable
  var expression = /^[^@]+@\w+(\.\w+)+\w$/;
  
  if (expression.test(email) == true) {
    // Email is good
    return true;
  } else {
    // Email is not good
    return false;
  }
}
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password.length < 6) {

      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }
