import { showDivById, showProgress } from "../general/show-progess.js";
import { showDivById, hideDivById } from "../general/show-progess.js";

function loadSheets() {
    google.script.run
        .withSuccessHandler(function (sheetNames) {
            var sheetsListDiv = document.getElementById('sheetsList');
            sheetsListDiv.innerHTML = ''; // Clear the list before adding
            sheetNames.forEach(function (name) {
                sheetsListDiv.innerHTML += `
          <label>
            <input type="checkbox" name="sheets" value="${name}">
            ${name}
          </label><br>`;
            });
        })
        .getSheetNames();
}

// Function to handle the form submission
function submitSelection() {

    hideDivById('user-input')
    showDivById('progress')

    var selectedSheets = [];
    var checkboxes = document.querySelectorAll('input[name="sheets"]:checked');

    checkboxes.forEach(function (checkbox) {
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

function resetSheet() {

    showProgress('user-input')
    google.script.run
        .withSuccessHandler(function () {
            // Close the dialog
            google.script.host.close();
        })
        .resetSpreadSheet(); //resetSpreadSheet

}

// Load the sheet names 
loadSheets();
$('#submit-button').on('click', function (event) {
    event.preventDefault(); // Prevent navigation
    submitSelection();
});

$('#reset-button').on('click', function (event) {
    event.preventDefault(); // Prevent navigation
    resetSheet();
});