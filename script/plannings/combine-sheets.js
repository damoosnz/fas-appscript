import { showProgress } from "../general/show-progess.js";

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

    showProgress('user-input')
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

export function resetSheet() {

    showProgress()
    google.script.run
        .withSuccessHandler(function () {
            // Close the dialog
            google.script.host.close();
        })
        .resetSpreadSheet(); //resetSpreadSheet

}

// Load the sheet names 
loadSheets();