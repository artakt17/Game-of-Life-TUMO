var socket = io.connect('http://localhost:3010');
var table = document.getElementById("stats");

//Ամեն 10000 մլվրկ֊ը մեկ
setInterval(function(){
    //ուղարկում ենք "get stats" հացրումը սերվերին
    socket.emit("get stats", []);
}, 10000);
//Երբ սերվերը ուղարկում է տվյալ "send stats" պիտակով
socket.on("send stats",function(stats){
    //Պատրսատում ենք աղյուսակը
    
    stats = JSON.parse(stats);
    table.innerHTML = "";
    tableHTML = "<tr><td>grassMulCount</td><td>eatgrassMulCount</td><td>gishMulCount</td><td>eatgrassDieCount</td><td>gishDieCount</td><td>eatgrassEatCount</td><td>gishEatCount</td><td>vorsKillCount</td><td>fireMulCount</td><td>framecount</td></tr>";
    for(var st of stats){
        tableHTML+="<tr>";
        tableHTML+="<td>"+st.grassMulCount+"</td>";
        tableHTML+="<td>"+st.eatgrassMulCount+"</td>";
        tableHTML+="<td>"+st.gishMulCount+"</td>";
        tableHTML+="<td>"+st.eatgrassDieCount+"</td>";
        tableHTML+="<td>"+st.gishDieCount+"</td>";
        tableHTML+="<td>"+st.eatgrassEatCount+"</td>";
        tableHTML+="<td>"+st.gishEatCount+"</td>";
        tableHTML+="<td>"+st.vorsKillCount+"</td>";
        tableHTML+="<td>"+st.fireMulCount+"</td>";
        tableHTML+="<td>"+st.framecount+"</td>";
        tableHTML+="</tr>";
    }

    table.innerHTML = tableHTML;

})
