// modify a record
const { pool } = require('./db')

async function modifyData(){
    const [id,newName] = process.argv.slice(2);
    try{
        // select current water type name from psql by id
        const oldname = await pool.query("select type_name from water_type where type_id=$1",[id])
        // within oldname, access "rows:" array, & get the type_name value.
        const oname = oldname.rows[0].type_name
        // update 
        const res = await pool.query("update water_type set type_name=$2 where type_id=$1",
        [id,newName])
        // console the upadted change
        console.log(`You updated ${oname} to ${newName}`)
        
    }
    catch(err){
        console.log(err)
    }
}
modifyData()