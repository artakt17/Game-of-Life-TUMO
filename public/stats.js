var socket = io.connect('http://localhost:3010');
var table = document.getElementById("statistics");

//Ամեն 10000 մլվրկ֊ը մեկ
setInterval(function(){
    //ուղարկում ենք "get stats" հացրումը սերվերին
    socket.emit("get stats", []);
}, 10000);

//Երբ սերվերը ուղարկում է տվյալ "send stats" պիտակով
socket.on("send stats",function(stats){
    //Պատրսատում ենք աղյուսակը
    console.log(stats)
    stats = JSON.parse(stats);
    table.innerHTML = "";
    tableHTML = "<tr><td>Ժամանակ</td><td>Քլիքներ</td><td>Կրկնակի Քլիքներ</td><td>Ստեղնաշար</td><td>frameCount</td></tr>";
    for(var st of stats){
        tableHTML+="<tr>";
        tableHTML+="<td>"+stats.grassMulCount+"</td>";
        tableHTML+="<td>"+stats.eatgrassMulCount+"</td>";
        tableHTML+="<td>"+stats.gishMulCount+"</td>";
        tableHTML+="<td>"+stats.eatgrassDieCount+"</td>";
        tableHTML+="<td>"+stats.gishDieCount+"</td>";
        tableHTML+="<td>"+stats.eatgrassEatCount+"</td>";
        tableHTML+="<td>"+stats.gishEatCount+"</td>";
        tableHTML+="<td>"+stats.vorsKillCount+"</td>";
        tableHTML+="</tr>";
    }

    table.innerHTML = tableHTML;
    //console.log(stats);
})

/*
var stats = {
    grassMulCount: 0,
    eatgrassMulCount: 0,
    gishMulCount: 0,
    eatgrassDieCount: 0,
    gishDieCount: 0,
    eatgrassEatCount: 0,
    gishEatCount: 0,
    vorsKillCount: 0,
}
*/