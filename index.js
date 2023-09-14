const express= require('express');
const app=express()
const webServe= require('http').createServer(app);
app.get('/',(req,res)=>{
    res.send('<h1>Hello Hasna</h1>')
})

webServe.listen(7000)