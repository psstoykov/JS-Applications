import { getAllHeroes } from "../data/data.js";
import { html, render, page } from "../lib.js";


const dashboardTemplate = (heroes) => html`
<h2>Characters</h2>
<section id="characters">
${heroes.length > 0
        ? heroes.map(hero => html`
<div class="character">
    <img src=${hero.imageUrl} />
    <div class="hero-info">
      <h3 class="category">${hero.category}</h3>
      <p class="description">${hero.description}</p>
      <a class="details-btn" href="/details/${hero._id}">More Info</a>
    </div>
    
  </div>
  </section>
`) : html`
<h2>No added Heroes yet.</h2>
`};
`;


export async function showDashboard() {

    const heroes = await getAllHeroes();
    render(dashboardTemplate(heroes));
}