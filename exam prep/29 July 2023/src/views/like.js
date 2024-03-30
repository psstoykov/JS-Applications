import { likeFact } from '../data/service.js';
import { page } from '../lib.js';
export async function onLike(ctx) {

    const factId = ctx.params.id;
    let likes = await likeFact(factId);
    page.redirect(`/details/${factId}`);
}