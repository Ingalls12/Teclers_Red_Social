window.addEventListener("validar", () => {

    let boton = document.getElementById("boton_validar");
    let email = document.getElementById("email");
    let contraseña = document.getElementById("password");

    function validacion() {
        let credenciales = new FormData();
        credenciales.append("email",email.value);
        credenciales.append("password",contraseña.value);
        fetch ("http://localhost:3000",{method: "GET", body: credenciales,})
        .then(Response => Response.json())
        .then(credenciales=>{
            console.log(credenciales);
        })
    }

    boton.addEventListener("submit", (e)=>{
        e.preventDefault();
        validacion();
    })
});