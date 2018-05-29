function generate(actionParams, row) {
    
    var params = row.params;

    var request = {
      "async": true,
      "crossDomain": true,
      "url": "https://mavenhub-server.herokuapp.com/mvn/-B/archetype/generate",
      "method": "POST",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
      },
      "data": {
        "archetypeGroupId": "org.apache.maven.archetypes",
        "archetypeArtifactId": params.archetypeArtifactId,
        "archetypeVersion": "1.3",
        "groupId": params.groupId,
        "artifactId": params.artifactId,
        "version": "1.0.0"
      }
    };
    
    $.ajax(request).done(function (response) {
        console.log(response);
        alert('Project : ' + params.artifactId + ' generated successfully');
    });
}