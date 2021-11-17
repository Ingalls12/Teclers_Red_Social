const express = require("express");
app = express();
const usuario = {
    "nombre":{
        "nombre":"",
        "apellidos":""
    },
    "foto":"",
    "edad":0,
    "trabajos":[],
    "certificaciones":[],
}
function logger(req,res,next){
    console.log("Request received: ",req.protocol);
    next();
}
app.u
app.use(express.json())

app.get("/",(req,res)=>{
    console.log("Inicio")
    res.send("Pagina inicio");
})
app.get("/perfil",(req,res)=>{
    res.send(usuario);
})
app.post("/perfil",(req,res)=>{

    usuario[trabajos].push(req.body.trabajos)
})
app.put("/perfil",(req,res)=>{

})

app.listen(3000,()=>{
    console.log("Se inicio el servidor");
})

