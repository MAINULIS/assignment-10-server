const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

const chefsData =require('./data/chefData.json');

app.use(cors());


app.get('/', (req, res)=>{
    res.send('chef data is coming')
});

app.get('/chefData', (req, res) =>{
    res.send(chefsData)
})

app.get('/chefData/:id', (req, res) =>{
    const id = req.params.id;
    const chefInfo = chefsData.find(info => info._id === id);
    res.send(chefInfo);
})


app.listen(port, ()=>{
    console.log(`assignment 10 server is running on ${port}`);
})