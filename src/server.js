const express = require("express");
const app = express();
const morgan = require("morgan");
const routes = require("./routes/routes");
const connection = require("./database/database");

app.use(express.json());
app.use(express.urlencoded({extended: false})); 
app.use(morgan("dev"));
app.use(routes);                      

const port = process.env.port || 3000;
app.listen(port, function() {
  console.log("App de Exemplo escutando em //localhost:"+port+' !');
});                               