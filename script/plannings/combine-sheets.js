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
        .toggleHtml('start')
        .processSelectedSheets(selectedSheets);
}

function toggleHtml(step) {
    if (step === 'start') {
        document.getElementById('spinner').classList.remove('is-hidden');
        document.getElementById('sheetsForm').classList.add('is-hidden');
    }





}


// Load the sheet names 
loadSheets();