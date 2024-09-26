// Inject HTML

export async function loadHTML(elements) {

    const githubPagesUrl = 'https://damoosnz.github.io/fas-appscript/'
    let html = '<div id="fas-container" class="container">'

    for (var el of elements) {
        const filePath = githubPagesUrl  + `html/global/${el}.html`
        const response = await fetch(filePath);
        const htmlEl = await response.text();
        html += htmlEl
    }

    $('#fas-container').html(html + '</div>')

}


export async function loadHtmlElement(filePath) {
    const response = await fetch(filePath);
    const html = await response.text();
    console.log(filePath, html)
    // document.body.innerHTML += html; // Append the HTML
    return html
}