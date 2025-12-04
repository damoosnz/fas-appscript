import { $html } from "../../../html/generator/html-generator.js"

async function loadModularContent() {

    const $cont = $('#fas-container')

    // HEADER

    const $header = await $html.$header()
    $cont.append($header)

    // PROGRESS
    const $progress = await $html.$progress()
    $cont.append($progress)

    // FOOTER

    const $footer = await $html.$footer()
    $cont.append($footer)

    extractPlanningData()

}



// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadModularContent);

// EVENTS

function extractPlanningData() {
    google.script.run
        .withSuccessHandler(function () { google.script.host.close() })
        .createFasToPostTable();
}
