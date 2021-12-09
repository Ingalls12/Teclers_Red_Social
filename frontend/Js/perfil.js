let nombre = document.querySelector("#nombres")
let estudios = document.querySelector("#estudios")
let pais = document.querySelector("#pais")
let ciudad = document.querySelector("#ciudad")
let fecha_nac = document.querySelector("#fecha_nac")
let perfil_linkedin = document.querySelector("#perfil_linkedin")
let hobbies = document.querySelector("#hobbies")




/* window.onload = () =>{
    nombre.innerHTML += "Pedro"
    estudios.innerHTML +="Ingenieria"
    pais.innerHTML +="México"
    ciudad.innerHTML +="D.F."
    fecha_nac.innerHTML += "10/05/2000"
    perfil_linkedin.innerHTML += "48864614464"
    hobbies.innerHTML += "leer"
} */
// se hace un fetch para conseguir la información con la que llenaremos nuestra pagina de perfil
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
            nombre.innerHTML += data.data[0].nombres
            estudios.innerHTML += data.data[0].estudios
            pais.innerHTML +=data.data[0].pais
            ciudad.innerHTML +=data.data[0].ciudad
            fecha_nac.innerHTML += data.data[0].fecha_nac
            perfil_linkedin.innerHTML += data.data[0].perfil_linkedin
            hobbies.innerHTML += data.data[0].hobbies
    })
    

    
  