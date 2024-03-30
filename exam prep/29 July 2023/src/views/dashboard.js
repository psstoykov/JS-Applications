
import { getFacts } from '../data/service.js';
import { html, render, page } from '../lib.js';


const dashboardTemplate = (facts) => html`
 <h2>Fun Facts</h2>
        <section id="dashboard">
            ${facts.length > 0
        ? facts.map(fact =>
            html`
                <!-- Display a div with information about every post (if any)-->
          <div class="fact">
            <img src=${fact.imageUrl} alt="example1" />
            <h3 class="category">${fact.category}</h3>
            <p class="description">
              ${fact.description}
            </p>
            <a class="details-btn" href="/details/${fact._id}">More Info</a>
          </div>
                `) : null}
        </section>
        ${facts.length == 0
        ? html`
        <!-- Display an h2 if there are no posts -->
        <h2>No Fun Facts yet.</h2>
        `: null}
`;


export async function showDashboard() {

    const facts = await getFacts();
    render(dashboardTemplate(facts));
}