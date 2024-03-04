// modify a record
const { pool } = require('./db')

async function modifyData(){
    const [id,newName] = process.argv.slice(2);
    try{
        // select current water type name from psql by id
        const oldname = await pool.query("select water_type from water_type where water_id=$1",[id])
        // within oldname, access "rows:" array, & get the type_name value.
        const oname = oldname.rows[0].water_type
        // update 
        const res = await pool.query("update water_type set water_type=$2 where water_id=$1",
        [id,newName])
        // console the upadted change
        console.log(`You updated ${oname} to ${newName}`)
        
    }
    catch(err){
        console.log(err)
    }
}
modifyData()