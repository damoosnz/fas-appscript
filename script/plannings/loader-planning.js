// loader-planning.js
// https://drive.google.com/uc?export=view&id=1am22Y4nawDPAyMwdr4p4fQpNgJ52egwQ

// Function to load external scripts dynamically
function loadScript(fileName, url, callback, placement) {
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

// Array of scripts to load
const loadingItems = [
    ['jquery.js', 'https://drive.google.com/uc?export=view&id=1aidHOxY2JyGC6Q1wF8PCBjVutW79cIGZ', callBackFunc, 'fas-body'],
    ['combine-sheets.js', 'https://drive.google.com/uc?export=view&id=1abgTlMo-Q9S7K19hc6ao0Pqb1kH2fKNL', callBackFunc, 'fas-body']
];


for (let item of loadingItems) {
    loadScript(...item); // Spread operator to pass array elements as arguments
}

