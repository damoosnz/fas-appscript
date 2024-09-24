import jQuery from "https://cdn.skypack.dev/jquery";

// Inject HTML
async function loadHTML(filePath) {
    const response = await fetch(filePath);
    const html = await response.text();
    console.log(filePath, html)
    document.body.innerHTML += html; // Append the HTML
}

// log the start of the script

console.log('page init started')

const githubPagesUrl = 'https://damoosnz.github.io/fas-appscript/'
async function loadModularContent() {

    // Load your modular HTML files
    console.log('html loading started')
    await loadHTML(githubPagesUrl + 'html/global/header.html'); 
    await loadHTML(githubPagesUrl + 'html/plannings/combine-sheets.html'); 
    await loadHTML(githubPagesUrl + 'html/plannings/combine-sheets-progress.html'); 
    await loadHTML(githubPagesUrl + 'html/global/footer.html'); 
    console.log('html loading completed')
    
    // Load scripts after HTML content is added
    console.log('script loading started')
    loadScripts();
    console.log('script loading completed')

    console.log('page init completed')
}

// Function to load additional scripts
function loadScripts() {
    const script = document.createElement('script');
    script.src = 'script/plannings/combine-sheets.js'; // C:\BIMSC\GitHub Clones\fas-appscript\script\plannings\combine-sheets.js
    script.type = 'module'
    document.body.appendChild(script); 
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadModularContent);
