import { html, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';
import { page } from '../lib.js';


const searchTemplate = (handler, matches) => html`

`;

export async function showSearch(ctx) {
    const handler = createSubmitHandler(onSubmit);
    const matches = [];
    render(searchTemplate(handler, matches));

    async function onSubmit({ search }) {

        if (!search) {
            page.redirect('/search');
            return alert('field is required');
        } else {
            page.redirect(`?search=${search}`);
        }
        const matches = await getMatches(search);//TODO create the correct search function

        render(searchTemplate(handler, matches));
    }
}