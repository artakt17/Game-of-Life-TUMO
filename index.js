var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var fs = require('fs');

/*
function writetest() {
       xotmul = 0;
       xotakermul = 0;
       gishmul = 0;
       stats = {
       "Խոտերի բազմացման քանակը" : xotmul,
       "Խոտակերի բազմացման քանակը" : xotakermul,
       "Գիշատիչի բազմացման քանակը" : gishmul,
    
        

    }
    var myJSON = JSON.stringify(stats);
    fs.writeFileSync("public/stats.JSON", myJSON);
    var text = fs.readFileSync("public/stats.JSON").toString();

}
writetest();
*/

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
