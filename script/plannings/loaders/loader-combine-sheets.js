import jQuery from "https://cdn.skypack.dev/jquery";
import { loadScripts } from "../../general/load-scripts.js";
import { loadHTML } from "../../general/load-html.js";
import { hideDivById } from "../../general/show-progess.js";

// log the start of the script

console.log('page init started')
const githubPagesUrl = 'https://damoosnz.github.io/fas-appscript/'

async function loadModularContent() {

    // Load your modular HTML files
    console.log('html loading started')
    const htmlEls = ['header', 'plannings/combine-sheets','progress', 'footer'] 
    await loadHTML(htmlEls);
    console.log('html loading completed')

    hideDivById('progress')
    
    // Load scripts after HTML content is added
    console.log('script loading started')
    loadScripts('script/plannings/combine-sheets.js');
    console.log('script loading completed')

    console.log('page init completed')
}




// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadModularContent);
