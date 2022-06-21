require("dotenv").config

let message = "";

const express = require("express");

const path = require("path");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.urlencoded());

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

let filme = undefined;

const listafilmes = [
    {
        id: 1,
        nome: "thor amor e trovão",
        ano: 2022,
        capa: "https://cinefreak.com.br/wp-content/uploads/2022/04/AC5DA130-D247-47CB-9092-7A599D7D7AA7.png",
        linkf: "https://www.youtube.com/watch?v=1c_W_4cNLn0"

    }
]

app.get("/", (req, res) => {
    setTimeout(() => {
        message = "";
      }, 1000);
  res.render("index", {listafilmes, filme, message});
});

app.post("/create" , (req, res) =>{
    const filme = req.body;
    filme.id = listafilmes.length + 1;
    listafilmes.push(filme)
    message = `Parabens, Voce cadastrou o trailer do filme ${filme} com sucesso`;
    res.redirect("/");
})

app.listen(port)