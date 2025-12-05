import { $html } from "../../../html/generator/html-generator.js";

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
    const contentRef = 'html/modal/combine-sheets.html'
    const $content = await $html.$modal(contentRef)
    $cont.append($content)

    const $list = $content.find('#sheetsList')
    loadSheets($list, $progress)

    const $submit = $content.find('#submit-button').on('click', () => submitSelection($list, $progress))
    const $reset = $content.find('#reset-button').on('click', () => resetSheet($list, $progress))

    // FOOTER

    const $footer = await $html.$footer()
    $cont.append($footer)

}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadModularContent);

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

// Function to handle the form submission
function submitSelection($list, $progress) {

    $list.hide()
    $progress.show()

    var selectedSheets = [];
    var $checkboxes = $list.find('input[name="sheets"]:checked');
    $checkboxes.each(function () {
        const $cb = $(this)
        selectedSheets.push($cb.val());
    });

    console.log('selectedSheets', selectedSheets)

    // Call the server-side function to process selected sheets
    google.script.run
        .withSuccessHandler(function () { google.script.host.close() })
        .processSelectedSheets(selectedSheets)
}

function resetSheet($list, $progress) {

    $list.hide()
    $progress.show()

    google.script.run
        .withSuccessHandler(function () { google.script.host.close() })
        .resetSpreadSheet()

}

