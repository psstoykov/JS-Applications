import { editHero, getDetails } from "../data/data.js";
import { html, page, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemplate = (handler, hero) => html`
<section id="edit">
<div class="form">
  <img class="border" src="./images/border.png" alt="" />
  <h2>Edit Character</h2>
  <form @submit= ${handler} class="edit-form">
    <input
      type="text"
      name="category"
      id="category"
      placeholder="Character Type"
      .value= ${hero.category}
    />
    <input
      type="text"
      name="image-url"
      id="image-url"
      placeholder="Image URL"
      .value= ${hero.imageUrl}
    />
    <textarea
      id="description"
      name="description"
      placeholder="Description"
      rows="2"
      cols="10"
      .value= ${hero.description}
    ></textarea>
    <textarea
      id="additional-info"
      name="additional-info"
      placeholder="Additional Info"
      rows="2"
      cols="10"
      .value= ${hero.moreInfo}
    ></textarea>
    <button type="submit">Edit</button>
  </form>
  <img class="border" src="./images/border.png" alt="" />
</div>
</section>
`;

export async function showEdit(ctx) {

    const id = ctx.params.id;

    const hero = await getDetails(id);
    const handler = createSubmitHandler(onSubmit);
    render(editTemplate(handler, hero))

    async function onSubmit(data, form) {

        const category = data['category'];
        const imageUrl = data['image-url'];
        const description = data['description'];
        const moreInfo = data['additional-info'];

        if ([
            category, imageUrl, description, moreInfo
        ]
            .some(el => el == '')) {
            return alert('all fields are required')
        }
        const result = await editHero(id, {
            category,
            imageUrl,
            description,
            moreInfo
        })
        if (result) {
            page.redirect(`/details/${id}`)
        }
    }
}