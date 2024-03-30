import { deleteHero } from "../data/data.js";
import { page } from "../lib.js";

export async function showDelete(ctx) {

    const id = ctx.params.id;
    const question = confirm('are you sure?')

    if (question) {
        await deleteHero(id);
        page.redirect('/dashboard')
    }

}