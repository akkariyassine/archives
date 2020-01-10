/////////////////////////////////////////
//******* variables et dépendances****//
////////////////////////////////////////

const app = require("express")();
const server = require("http").Server(app);
const cors = require("cors");
const config = require("./config/database")
const port = 5000;
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

/////////////////////////////////////////
//***********middleware utiliser******//
////////////////////////////////////////
mongoose.connect(config.url, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true });
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());




module.exports = {
  app: app
};

/////////////////////////////////////////////////
/////********** lancement de serveur ********////
/////////////////////////////////////////////////

server.listen(port, () => {
  console.log("server start at port ", port);
});
