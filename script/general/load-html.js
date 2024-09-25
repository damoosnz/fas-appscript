// Inject HTML
export async function loadHTML(filePath) {
    const response = await fetch(filePath);
    const html = await response.text();
    console.log(filePath, html)
    document.body.innerHTML += html; // Append the HTML
}