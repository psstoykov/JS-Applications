import { editFact } from '../data/service.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';
import { getDetails } from '../data/service.js';

const editTemplate = (handler, fact) => html`
<section id="edit">
          <div class="form">
            <h2>Edit Fact</h2>
            <form @submit=${handler} class="edit-form">
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Category"
                .value=${fact.category}
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
                .value=${fact.imageUrl}
              />
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
                .value=${fact.description}
              ></textarea>
              <textarea
                id="additional-info"
                name="additional-info"
                placeholder="Additional Info"
                rows="10"
                cols="50"
                .value=${fact.moreInfo}
              ></textarea>
              <button type="submit">Post</button>
            </form>
          </div>
        </section>
`;

export async function showEdit(ctx) {

    const id = ctx.params.id;

    const fact = await getDetails(id);
    const handler = createSubmitHandler(onSubmit);

    render(editTemplate(handler, fact));

    async function onSubmit(data, form) {

        //TODO get the correct fields from submit data
        const category = data['category'];
        const imageUrl = data['image-url'];
        const description = data['description'];
        const moreInfo = data['additional-info'];
        if ([
            category,
            imageUrl,
            description,
            moreInfo
        ]
            .some(el => el == '')) {
            return alert('all fields are required');
        }

        const result = await editFact(id, {
            category,
            imageUrl,
            description,
            moreInfo

        });

        if (!result) {
            return alert('edit failed');
        }
        page.redirect(`/details/${id}`);
    }
};