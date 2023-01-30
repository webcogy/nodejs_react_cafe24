const express = require('express')
const path = require('path')
const app = express()

app.use(express.json());
var cors = require('cors');
app.use(cors());
/*
app.use(express.static(path.join(__dirname, '/build')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/build/index.html'))
});
*/


app.set('views', __dirname + '/build');
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('index')
})


app.listen(8001, function(){
    console.log('listeing on 8001')
})
