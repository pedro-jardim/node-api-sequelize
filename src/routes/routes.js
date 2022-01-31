const express = require("express");
const routes = express.Router();
const UsuarioController = require("../controllers/UsuarioController");

routes.get("/", (req, res) => {
  res.json({
    msg:"APi NODEJS - Pedro Jardim"
  });
});

routes.post("/usuarios", UsuarioController.Add);
routes.get("/usuarios", UsuarioController.Lista);

module.exports = routes;
