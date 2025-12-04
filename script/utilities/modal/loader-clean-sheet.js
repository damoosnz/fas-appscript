import { $html } from "../../../html/generator/html-generator.js"

async function loadModularContent() {

    const $cont = $('#fas-container')

    // HEADER

    const $header = await $html.$header()
    $cont.append($header)

    // PROGRESS
    const $progress = await $html.$progress()
    $cont.append($progress)

    // CONTENT
    const $active = await $html.$button('Clean Active Sheet')
    $cont.append($active)

    const $all = await $html.$button('Clean All Sheet')
    $cont.append($all)

    $active.on('click', () => cleanActiveSheet($progress, $active, $all))
    $all.on('click', () => cleanallSheets($progress, $active, $all))

    // FOOTER

    const $footer = await $html.$footer()
    $cont.append($footer)



}



// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadModularContent);

// EVENTS

function cleanActiveSheet($progress, $active, $all) {

    $progress.show()
    $active.hide()
    $all.hide()

    google.script.run
        .withSuccessHandler(function () { google.script.host.close() })
        .cleanActiveSheet();
}

function cleanallSheets($progress, $active, $all) {

    $progress.show()
    $active.hide()
    $all.hide()

    google.script.run
        .withSuccessHandler(function () { google.script.host.close() })
        .cleanAllSheets();
}
