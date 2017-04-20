const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/api/characters',function (req,res) {
    request('http://swapi.co/api/people/', function (error, response, body) {
        var bodyReq = JSON.parse(body);
        var arr = bodyReq.results;
        var sort = req.query.sort;
        console.log(sort);
        if(sort==null){
            if(error){
                res.sendStatus(400)
            }else{
                res.render('pages/index', { peoples : arr });
                //res.json(arr);
            }
        }else {

            var newArray =[];
            if(sort==='name'){
                function sortByKey(array, key) {
                    return array.sort(function(a, b) {
                        var x = a[key]; var y = b[key];
                        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
                    });
                }
                newArray = sortByKey(arr,'name');
            }else if(sort==='mass'){
                newArray = arr.sort(function(a, b){
                    return a.mass - b.mass;
                });
            }else if(sort==='height'){
                newArray = arr.sort(function(a, b){
                    return a.height - b.height;
                });
            }
        }
        if(error){
            res.sendStatus(400)
        }else{
           res.json(newArray);
         //   res.render('pages/index', { peoples : newArray });
        }

    });
});



router.get('/api/characters/:name',function (req,res) {
    request('http://swapi.co/api/people/', function (error, response, body) {
        var bodyReq = JSON.parse(body);
        var name = req.params.name;
        var arr = bodyReq.results;

        var newArray = arr.filter(function (a) {
            return a.name === name;
        });
        if(error){
            res.sendStatus(400)
        }else{
           // res.json(newArray);
            res.render('pages/index', { peoples : newArray });

        }
    });
});




router.get('/api/planetresidents',function (req,res) {
    request('http://swapi.co/api/planets/', function (error, response, body) {
        var bodyReq = JSON.parse(body);
        var arr = bodyReq.results;
        var planets={};

        if(error){
            res.sendStatus(400)
        }else{
           // res.json(arr);
            //var x = JSON.parse(arr);
            console.log(arr[0].name);
            res.json(arr.map(function (arrVal) {
                var rObj = {};
                rObj[arrVal.name] = arrVal.residents;
                return rObj;
            }));
            //res.render('pages/planet', { planets : arr });
        }
    });
});

module.exports = router;