const { pool } = require(`./db`);

async function removeData(){
try{
  if(process.argv.length > 2){
    const [id] = process.argv.slice(-1);
    console.log(id)
    // select name_type
    const findOne = await pool.query("delete from water_type where type_id=$1",[id])
    console.log('You deleted one item')
  }
  else{
      await pool.query("truncate water_type;alter sequence water_type_type_id_seq restart with 1")
      console.log('You deleted all items')
  }
  
}
	catch(err){
	console.log(err)
  }

}

removeData()

