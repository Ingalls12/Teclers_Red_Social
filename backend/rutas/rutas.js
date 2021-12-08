const express = require("express");


let router = express.Router();
const sequel = require("./sequel");




router.post("/usuarios",(req,res)=>{
    let query = `SELECT * FROM usuarios_tecla WHERE nombres LIKE "${req.body.usuario}";`;

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

router.post("/crear_usuarios",(req,res)=>{

    let query = `INSERT INTO usuarios_tecla(nombres,apellidos,correo,contraseña,fecha_nac,pais,ciudad,estudios,perfil_linkedin,hobbies)VALUES("${req.body.nombres}","${req.body.apellidos}","${req.body.correo}","${req.body.contraseña}","${req.body.fecha_nac}","${req.body.pais}","${req.body.ciudad}","${req.body.estudios}","${req.body.perfil_linkedin}","${req.body.hobbies}");`;
    console.log(query)
    sequel.query(query,{type:sequel.QueryTypes.INSERT})
    .then(datos=>{
        let usuario = datos;
        console.log(usuario);
        res.status(200).json({
            msg:"Consulta ejecutada con exito",
            data:"Se agrego el usuario"
        })
    })
    .catch((error)=>{
        console.log(error)
        res.status(500).json({
            error:"Error Consulta  no ejecutada"
        })
    })
})
module.exports=router;
