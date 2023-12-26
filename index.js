const express = require('express');
const app = express();

const port = process.env.PORT || 5000;


app.get('/', (req, res)=>{
    res.send('chef data is coming')
});

app.listen(port, ()=>{
    console.log(`assignment 10 server is running on ${port}`);
})