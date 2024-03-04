const { pool } = require('./db');

async function insertData() {
  const [water_type, ph] = process.argv.slice(2)
  try{
    
    const res = await pool.query(
        "insert into water_type(water_type,ph) values($1, $2)",
        [water_type, ph]
    );
    console.log(`Added a water_type with the name ${water_type} and a ph_level of ${ph}`)
  }
  
catch(err){
    console.log(err)
}
}

insertData();