const Usuario = require("../models/Usuario");

const usuarioController = {

  async Add(req, res) {
    const { nome, email } = req.body;    
    const usuario = await Usuario.create({
      nome, 
      email
    });    
    return res.json(usuario);
  },
  async Lista( req, res ) {
    const listaUsuarios = await Usuario.findAll();
    return res.json(listaUsuarios);
  }



}

module.exports = usuarioController;