deferEl('console', function() {
    $('#console').terminal(function(api) {
        return $.post('https://m2hub-server.herokuapp.com/mvn/'+ api);
    }, {
        prompt: 'mvn>',
        greetings: 'M2Hub Console ( https://m2hub.github.io/m2hub-cui/index.html )\n'
    });
});

