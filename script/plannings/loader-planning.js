import jQuery from "https://cdn.skypack.dev/jquery";

// Inject HTML
async function loadHTML(filePath) {
    const response = await fetch(filePath);
    const html = await response.text();
    console.log(filePath, html)
    document.body.innerHTML += html; // Append the HTML
}

// Load your modular HTML files
async function loadModularContent() {
    await loadHTML('html/global/header.html'); // Use forward slashes
    await loadHTML('html/plannings/combine-sheets.html'); // Use forward slashes
    await loadHTML('html/global/footer.html'); // Use forward slashes
    
    // Load scripts after HTML content is added
    // loadScripts();
}

// Function to load additional scripts
function loadScripts() {
    const script = document.createElement('script');
    script.src = './combine-sheets.js'; // Adjust the path as necessary
    document.body.appendChild(script); // Append the script
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadModularContent);