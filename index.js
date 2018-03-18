var express = require("express");
var app = express();


var fs = require('fs');

function writetest() {
    var obj = {
        "first-name": "Artak",
        "last-name": "Tamrazyan",
        "age": 17,
        "TUMO-Students": true,

    }
    var myJSON = JSON.stringify(obj);
    fs.writeFileSync("obj.JSON", myJSON);
    var text = fs.readFileSync("obj.JSON").toString();

}
writetest();


app.use(express.static("public"));
app.get("/", function (req, res) {
    res.redirect("index.html");
});

app.listen(3010, function () {
    console.log("Example is running on port 3010");
});
