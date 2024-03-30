import { likeCharacter } from '../data/data.js';
import { page } from '../lib.js';

export async function onLike(ctx) {
    const id = ctx.params.id;

    const result = await likeCharacter(id);

    page.redirect(`/details/${id}`);
}