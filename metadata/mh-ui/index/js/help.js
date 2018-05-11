$.post('https://mavenhub-server.herokuapp.com/mvn/-help', function(data){
    $("#help").html(data.replaceAll('\n','<br>'));
})