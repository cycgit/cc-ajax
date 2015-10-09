function get(url, data, callback) {
    if(typeof data === "function"){
        callback = data;
    }

    if(typeof data === "Object"){
        url = data ? url + '?' + urlCode(data) : url;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText));
    }
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send();
}

function post(url, data, callback) {
    if(typeof data === "function"){
        callback = data;
        data = null;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('post', url);
    xhr.onload = function () {
        callback(JSON.parse(xhr.responseText));
    };
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.setRequestHeader('content-Type', 'application/x-www-form-urlencoded');
    xhr.send(urlCode(data));
}
function urlCode(data) {
    var str = '';
    if (!data) {
        return null;
    }
    for (var key in data) {
        str += key + '='+ encodeURIComponent(data[key])+ '&';
    }
    
    return str.substring(0, str.length-1);
}


export {get, post}