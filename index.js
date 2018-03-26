var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var fs = require('fs');


function statstext() {

    stats = {
        grassMulCount: 0,
        eatgrassMulCount: 0,
        gishMulCount: 0,
        eatgrassDieCount: 0,
        gishDieCount: 0,
        eatgrassEatCount: 0,
        gishEatCount: 0,
        vorsKillCount: 0,
        trapKillCount: 0,
    }

    var myJSON = JSON.stringify(stats);
    fs.writeFileSync("stats.JSON", myJSON);
    var text = fs.readFileSync("stats.JSON").toString();
}
statstext();

app.use(express.static("public"));
app.get("/", function (req, res) {
    res.redirect("index.html");
});
app.get("/stats", function (req, res) {
    res.redirect("stats.JSON");
});


app.listen(3010, function () {
    console.log("Example is running on port 3010");
});
