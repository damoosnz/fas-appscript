function showProgressSpinner() {

    google.script.run
        .withSuccessHandler(function () {
            // Close the dialog
            google.script.host.close();
        })
        .createFasToPostTable();

}

showProgressSpinner()