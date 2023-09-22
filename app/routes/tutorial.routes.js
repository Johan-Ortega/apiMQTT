module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");

    var router = require("express").Router();
    //path para crear
    router.post("/",tutorials.create);
   
    //path para mostrar todos y encontrar por nombre
    router.get("/",tutorials.findAll);
    
    //path para encontrar anormalidades en refri
    router.get("/refri", tutorials.findAllrefri);
    
    //path para encontrar anormalidades en puerta
    router.get("/puerta", tutorials.findAllpuerta);

    //path para encontrar por id
    router.get("/:id", tutorials.findOne);
    
    //path para actualizar
    router.put("/:id", tutorials.update);
    
    //path para borrar por id
    router.delete("/:id", tutorials.delete);
    
    //path para borrar todos
    router.delete("/", tutorials.deleteAll);

    // si ocupas alguna otra cosa mas o que te explique algo enviame mensaje xd
    app.use('/api/tutorials', router);

};