import { showDivById, hideDivById } from "../general/show-progess.js";

function initPlanning() {

    $('#button-1').text("Combine Sheets")
    $('#button-2').text("Extract Data")
    $('#button-3').text("Send to Fas Post")
    $('#button-4').text("Send to Knack")

    $('#title-1').text("Step 1")
    $('#title-2').text("Step 2")
    $('#title-3').text("Step 3")
    $('#title-4').text("Step 4")
    
    $('#button-1').on('click', function (event) {
        event.preventDefault(); // Prevent navigation
        google.script.run
        .withSuccessHandler(function () {
            // Close the dialog
        })
        .combineWeeks();        
    });

    $('#button-2').on('click', function (event) {
        event.preventDefault(); // Prevent navigation
        google.script.run
        .withSuccessHandler(function () {
            // Close the dialog
        })
        .extractPlanningData();        
    });

    $('#button-3').on('click', function (event) {
        event.preventDefault(); // Prevent navigation
        google.script.run
        .withSuccessHandler(function () {
            // Close the dialog
        })
        .sendToFasPostPlanning();        
    });

    $('#button-4').on('click', function (event) {
        event.preventDefault(); // Prevent navigation
        google.script.run
        .withSuccessHandler(function () {
            // Close the dialog
        })
        .sendPlanningToKnack(); // to update to fas post to knack     
    });

}


initPlanning()