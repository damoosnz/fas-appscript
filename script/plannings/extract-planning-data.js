import { showProgress } from "../general/show-progess";

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