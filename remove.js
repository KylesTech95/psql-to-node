const { pool } = require(`./db`);

async function removeData(){
try{                                            // [command] [file] [id]
    // If one id (water_id) argument is lsited  (ex: node remove.js 2)
  if(process.argv.length > 2){
    const [id] = process.argv.slice(-1);
    console.log(id)
    // select name_type
    const findOne = await pool.query("delete from water_type where water_id=$1",[id])
    console.log('You deleted one item')
  }                         // [command] [file]
  // If no arguments listed // (ex: node remove.js)
  else{
      await pool.query("truncate water_type;alter sequence water_type_water_id_seq restart with 1")
      console.log('You deleted all items')
  }
  
}
	catch(err){
	console.log(err)
  }

}

removeData()

