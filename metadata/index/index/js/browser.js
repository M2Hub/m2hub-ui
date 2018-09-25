deferEl('browser', function() {
    
    $('#browser').jstree({
        "core" : {
            "data" : {
                "url" : APPYBE_BASE_URL + "/ws",
                "dataType" : "json"
            }
        },
        //"plugins" : ["dnd","contextmenu"]
    });

});