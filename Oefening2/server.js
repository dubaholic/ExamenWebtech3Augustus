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
        result.sort(function (a, b) {
            return (a.datum_vaststelling < b.datum_vaststelling) ? -1 : 1;
          });
        res.render('list.ejs', {overtreding: result})
    })
})

app.get('/searchStraat', (req, res) => {
    res.render('search_straat.ejs', {})
})

app.post('/searchStraat', (req, res) => {
    var query = {opnameplaats_straat: req.body.straat}
    db.collection('overtredingen').find(query).toArray(function(err, result){
        if(err) return console.log(err)
        if(result == '') 
            res.render("search_not_found.ejs", {})
        else 
        result.sort(function (a, b) {
            return (a.datum_vaststelling < b.datum_vaststelling) ? -1 : 1;
          });
        res.render("search_result.ejs", {overtreding: result})
    });
})

app.get('/searchAantal', (req, res) => {
    res.render('search_aantal.ejs', {student: ''})
})

app.post('/searchAantal', (req, res) => {
    var query = {aantal_overtredingen_snelheid: {$gt: Number(req.body.aantal)}}
    db.collection('overtredingen').find(query).toArray(function(err, result){
        if(err) return console.log(err)
        if(result == '') 
            res.render("search_not_found.ejs", {})
        else 
        result.sort(function (a, b) {
            return (a.datum_vaststelling < b.datum_vaststelling) ? -1 : 1;
          });
        res.render("search_result_aantal.ejs", {overtreding: result})
    });
})