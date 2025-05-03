import {getPosts} from "./api.js";
import {postList} from '../index.js';

export async function loadPosts() {

    let posts = await getPosts();

    if (!posts) {
        console.warn("posts not found");
    } else {
        posts.forEach(post => postList.appendChild(renderPost(post)));
    }
}

export function renderPost(post) {
    const li = document.createElement("li");
    li.classList.add('card');
    li.innerHTML = `
        <h2 class="title_post">${post.title}</h2>
        <p class="card_text">${post.body}</p>
        <button class="btn_comment button" data-post-id="${post.id}" type="submit">Сomment</button>
        <ul class="list_comments" data-post-id="${post.id}"></ul>`;
    return li;
}

export function renderComment(comments, postId) {
    const listComments = document.querySelector(`.list_comments[data-post-id="${postId}"]`);
    listComments.innerHTML = '';
    if (comments) {
        const btn = document.querySelector(`.btn_comment[data-post-id="${postId}"]`)
        const disabled = btn.disabled = true;
        if (disabled) {
            btn.classList.add('disabled');


        }

        comments.forEach(comment => {
            let li = document.createElement(`li`);
            li.classList.add('comment');
            li.classList.add('appearance-comment');
            li.innerHTML = `
                <p class="comment_name">Name: ${comment.name}</p>
                <a class="comment_email" href="#">${comment.email}</a>
                <p class="comment_body">${comment.body}</p>`;
            listComments.appendChild(li);
        });
        listComments.classList.add('appearance-list');
    }
}



