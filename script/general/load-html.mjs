// Inject HTML

export async function loadHTML(elements) {

    const githubPagesUrl = 'https://damoosnz.github.io/fas-appscript/'
    let html = '<div id="fas-container" class="container">'
    const elCount = {};

    for (var el of elements) {
        const filePath = githubPagesUrl + `html/global/${el}.html`
        const response = await fetch(filePath);
        let htmlEl = await response.text();
        if (elCount[el]) {
            elCount[el] += 1;
        } else {
            elCount[el] = 1;
        }
        console.log( elCount[el])
        htmlEl = htmlEl.replace('{{it}}', elCount[el])
        html += htmlEl
    }
    console.log(html + '</div>')

    $('#fas-container').html(html + '</div>')

}
