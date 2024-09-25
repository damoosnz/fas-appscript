export function showProgress(divToReplaceWithProgress = "") {
    // Show the progress spinner
    const progressDiv = document.getElementById('progress');
    if (progressDiv) {
        progressDiv.classList.remove('is-hidden');
    } else {
        console.error("Progress div not found");
    }

    // Hide the specified div if it is provided
    if (divToReplaceWithProgress !== '') {
        const targetDiv = document.getElementById(divToReplaceWithProgress);
        if (targetDiv) {
            targetDiv.classList.add('is-hidden');
        } else {
            console.error(`Element with ID '${divToReplaceWithProgress}' not found`);
        }
    }
}

export function hideDivById(div_id) {
    const myDiv = document.getElementById(div_id);  // Remove quotes around div_id
    if (myDiv) {
        // Check if the div contains the 'is-hidden' class
        if (!myDiv.classList.contains('is-hidden')) {
            myDiv.classList.add('is-hidden');
            console.log("Class 'is-hidden' added from div:", div_id);
        } else {
            console.log("Div is not visible:", div_id);
        }
    } else {
        console.error("Progress div not found");
    }
}

export function showDivById(div_id) {
    const myDiv = document.getElementById(div_id);
    if (myDiv) {
        // Check if the div contains the 'is-hidden' class
        if (myDiv.classList.contains('is-hidden')) {
            myDiv.classList.remove('is-hidden');
            console.log("Class 'is-hidden' removed from div:", div_id);
        } else {
            console.log("Div is already visible:", div_id);
        }
    } else {
        console.error("Div not found:", div_id);
    }
}