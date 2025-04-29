import {addNewPost, getComments,} from './api.js'
import {renderPost, loadPosts, renderComment} from './ui.js'


export const postList = document.querySelector('.post_list');
const btnPostAdd = document.querySelector('#btn_post_add')
const postForm = document.querySelector('#post_form');

loadPosts();


postList.addEventListener('click', async (e) => {
    if (e.target.classList.contains('btn_comment')) {
        const comments = await getComments(e.target.dataset.postId);
        renderComment(comments, e.target.dataset.postId);
    }
});

btnPostAdd.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData(postForm);

    let title = formData.get("title").trim();
    let body = formData.get("body").trim();
    if (!(title && body)) {
        alert(`В полях нет информации`);
    } else {
        let post = {
            title, body
        }
        addNewPost(post).then(newPost => postList.appendChild(renderPost(newPost)));
    }
    postForm.reset();
})