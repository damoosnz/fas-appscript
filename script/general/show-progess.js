export function showProgress(divToReplaceWithProgress = "") {
        if (step === 'start') {
        document.getElementById('progress').classList.remove('is-hidden');
        document.getElementById(divToReplaceWithProgress).classList.add('is-hidden');
    }
}
