const express = require("express");
const app=express();
app.use(express.static("public"));

app.listen(3000,()=>{
    console.log("servidor andando")//recursos
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/home.html")
})

app.get('/carrito.html', (req, res) => {
  res.sendFile(__dirname + "/views/carrito.html")
})
app.get('/entrega.html', (req, res) => {
  res.sendFile(__dirname + "/views/entrega.html")
})
app.get('/pago.html', (req, res) => {
  res.sendFile(__dirname + "/views/pago.html")
})

app.get('/resumen.html', (req, res) => {
  res.sendFile(__dirname + "/views/resumen.html")
})

