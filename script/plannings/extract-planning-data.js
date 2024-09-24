import { showProgress } from "../general/show-progess.js";

function extractPlanningData() {

    showProgress()

    google.script.run
        .withSuccessHandler(function () {
            // Close the dialog
            google.script.host.close();
        })
        .createFasToPostTable();

}

extractPlanningData()