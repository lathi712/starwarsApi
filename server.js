const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const routes = require('./routes/index');
const port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);


app.listen(port,function () {
    console.log('Server running on port',port);
});