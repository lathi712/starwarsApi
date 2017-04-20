/**
 * Created by latheshkarkera on 4/20/17.
 */
app.get('/api/people/:name',function (req,res) {

    name = req.params.name;
    var query = req.query;
    var page = req.query.page;
    var queryname = req.query.name;
    var mass = req.query.mass;
    var height = req.query.height;
    console.log(name);


    swapi.get('https://swapi.co/api/people/?search='+name).then(function (result) {
        res.json(result);
    },function (err) {
        console.log(err);
    });


    // swapi.getPerson(name).then(function (result) {
    //     res.json(result);
    // },function (err) {
    //     console.log(err);
    // });
    // if(query!=null){
    //     if(queryname!=null){
    //         swapi.get('http://swapi.co/api/people/?page='+page+'&sort='+queryname).then(function (result) {
    //             res.json(result);
    //         });
    //     }else if(mass!=null){
    //         swapi.get('http://swapi.co/api/people/?sort'+mass).then(function (result) {
    //             res.json(result);
    //         });
    //     }else if(height!=null){
    //         swapi.get('http://swapi.co/api/people/?sort'+height).then(function (result) {
    //             res.json(result);
    //         });
    //     }
    //
    // }



});
