import { html, render, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const createTemplate = (handler) => html`

`;

export async function showCreate() {

    const handler = createSubmitHandler(onSubmit);
    render(createTemplate(handler));
};

async function onSubmit(data, form) {
    //TODO get the correct fields from submit data


    if ([
    ].some(el => el == '')) {
        return alert('all fields required');
    }


}
