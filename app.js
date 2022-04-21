const express = require('express');
const app = express();
const bodyparser = require('body-parser')
// const cp = require('child_process')
app.use(bodyparser.urlencoded({extended:true}))
const routes = require('./routes/route')

// app.use(express.static(__dirname+'/'))
// app.set('view engine','html')
// app.use(express.json());
app.use(routes);
const port = process.env.PORT || 3000 ;
app.listen(port, () => {
    console.log("server is started");
})


