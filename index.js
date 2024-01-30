const express = require('express');
require('./config');
const product = require('./product');

const app = express();

app.use(express.json());

app.get('/search/:key', async (req,res)=>{
    const data = await product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"color":{$regex:req.params.key}},
                {"category":{$regex:req.params.key}}
            ]
        }
        );
        console.log(data);
    res.send(data);
})

app.listen(5000); 





















