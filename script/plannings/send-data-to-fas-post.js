import { showProgress } from "../general/show-progess.js";

function sendDataToFasPost() {

    console.log('running extractPlanningData')

    showProgress()

    google.script.run
        .withSuccessHandler(function () {
            // Close the dialog
            google.script.host.close();
        })
        .sendToFasPostPlanning();

}

sendDataToFasPost()