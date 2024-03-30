import { get, post, del, put } from './request.js';

//TODO fill the correct endpoints
const endpoints = {
    getFacts: 'data/facts?sortBy=_createdOn%20desc',
    create: 'data/facts',
    details: 'data/facts/',
    edit: 'data/facts/',
    delete: 'data/facts/',
    like: 'data/likes',

};
//TODO create the necessary functions
export async function getFacts() {
    return await get(endpoints.getFacts);
}

export async function createFact({
    category,
    imageUrl,
    description,
    moreInfo

}) {
    return await post(endpoints.create, {
        category,
        imageUrl,
        description,
        moreInfo

    });
}
export async function getDetails(id) {
    return await get(`${endpoints.details}${id}`);
}

export async function editFact(id, {
    category,
    imageUrl,
    description,
    moreInfo

}) {
    return await put(`${endpoints.edit}${id}`, {
        category,
        imageUrl,
        description,
        moreInfo
    });
}

export async function deleteFact(id) {
    return await del(`${endpoints.delete}${id}`);
}

export async function likeFact(factId) {
    return await post(endpoints.like, { factId });
}

export async function getTotalLikes(factId) {
    return await get(`data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`);
}

export async function hasLiked(factId, userId) {
    return await get(`data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}