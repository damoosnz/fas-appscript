import jQuery from "https://cdn.skypack.dev/jquery";

// inject html
async function loadHTML(filePath) {
    const response = await fetch(filePath);
    const html = await response.text();
    document.body.innerHTML = html; // Replace the entire body content
}

// Load your modular HTML files
async function loadModularContent() {
    await loadHTML('html\global\header.html'); // Use relative path
    await loadHTML('html\plannings\combine-sheets.html'); // Use relative path
    await loadHTML('html\global\footer.html'); // Use relative path
}

// Call the function when the page loads
window.onload = loadModularContent;


// inject scripts
import './combine-sheets.js'

