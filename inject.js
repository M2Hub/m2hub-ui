function injectCSS(href) {
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = href;
	document.head.appendChild(link);
}

function injectJS(src, id) {
    
    if(id) {
        var script = document.getElementById(id); 
        if(script) {
            document.body.removeChild(script);
        }
    }
    
    var script = document.createElement('script');    
	script.type="text/javascript";
    if(id) { script.id = id };
	script.src = src;
    document.body.appendChild(script);
	
}

function winLib(lib) {
	return window[lib];
}

function navLib(lib) {
	return navigator[lib];
}

function defer(container, lib, callback) {
    if (container(lib)) {
    	callback();
    } else {
    	setTimeout(function() { defer(container, lib, callback); }, 50);
    }
}

function deferEl(el, callback) {
    if(document.getElementById(el)) {
        callback();
    } else {
        setTimeout(function() { deferEl(el, callback); }, 10);
    }
}
