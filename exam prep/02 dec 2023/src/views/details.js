import { getDetails, getLikes, isLiked } from '../data/data.js';
import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';

const detailsTemplate = (isOwner, hero, userData, currentLikes, hasLiked) => html`
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${hero.imageUrl} />
            <div>
              <p id="details-category">${hero.category}</p>
              <div id="info-wrapper">
                <div id="details-description">
                  <p id="description">
                    ${hero.description}
                  </p>
                  <p id="more-info">
                   ${hero.moreInfo}
                  </p>
                </div>
              </div>
              <h3>Is This Useful:<span id="likes">${currentLikes}</span></h3>
              <div id="action-buttons">
              ${isOwner
        ? html`
              <a href='/edit/${hero._id}' id="edit-btn">Edit</a>
              <a href='/delete/${hero._id}' id="delete-btn">Delete</a>
            `: null}
            ${userData && !isOwner && !hasLiked
        ? html`
        <a href="/like/${hero._id}" id="like-btn">Like</a>
        `: null}
              </div>
            </div>
          </div>
        </section>
`;

export async function showDetails(ctx) {

    const id = ctx.params.id;

    const hero = await getDetails(id);
    const userData = getUserData();
    let isOwner;
    let hasLiked;

    if (userData) {
        isOwner = hero._ownerId == userData._id;
        hasLiked = await isLiked(id, userData._id);
    } else {
        isOwner = false;
        hasLiked = null;
    }

    const currentLikes = await getLikes(id);
    render(detailsTemplate(isOwner, hero, userData, currentLikes, hasLiked));

}