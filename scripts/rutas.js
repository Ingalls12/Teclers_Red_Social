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
app.use(logger)
app.use(express.json())

app.get("/",(req,res)=>{
    console.log("Inicio")
    res.send("Pagina inicio");
})
app.get("/perfil",(req,res)=>{
    res.send(usuario);
})
app.post("/perfil",(req,res)=>{

    usuario["trabajos"].push(req.body.trabajo)
    console.log(usuario);
    res.send("Se ha agregado trabajo");
})
app.put("/perfil",(req,res)=>{

})

app.listen(3000,()=>{
    console.log("Se inicio el servidor");
})

app.use((req,res)=>{
    res.status(404).json(
        {
            "msg":"No se encuentra el endpoint"
        }
    )
})