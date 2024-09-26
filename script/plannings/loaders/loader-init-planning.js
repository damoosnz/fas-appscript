import { loadScripts } from "../../general/load-scripts.js";
import { loadHTML } from "../../general/load-html.js";

// log the start of the script

console.log('page init started')


async function loadModularContent() {

    // Load your modular HTML files
    console.log('html loading started')
    const htmlEls = ['header', 'title', 'button', 'title', 'button', 'title', 'button','title', 'button', 'footer']
    await loadHTML(htmlEls);
    $('.button-container').css('height', '100px');


    console.log('html loading completed')

    // Load scripts after HTML content is added
    console.log('script loading started')
    loadScripts('script/plannings/init-planning.js');
    console.log('script loading completed')

    // add event listeners


    console.log('page init completed')
}



// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadModularContent);
