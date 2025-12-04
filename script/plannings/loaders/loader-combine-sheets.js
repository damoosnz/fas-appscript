import { $html } from "../../../html/generator/html-generator.js";

// log the start of the script

console.log('page init started')


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
    $cont.append($header)f

    const $list = $content.find('#sheetsList')
    loadSheets($list)

    const $submit = $content.find('#submit-button').on('click',($list, $progress) =>  submitSelection($list, $progress))
    const $reset = $content.find('#reset-button').on('click',($list, $progress) =>  resetSheet($list, $progress))

    // FOOTER

    const $footer = await $html.$footer()
    $cont.append($footer)

}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadModularContent);

// EVENTS

function loadSheets($list) {
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
}

// Function to handle the form submission
function submitSelection($list, $progress) {

    $list.hide()
    $progress.show()

    var selectedSheets = [];
    var $checkboxes = document.querySelectorAll('input[name="sheets"]:checked');

    $checkboxes.forEach(function (checkbox) {
        selectedSheets.push(checkbox.value);
    });

    // Call the server-side function to process selected sheets
    google.script.run
        .withSuccessHandler(function () {
            // Close the dialog
            google.script.host.close();
        })
        .processSelectedSheets(selectedSheets);
}

function resetSheet($list, $progress) {

    $list.hide()
    $progress.show()

    google.script.run
        .withSuccessHandler(function () {
            // Close the dialog
            google.script.host.close();
        })
        .resetSpreadSheet(); //resetSpreadSheet

}

// function getSheetNamesAsync() {
//     return new Promise((resolve, reject) => {
//         // 1. Configure google.script.run with the resolve/reject handlers
//         google.script.run
//             .withSuccessHandler(resolve) // On success, fulfill the Promise with the returned array
//             .withFailureHandler(reject) // On failure, reject the Promise with the error

//             // 2. Execute the server-side function
//             .getSheetNames();
//     });
// }

