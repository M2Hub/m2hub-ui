deferEl('browser', function() {
    
    $('#browser').jstree({
        "core" : {
            "data" : {
                "url" : "https://mavenhub-server.herokuapp.com/ws",
                "dataType" : "json"
            }
        },
        //"plugins" : ["dnd","contextmenu"]
    });

});