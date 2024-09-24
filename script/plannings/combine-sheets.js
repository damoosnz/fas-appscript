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

    toggleHtml('start')
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
    google.script.run
        .withSuccessHandler(function () {
            // Close the dialog
            google.script.host.close();
        })
        .resetSpreadSheet(); //resetSpreadSheet


}

function toggleHtml(step) {
    if (step === 'start') {
        document.getElementById('progress').classList.remove('is-hidden');
        document.getElementById('user-input').classList.add('is-hidden');
    }





}


// Load the sheet names 
loadSheets();