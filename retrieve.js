const { pool } = require('./db');

async function retrieveData(){
    try{
        const res = await pool.query("select * from water_type")
        let fields = [...res.fields].forEach(f=>console.log(f.name+'\n'+f.tableID+'\n'+f.columnID))
        console.log(res.rows);
    }
    catch(err){
        console.log(err)
    }
}
retrieveData()
