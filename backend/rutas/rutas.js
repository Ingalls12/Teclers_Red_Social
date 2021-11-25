const express = require("express");


let router = express.Router();
const sequel = require("./sequel");



router.get("/",(req,res)=>{
    
    console.log("Inicio")
    res.send("Pagina inicio",);
})
router.get("/perfil",(req,res)=>{
    
    let query = `SELECT * FROM usuarios WHERE nombres LIKE "${req.body.usuario}";`;
    console.log(query)
    sequel.query(query,{type:sequel.QueryTypes.SELECT})
    .then(datos=>{
        let usuario = datos;
        console.log(usuario);
        res.status(200).json({
            msg:"Consulta ejecutada con exito",
            data:usuario
        })
    })
    .catch((error)=>{
        console.log(error)
        res.status(500).json({
            error:"No se encontro el usuario"
        })
    })
    
})
router.post("/perfil",(req,res)=>{

    usuario["trabajos"].push(req.body.trabajo)
    console.log(usuario);
    res.send("Se ha agregado trabajo");
})
router.put("/perfil",(req,res)=>{

})

module.exports=router;
