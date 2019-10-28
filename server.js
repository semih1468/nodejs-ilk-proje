const express = require('express');
const app = express();

app.get('/merhaba',(req,res)=>{
    res.send('merhabalar');
});
app.listen(3000, ()=>{
   console.log('consol');
});