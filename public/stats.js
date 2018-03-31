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
    stats = JSON.parse(stats);
    table.innerHTML = "";
    tableHTML = "<tr><td>Ժամանակ</td><td>Քլիքներ</td><td>Կրկնակի Քլիքներ</td><td>Ստեղնաշար</td><td>frameCount</td></tr>";
    for(var st of stats){
        tableHTML+="<tr>";
        tableHTML+="<td>"+st.timestamp+"</td>";
        tableHTML+="<td>"+st.clicks+"</td>";
        tableHTML+="<td>"+st.dbclicks+"</td>";
        tableHTML+="<td>"+st.keypresses+"</td>";
        tableHTML+="<td>"+st.framecount+"</td>";
        tableHTML+="</tr>";
    }

    table.innerHTML = tableHTML;
    //console.log(stats);
})