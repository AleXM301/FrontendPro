const ADD_ACTION = "add";
const LOAD_ACTION = "load";
const API_URL = `https://jsonplaceholder.typicode.com/posts`;
const postList = document.querySelector('.post_list');
const btnPostAdd = document.querySelector('#btn_post_add')
const postFrom = document.querySelector('#post_form');

function checkResponseStatus(res, action, entity) {
    if (!res.ok) {
        throw new Error(`Failed to ${action} ${entity}: ${res.statusText}`);
    }
    return res.json();
}

function loadPosts() {
    fetch(`${API_URL}/?_limit=10`)
        .then(res => checkResponseStatus(res, LOAD_ACTION, "posts"))
        .then(post => post.forEach((post) => postList.appendChild(renderPost(post))))
        .catch(err => console.error(err));
}

function renderPost(post) {
    const li = document.createElement('li');
    li.classList.add('card');
    li.innerHTML = `
             <h2>${post.title}</h2>
             <p class="card-text">${post.body}</p>
             <button class="btn_comment" data-post-id="${post.id}" type="submit">Сomment</button>
             <ul class="list_comments" data-post-id="${post.id}"></ul>`;
    return li;
}

function commentRequest(postId) {
    fetch(`${API_URL}/${postId}/comments?_limit=2`)
        .then(res => checkResponseStatus(res, LOAD_ACTION, "comments"))
        .then(comments => {
            const listComments = document.querySelector(`.list_comments[data-post-id="${postId}"]`);
            listComments.innerHTML = '';

            if (comments) {
                comments.forEach(comment => {
                    let li = renderComment(comment, postId);
                    listComments.appendChild(li);
                });
            }
        }).catch(err => console.error(err));
}

function renderComment(comment) {
    let li = document.createElement(`li`);
    li.classList.add('comment');
    li.innerHTML = `
        <p class="comment_name">Name: ${comment.name}</p>
        <a class="comment_email" href="#">${comment.email}</a>
        <p class="comment_body">${comment.body}</p>
        `;
    return li;
}


function addNewPost(post) {
    return fetch(`${API_URL}`, {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }).then(res => checkResponseStatus(res, ADD_ACTION, "post"))
        .catch(err => console.error(err));
}

loadPosts();

postList.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn_comment')) {
        commentRequest(e.target.dataset.postId);
    }
});

btnPostAdd.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(postFrom);

    let title = formData.get("title").trim();
    let body = formData.get("body").trim();
    if (!(title && body)) {
        alert(`В полях нет информации`);
    } else {
        let post = {
            title,
            body
        }
        addNewPost(post).then(newPost => postList.appendChild(renderPost(newPost)));
    }
    postFrom.reset();
})