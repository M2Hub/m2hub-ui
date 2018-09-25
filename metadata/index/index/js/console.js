deferEl('console', function() {
    $('#console').terminal(function(api) {
        return $.post(APPYBE_BASE_URL + '/mvn/'+ api);
    }, {
        prompt: 'mvn>',
        greetings: 'M2Hub Console ( https://m2hub.github.io/m2hub-cui/index.html )\n'
    });
});

