import { showProgress } from "../general/show-progess.js";
import { showDivById, hideDivById } from "../general/show-progess.js";

function sendDataToFasPost() {

    console.log('running extractPlanningData')

    showDivById('progress')

    google.script.run
        .withSuccessHandler(function () {
            $('#linkButton').text("Go to FAS Post Planning")
            $('#linkUrl').attr('href', 'https://docs.google.com/spreadsheets/d/1MTd4HeY2zX86c-QH6jhs8_hoNnw7pMT-1_h1CDpEplQ/edit?gid=0#gid=0');
            hideDivById('progress')
            showDivById('link')
            // Close the dialog
            $('#linkButton').on('click', function () {
                google.script.host.close();  // This will close the dialog
            });
            // 
        })
        .sendToFasPostPlanningExe();

}

sendDataToFasPost()