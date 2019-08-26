const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db;

MongoClient.connect('mongodb://localhost:27017/examen', (err, database) => {
  if (err) return console.log(err)
  db = database.db('examen')
  app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('', (req, res) =>{
    res.redirect('/list')
})

app.get('/list', (req, res) =>{
    db.collection('overtredingen').find().toArray((err, result) => {
        if(err) return console.log(err)
        res.render('list.ejs', {movie: result})
    })
})