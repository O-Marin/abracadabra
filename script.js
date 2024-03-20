import express from "express";
import path from 'path';


const __dirname = import.meta.dirname;
const app = express();
const port = 3000;

let nombres = [{nombre:'Juan'},{nombre:'Jocelyn'},{nombre:'Astrid'},{nombre:'Maria'},{nombre:'Ignacia'},{nombre:'Javier'},{nombre:'Brian'}];

app.use(express.static('assets'));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
})


app.get('/abracadabra/usuarios',(req,res)=>{
    res.json(nombres);
})

app.use('/abracadabra/juego/:usuario', (req,res,next)=>{
    /**error a corregir, no encuentra un nombre que debe encontrar */
    const searchNombre = nombres.find((element)=>{
        return (element.nombre === req.params.usuario)
        
    })    
    console.log(searchNombre)
    if(searchNombre){
        next()
    }else if(!searchNombre){
        res.sendFile(path.join(__dirname, 'assets/img/who.jpeg'))
    }
     
})

app.get('/abracadabra/juego/:usuario',(req,res)=>{
    res.send('user found')
})

app.get('/abracadabra/conejo/:n', (req,res)=>{
    
    if(Math.floor((Math.random()*4)+1)=== Number(req.params.n)){
        res.sendFile(path.join(__dirname, 'assets/img/conejito.jpg'))
    }else{
        res.sendFile(path.join(__dirname, 'assets/img/voldemort.jpg'))
    }
})

app.get('*',(req,res)=>{
    res.send('<h1>Esta pagina no existe</h1>');
})

app.listen(port, console.log(`Servidor conectado al puerto ${port}`));