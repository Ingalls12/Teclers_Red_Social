let nombre = document.getElementById("nombre");
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
            
            console.log(data)
            nombre.textContent = data.data[0].nombres
    })
    
