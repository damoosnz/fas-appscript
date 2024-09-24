export function showProgress(divToReplaceWithProgress = "") {

        document.getElementById('progress').classList.remove('is-hidden');
        document.getElementById(divToReplaceWithProgress).classList.add('is-hidden');
    
}
