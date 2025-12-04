import { $html } from "../../../html/generator/html-generator.js"

async function loadModularContent() {

    const $cont = $('#fas-container')

    // HEADER

    const $header = await $html.$header()
    $cont.append($header)

    // PROGRESS
    const $progress = await $html.$progress()
    $progress.hide()
    $cont.append($progress)


    // CONTENT
    const contentRef = 'html/modal/delete-sheets.html'
    const $content = await $html.$modal(contentRef)
    $cont.append($content)

    const $list = $content.find('#sheetsList')
    loadSheets($list, $progress)

    const $delete = $content.find('#delete-button').on('click', () => deleteSheets($list, $progress))
    const $hide = $content.find('#hide-button').on('click', () => hideSheets($list, $progress))
    const $unhide = $content.find('#unhide-button').on('click', () => unhideSheets($list, $progress))

    // FOOTER

    const $footer = await $html.$footer()
    $cont.append($footer)



}



// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadModularContent);

// EVENTS

// EVENTS
function loadSheets($list, $progress) {

    $list.hide()
    $progress.show()

    google.script.run
        .withSuccessHandler(function (sheetNames) {
            for (const name of sheetNames) {
                const $cont = $('<div>').appendTo($list)
                const $input = $(`
                        <label for="sheet-checkbox-${name}">
                            <input type="checkbox" id="sheet-checkbox-${name}" name="sheets" value="${name}">
                            ${name}
                        </label>
                    `)
                    .appendTo($cont)
            }
        })
        .getSheetNames();

    $list.show()
    $progress.hide()
}

function deleteSheets($list, $progress) {

    $list.hide()
    $progress.show()

    var selectedSheets = getSelectedSheets($list)

    // Call the server-side function to process selected sheets
    google.script.run
        .withSuccessHandler(function () { google.script.host.close() })
        .deleteSheets(selectedSheets)
}

function hideSheets($list, $progress) {

    $list.hide()
    $progress.show()

    var selectedSheets = getSelectedSheets($list)
    // Call the server-side function to process selected sheets
    google.script.run
        .withSuccessHandler(function () { google.script.host.close() })
        .hideSheets(selectedSheets)
}

function unhideSheets($list, $progress) {

    $list.hide()
    $progress.show()

    var selectedSheets = getSelectedSheets($list)
    // Call the server-side function to process selected sheets
    google.script.run
        .withSuccessHandler(function () { google.script.host.close() })
        .unhideSheets(selectedSheets)
}

// HELPER

function getSelectedSheets($list) {

    var selectedSheets = [];
    var $checkboxes = $list.find('input[name="sheets"]:checked');
    $checkboxes.each(function () {
        const $cb = $(this)
        selectedSheets.push($cb.val());
    });
    return selectedSheets

}


