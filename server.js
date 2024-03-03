
 require('dotenv').config()
const express = require('express');
const app = express();
//require db
const { pool } = require('./db')
const bp = require('body-parser')
const routes = require('./routes.js')


// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))


routes(app,pool)



// listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Node is listening on port ${port}...`);
});


