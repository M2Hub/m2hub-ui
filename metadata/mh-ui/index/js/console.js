deferEl('console', function() {
    $('#console').terminal(function(api) {
        return $.post('https://mavenhub-server.herokuapp.com/mvn/'+ api);
    }, {
        prompt: 'mvn>',
        greetings: 'MavenHub Console ( https://mavenhub.github.io/mavenhub-cui/index.html )\n'
    });
});

