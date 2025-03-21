import {API_URL} from './config.js'

export async function loadObjects() {
    const response = await fetch(API_URL);
    return await response.json();
}

export async function createObject(title) {
    const response = await fetch(API_URL, {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({
            title: title,
            active: false,
        })
    });
    return await response.json();
}

export async function changeObject(finished, id) {
    const response = await fetch(API_URL + id, {
        headers: {'Content-Type':'application/json'},
        method: 'PUT',
        body: JSON.stringify({
            finished
        })
    });
    return await response.json();
}
export async function deleteObject(id) {
    const response = await fetch(API_URL + id, {
        method: 'DELETE',
    })
}




