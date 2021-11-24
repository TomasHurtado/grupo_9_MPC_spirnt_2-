const express = require("express");
const app=express();
app.use(express.static("public"));

app.listen(3000,()=>{
    console.log("servidor andando")//recursos
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

app.get('/productCart.html', (req, res) => {
  res.sendFile(__dirname + "/views/productCart.html")
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

app.get('/login.html', (req, res) => {
  res.sendFile(__dirname + "/views/login.html")
})

app.get('/recuperar.html', (req, res) => {
  res.sendFile(__dirname + "/views/recuperar.html")
})

app.get('/register.html', (req, res) => {
  res.sendFile(__dirname + "/views/register.html")
})

app.get('/perfil.html', (req, res) => {
  res.sendFile(__dirname + "/views/perfil.html")
})

app.get('/productDetail.html', (req, res) => {
  res.sendFile(__dirname + "/views/productDetail.html")
})