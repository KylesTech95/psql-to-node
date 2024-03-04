const indexFile = `${__dirname}/views/index.html`

module.exports = function exportRoutes(app,pool){
    // routes
    app.route('/').get((req,res)=>{
        res.sendFile(indexFile)
    })



    // read data on button press
    app.get('/test', async (req,res)=>{
        // console.log(first,last)
        const getFields = await pool.query('select * from water_type order by water_id desc')
        const allNames = getFields.rows;
        // map a list of rows
        let map = [...allNames].map(field=>{
            return {id:field.water_id,type:field.water_type,ph:field.ph};
        })
        console.log(map)
        res.json(map)
    })
}

  