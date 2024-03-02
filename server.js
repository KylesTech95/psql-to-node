/******************************************************
 * PLEASE DO NOT EDIT THIS FILE
 * the verification process may break
 * ***************************************************/
 require('dotenv').config()
const express = require('express');
const app = express();
//require db
const indexFile = `${__dirname}/views/index.html`
const { pool } = require('./db')
const bp = require('body-parser')


// middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))



app.route('/').get((req,res)=>{
  res.sendFile(indexFile)
})
// insert data on button press
app.get('/test', async (req,res)=>{
  const obj = {type: undefined,ph:undefined}
  // console.log(first,last)
  const getFields = await pool.query('select * from water_type order by type_id desc')
  const allNames = getFields.rows;
  // map a list of rows
  let map = [...allNames].map(field=>{
    obj.type = field.type_name
    obj.ph = field.ph
    return obj
  })
  res.json(map)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Node is listening on port ${port}...`);
});

/******************************************************
 * PLEASE DO NOT EDIT THIS FILE
 * the verification process may break
 * ***************************************************/

