import { get, post, del, put } from './request.js'

//TODO fill the correct endpoints
const endpoints = {
    allHeroes: 'data/characters?sortBy=_createdOn%20desc',
    create: `data/characters`,
    details: `data/characters/`,
    edit: `data/characters/`,
    delete: `data/characters/`,
    like: `data/useful`


};

//TODO create the necessary functions

export async function getAllHeroes() {
    return await get(endpoints.allHeroes);
}

export async function createHero({
    category,
    imageUrl,
    description,
    moreInfo
}
) {
    return await post(endpoints.create, {
        category,
        imageUrl,
        description,
        moreInfo
    }
    )
};

export async function getDetails(id) {
    return await get(endpoints.details + id)
}

export async function editHero(id, {
    category,
    imageUrl,
    description,
    moreInfo

}) {
    return await put(endpoints.edit + id, {
        category,
        imageUrl,
        description,
        moreInfo

    }
    )
};

export async function deleteHero(id) {
    return await del(`${endpoints.delete}${id}`)
};

export async function likeCharacter(characterId) {
    return await post(endpoints.like, { characterId })
}

export async function getLikes(characterId) {
    return await get(`data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`);
};

export async function isLiked(characterId, userId) {
    return await get(`data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
}