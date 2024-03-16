import express from 'express';


const port = 3000;
const app = express();

let names = [
    {nombre:"Jacinta"},
    {nombre:"Oliver"},
    {nombre:"Fernanda"},
    {nombre:"Bartolomeo"},
    {nombre:"Maria Antonietta"},
    {nombre:"Esteban"},
    {nombre:"Apolo"}
]

//funciona
app.get('/', (req,res) => {
    res.send("Confirmation")
})

//cant get usuarios
app.get('/abracadabra/usuarios',(req,res)=>{
    res.send(names)
    res.end()
})
    
app.get('/abracadabra/usuarios2',(req,res)=>{
    res.json(names);
    res.end();
})
app.get('/abracadabra', (req,res)=> {
    res.send('Validado');
})

//app.use(express.errorHandler({dumpExceptions:true,showStack:true}));
app.listen(port, ()=> console.log(`Conectado al servidor en el puerto ${port}`))