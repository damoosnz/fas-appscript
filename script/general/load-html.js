// Inject HTML
export async function loadHTML(filePath, id) {
    const response = await fetch(filePath);
    const html = await response.text();
    console.log(filePath, html)

    if(id) {
        html.replace('{{id}}', id)

    }

    document.body.innerHTML += html; // Append the HTML
}