export function loadJsContent(fileName, url, callback, placement) {
    var script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.onload = function () {
        callback(fileName);
    };
    document.getElementById(placement).appendChild(script);
}

// Callback function to log when a file has been loaded
const callBackFunc = (fileName) => {
    console.log(fileName + " has been loaded.");
}

