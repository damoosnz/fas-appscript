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
    const $send = await $html.$button("Go to FAS Post Planning")
    $send.on('click', () => sendDataToFasPost($progress, $send))
    $cont.append($send)

    // FOOTER

    const $footer = await $html.$footer()
    $cont.append($footer)

}



// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadModularContent);

function sendDataToFasPost($progress, $send) {

    $send.hide()
    $progress.show()

    google.script.run
        .withSuccessHandler(function () {
            google.script.host.close();  // This will close the dialog
            window.open('https://docs.google.com/spreadsheets/d/1MTd4HeY2zX86c-QH6jhs8_hoNnw7pMT-1_h1CDpEplQ/edit?gid=0#gid=0', '_blank')
        })
        .sendToFasPostPlanningExe();

    $send.show()
    $progress.hide()

}
