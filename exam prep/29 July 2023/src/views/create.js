import { createFact } from '../data/service.js';
import { html, render, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const createTemplate = (handler) => html`
<section id="create">
          <div class="form">
            <h2>Add Fact</h2>
            <form @submit=${handler} class="create-form">
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Category"
              />
              <input
                type="text"
                name="image-url"
                id="image-url"
                placeholder="Image URL"
              />
              <textarea
                id="description"
                name="description"
                placeholder="Description"
                rows="10"
                cols="50"
              ></textarea>
              <textarea
                id="additional-info"
                name="additional-info"
                placeholder="Additional Info"
                rows="10"
                cols="50"
              ></textarea>
              <button type="submit">Add Fact</button>
            </form>
          </div>
        </section>
`;

export async function showCreate() {

    const handler = createSubmitHandler(onSubmit);
    render(createTemplate(handler));
};

async function onSubmit(data, form) {
    //TODO get the correct fields from submit data
    const category = data['category'];
    const imageUrl = data['image-url'];
    const description = data['description'];
    const moreInfo = data['additional-info'];

    if ([category,
        imageUrl,
        description,
        moreInfo
    ].some(el => el == '')) {
        return alert('all fields required');
    }

    const result = await createFact({
        category,
        imageUrl,
        description,
        moreInfo
    });

    if (result) {
        page.redirect('/dashboard');
    }
}
