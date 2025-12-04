import { $html } from "../../../html/generator/html-generator.js";

async function LoadPlanningSideBar() {

    const $cont = $('#fas-container')

    const $header = await $html.$header()
    $cont.append($header)

    // STEP 1

    const $step1 = await $html.$title("Step 1")
    $cont.append($step1)

    const $action1 = await $html.$button("Combine Sheets")
    $action1.on('click', function (event) {
        event.preventDefault(); // Prevent navigation
        google.script.run
            .withSuccessHandler(function () { })
            .combineWeeks();
    });
    $cont.append($action1)

    // STEP 2

    const $step2 = await $html.$title("Step 2")
    $cont.append($step2)

    const $action2 = await $html.$button("Extract Data")
    $action2.on('click', function (event) {
        event.preventDefault(); // Prevent navigation
        google.script.run
            .withSuccessHandler(function () { })
            .extractPlanningData();
    });
    $cont.append($action2)

    // STEP 3

    const $step3 = await $html.$title("Step 3")
    $cont.append($step3)

    const $action3 = await $html.$button("Send to Fas Post")
    $action3.on('click', function (event) {
        event.preventDefault(); // Prevent navigation
        google.script.run
            .withSuccessHandler(function () { })
            .sendToFasPostPlanning();
    });
    $cont.append($action3)

    // STEP 4

    const $step4 = await $html.$title("Step 4")
    $cont.append($step4)

    const $action4 = await $html.$button("Send to Knack")
    $action4.on('click', function (event) {
        event.preventDefault(); // Prevent navigation
        google.script.run
            .withSuccessHandler(function () { })
            .sendPlanningToKnack()   
    });
    $cont.append($action3)

    // UI
    $('.button-container').css('height', '100px');

}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', LoadPlanningSideBar);

