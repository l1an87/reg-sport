import store from "../../store";
import api from "../../utils/api";

const cache = {
    list: null,
};

export async function getSport() {
    if (!cache.list) {
        cache.list = api.get('/sport');
    }
    return cache.list;
}

export async function findSport(id) {
    return api
        .find('/sport', id);
}

export async function setSport(form) {
    return api
        .post('/sport', form)
        .then(response => {
            store.list = null;
            return response;
        });
}

export async function delSport(id) {
    return api
        .del('/sport', id)
        .then(response => {
            store.list = null;
            return response;
        });
}
