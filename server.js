var express = require('express');
var app = express();
var sortBy = require('sort-by')
const bodyParser = require('body-parser');

var swapi = require('swapi-node');

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
var name;


app.get('/api/people/:name',function (req,res) {
    var name = req.params.name;
    console.log(name);
    swapi.get('http://swapi.co/api/people/?search='+name).then(function (result) {
        res.json(result);
    });
});

app.get('/api/people/',function (req,res) {

    var sort = req.query.sort;
    if(sort!=null){

        swapi.get('http://swapi.co/api/people/?page=2&sort='+sort).then(function (result) {
            var sorted = result.results.sort(sortBy(sort));
            res.json(sorted);
        });
    }else{
        swapi.get('http://swapi.co/api/people/').then(function (result) {
            res.json(result);
        });
    }


});

app.get('/api/planetresidents/',function (req,res) {

    swapi.get('http://swapi.co/api/planets/').then(function (result) {
        res.json(result);

    });
});


app.listen(3000,function () {
    console.log('3000 running')
});