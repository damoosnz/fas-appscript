const refs = {
    header: 'html\global\header.html',
    footer: 'html\global\footer.html',
    title: 'html\global\title.html',
    button: 'html\global\button.html',
    progress: 'html\global\progress.html',
}

export const $html = {
    $header: async () => await create$element(refs[header]),
    $footer: async () => await create$element(refs[footer]),
    $button: async (label) => {
        const $btn = await create$element(refs[button])
        $btn.find('button').text(label)
        return $btn
    },
    $title: async (title) => {
        const $title = await create$element(refs[title])
        $title.text(title)
        return $title
    },
    $progress: async () => await create$element(refs[progress]),
}

async function create$element(ref) {
    // 1. Fetch the HTML content as a Response object
    const response = await fetch(refs[ref]);
    // 2. Extract the plain text (HTML string) from the response
    const htmlString = await response.text();
    // 3. Create and return the jQuery element
    const $element = $(htmlString);
    return $element
}