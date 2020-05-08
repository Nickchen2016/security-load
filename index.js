const express = require('express');
const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res)=>{
    res.json('hello!')
})

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`)
})