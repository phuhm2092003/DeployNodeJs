const express = require('express')
const app = express()
const port = 3000
const locationDb = require('./database/locationDB.js')

app.get('/', (req, res) => {
    res.send('Hello World!')
})
// Lấy danh sách
app.get('/locations', (req, res) => {
    locationDb.getLocations((err, data) =>{
        if(err){
            console.log(err)
            return res.status(500)
        }

        return res.json(data)
    })
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})