const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express(); 

const port = process.env.PORT || 3000;

const routerApi = require('./routes');

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.send('Backend con NodeJS - Express + CRUD API REST + POSTGRESQL');
}); 

routerApi(app);

app.listen(port,()=>{
    console.log("Port ==> ", port);
});
