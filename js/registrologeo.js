function register(){var e=document.getElementById("nombre"),o=document.getElementById("correo"),t=document.getElementById("user"),a=document.getElementById("pass");""!=o&&""!=t&&""!=a&&""!=e?(localStorage.setItem("nombre",e.value),localStorage.setItem("mail",o.value),localStorage.setItem("user",t.value),localStorage.setItem("pass",CryptoJS.MD5(a.value)),alert("Usuario se ha registrado correctamente")):alert("Error en los datos. Por favor verifique")}function login(e,o){localStorage.getItem("user")==e&&CryptoJS.MD5(o)==localStorage.getItem("pass")?(localStorage.setItem("sesion","1"),alert("Ingreso Exitoso. Bienvenido a Viajando Por El Mundo"),window.open("servicios.html"),window.close()):alert("Error en los datos. Por favor verifique")}function recordar(e){localStorage.getItem("mail")==e?alert("Su contrasena es :"+CryptoJS.MD5.decrypt(localStorage.getItem("pass"))):alert("El correo o el usuario no existen, revise lo que escribio")}function logout(){localStorage.setItem("sesion","0"),window.location.assign("acercadede.html")}