import { getDetails, getTotalLikes, hasLiked } from '../data/service.js';
import { html, render, page } from '../lib.js';
import { getUserData } from '../util.js';
import { likeFact } from '../data/service.js';

const detailsTemplate = (fact, isOwner, likes, isLiked) => html`
 <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${fact.imageUrl} alt="example1" />
            <p id="details-category">${fact.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">
                  ${fact.description}
                </p>
                <p id="more-info">
                  ${fact.moreInfo}
                </p>
              </div>

              <h3>Likes:<span id="likes">${likes}</span></h3>
              
              <!--Edit and Delete are only for creator-->
              <div id="action-buttons">
              ${isOwner
        ? html`
            <a href="/edit/${fact._id}" id="edit-btn">Edit</a>
            <a href="/delete/${fact._id}" id="delete-btn">Delete</a>
            `: null}
    <!--Bonus - Only for logged-in users ( not authors )-->
${!isOwner && localStorage.user && !isLiked
        ? html`
                <a href="/like/${fact._id}" id="like-btn">Like</a>

`: null}
              </div>
            </div>
          </div>
        </section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;


    const fact = await getDetails(id);
    const userData = getUserData();
    let isOwner;
    let isLiked;
    if (!userData) {
        isOwner = false;
    } else {
        isOwner = userData._id == fact._ownerId;
        isLiked = await hasLiked(id, userData._id);
    }

    const likes = await getTotalLikes(id);
    render(detailsTemplate(fact, isOwner, likes, isLiked));
}

