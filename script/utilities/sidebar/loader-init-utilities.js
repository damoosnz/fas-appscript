import { $html } from "../../../html/generator/html-generator.js";

async function LoadUtilitiesSideBar() {

    const $cont = $('#fas-container')

    const $header = await $html.$header()
    $cont.append($header)

    // STEP 1

    // const $step1 = await $html.$title("Clean Sheets")
    // $cont.append($step1)

    const $action1 = await $html.$button("Clean Sheets")
    $action1.on('click', function (event) {
        event.preventDefault(); // Prevent navigation
        google.script.run
            .withSuccessHandler(function () { })
            .initCleanSheets();
    });
    $cont.append($action1)

    // STEP 2

    // const $step2 = await $html.$title("Step 2")
    // $cont.append($step2)

    const $action2 = await $html.$button("Delete / Hide Sheets")
    $action2.on('click', function (event) {
        event.preventDefault(); // Prevent navigation
        google.script.run
            .withSuccessHandler(function () { })
            .initDeleteSheets();
    });
    $cont.append($action2)


    // FOOTER

    const $footer = await $html.$footer()
    $cont.append($footer)

    // UI
    $('.button-container').css('height', '100px');

}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', LoadUtilitiesSideBar);

