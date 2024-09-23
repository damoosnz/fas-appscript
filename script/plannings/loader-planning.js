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

// Load your modular HTML files

const githubPagesUrl = 'https://damoosnz.github.io/fas-appscript/'
async function loadModularContent() {
    await loadHTML(githubPagesUrl + 'html/global/header.html'); // Use forward slashes
    await loadHTML(githubPagesUrl + 'html/plannings/combine-sheets.html'); // Use forward slashes
    await loadHTML(githubPagesUrl + 'html/global/footer.html'); // Use forward slashes
    
    // Load scripts after HTML content is added
    // loadScripts();
}

"https://damoosnz.github.io/fas-appscript/script/planning/loader-planning.js"


// Function to load additional scripts
function loadScripts() {
    const script = document.createElement('script');
    script.src = './combine-sheets.js'; // Adjust the path as necessary
    document.body.appendChild(script); // Append the script
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadModularContent);