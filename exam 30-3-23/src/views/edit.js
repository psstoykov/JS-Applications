import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';


const editTemplate = (handler) => html`

`;

export async function showEdit(ctx) {

    const id = ctx.params.id;

    const handler = createSubmitHandler(onSubmit);

    render(editTemplate(handler));

    async function onSubmit(data, form) {

        //TODO get the correct fields from submit data

        if ([

        ]
            .some(el => el == '')) {
            return alert('all fields are required');
        }



        page.redirect(`/details/${id}`);
    }
};