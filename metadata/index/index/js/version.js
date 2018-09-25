$.get(APPYBE_BASE_URL + '/mvn/version', function(data){
    $("#version").html(data.replaceAll('\n','<br>'));
})