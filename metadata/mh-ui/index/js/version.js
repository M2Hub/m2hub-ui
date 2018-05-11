$.get('https://mavenhub-server.herokuapp.com/mvn/version', function(data){
    $("#version").html(data.replaceAll('\n','<br>'));
})