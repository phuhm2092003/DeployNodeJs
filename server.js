const express = require('express')
const exphbs = require('express-handlebars');
const path = require('path');
const app = express()
const port = 3000
app.engine('.hbs', exphbs.engine({ extname: '.hbs', defaultLayout: null}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index');
    console.log("Tải trang index");    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})