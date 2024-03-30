import { createHero } from "../data/data.js";
import { html, render, page } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const createTemplate = (handler) => html`
<section id="create">
          <div class="form">
            <img class="border" src="./images/border.png" alt="" />
            <h2>Add Character</h2>
            <form @submit= ${handler} class="create-form">
              <input
                type="text"
                name="category"
                id="category"
                placeholder="Character Type"
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
                rows="2"
                cols="10"
              ></textarea>
              <textarea
                id="additional-info"
                name="additional-info"
                placeholder="Additional Info"
                rows="2"
                cols="10"
              ></textarea>
              <button type="submit">Add Character</button>
            </form>
            <img class="border" src="./images/border.png" alt="" />
          </div>
        </section>
`;

export async function showCreate() {

    const handler = createSubmitHandler(onSubmit);
    render(createTemplate(handler))
};

async function onSubmit(data, form) {
    const { description, category } = data;
    const imageUrl = data['image-url'];
    const moreInfo = data['additional-info'];

    if ([category,
        imageUrl,
        description,
        moreInfo]
        .some(input => input == '')) {
        return alert('all fields are required')
    }

    const newHero = await createHero({
        category,
        imageUrl,
        description,
        moreInfo
    })
    if (newHero) {
        page.redirect('/dashboard');
    }
}
