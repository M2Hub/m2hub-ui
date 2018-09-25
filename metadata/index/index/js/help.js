$.post(APPYBE_BASE_URL + '/mvn/-help', function(data){
    $("#help").html(data.replaceAll('\n','<br>'));
})