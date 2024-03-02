const { pool } = require('./db');

async function insertData() {
  const [type_name, ph] = process.argv.slice(2)
  try{
    const res = await pool.query(
        "insert into water_type(type_name,ph) values($1, $2)",
        [type_name, ph]
    );
    console.log(`Added a water_type with the name ${type_name} and a ph_level of ${ph}`)
  }
  
catch(err){
    console.log(err)
}
}

insertData();