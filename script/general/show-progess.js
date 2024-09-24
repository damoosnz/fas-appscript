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