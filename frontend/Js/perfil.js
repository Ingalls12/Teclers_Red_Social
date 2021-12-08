let nombre = document.querySelector("#nombre")
let estudios = document.querySelector("#nombre")

nombre.textContent = "Pedro"
estudios.textContent =""
let url = "http://localhost:3000/usuarios"
fetch(url,
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            "usuario":"Leonardo"
        })
    }).then(response => response.json())
        .then(data=>{
            const data_usuario = data
    })
    