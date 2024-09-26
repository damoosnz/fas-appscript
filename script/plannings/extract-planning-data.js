

function extractPlanningData() {

    console.log('running extractPlanningData')
    
    google.script.run
        .withSuccessHandler(function () {
            // Close the dialog
            google.script.host.close();
        })
        .createFasToPostTable();

}

extractPlanningData()