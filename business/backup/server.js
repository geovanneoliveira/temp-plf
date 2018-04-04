

var express = require("express");
var app = express();

var wsserver = require("ws").Server;
var wss = new wsserver({ port : 31337 });

wss.on("connection", function(ws) {
    var timer = setInterval(envia_valor, 500, ws);  
    
    ws.on("message", function(message) {
        //chamar funcoes
        console.log(message);
        ;
    }); 
    
    ws.on("close", function(client) {
        clearInterval(timer);
    });
});

function envia_valor(socket) {
    socket.send("Este é seu número da sorte: " + Math.random()*1000);
}

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.use(function(req, res, next) {
    res.status(404).send("Erro 404 - Página não encontrada!");
});

app.listen(80, function() {
    console.log("Servidor iniciado na porta 80");
});
