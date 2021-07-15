var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})
app.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format  

    switch (req.body.operation) {
        case "+":
            var result = req.body.first_number + req.body.second_number;
            break;
        case "-":
            var result = req.body.first_number - req.body.second_number;
            break;
        case "*":
            var result = req.body.first_number * req.body.second_number;
            break;
        case "/":
            var result = req.body.first_number / req.body.second_number;
            break;
        default:
            var result = "Error: Invalid operation.";
            break;
    }

    response = {
        first_number: req.body.first_number,
        second_number: req.body.second_number,
        finaloutput: result
    };

    console.log(response);
    res.end(JSON.stringify(response));
})
var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})