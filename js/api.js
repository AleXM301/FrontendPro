import {API_URL, GET_URL_POSTS, GET_URL_COMMENT} from './config.js';


const ADD_ACTION = "add";
const LOAD_ACTION = "load";


function checkResponseStatus(res, action, entity) {
    if (!res.ok) {
        throw new Error(`Failed to ${action} ${entity}: ${res.statusText}`);
    }
    return res.json();
}


export async function getPosts() {
    try {
        const response = await fetch(`${API_URL}${GET_URL_POSTS}`);

        return await checkResponseStatus(response, LOAD_ACTION, "posts");
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function addNewPost(post) {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        });
        return await checkResponseStatus(response, ADD_ACTION, "post");
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export async function getComments(postId) {
    try{
        const response = await fetch(`${API_URL}/${postId}${GET_URL_COMMENT}`);
        return await checkResponseStatus(response, LOAD_ACTION, "comments");
    } catch (err) {
        console.error(err);
        throw err;
    }
}