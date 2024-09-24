export function loadScripts(scriptRef) {
    const script = document.createElement('script');
    script.src = scriptRef; // C:\BIMSC\GitHub Clones\fas-appscript\script\plannings\combine-sheets.js
    script.type = 'module'
    document.body.appendChild(script); 
}