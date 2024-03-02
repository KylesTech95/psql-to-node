/******************************************************
 * PLEASE DO NOT EDIT THIS FILE
 * the verification process may break
 * ***************************************************/
 require('dotenv').config()
const express = require('express');
const app = express();
//require db
const indexFile = `${__dirname}/views/index.html`


app.route('/').get((req,res)=>{
  res.sendFile(indexFile)
})

// insert data on button press
app.get('/name', async (req,res)=>{
  const { first, last } = req.query;
  console.log(first,last)

})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Node is listening on port ${port}...`);
});

/******************************************************
 * PLEASE DO NOT EDIT THIS FILE
 * the verification process may break
 * ***************************************************/

