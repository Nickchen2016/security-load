const express = require('express');
const app = express();
const fs = require('fs');
const port = 4000;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res)=>{

    fs.readFile('item.json', (error, data)=>{
        if(error){
            res.status(500).end();
        }else{
            res.render('app.ejs', {
                item: JSON.parse(data)
            })
        }
    })
})

app.listen(port, ()=>{
    console.log(`Server is listening on PORT ${port}`)
})