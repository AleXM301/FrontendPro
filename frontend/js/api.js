    import {API_URL} from './config.js';

    export async function getTodos() {
        const response = await fetch(API_URL);
        return await response.json();
    }

    export async function createTodo(title) {
       try {
           const response = await fetch(API_URL, {
               headers: {'Content-Type': 'application/json'},
               method: 'POST',
               body: JSON.stringify({title: String(title)})
           });
           return await response.json();
       }
       catch (error) {
           console.log(error);
       }
    }

    export async function changeTodo(id, title, finished) {
      try {
          const response = await fetch(API_URL + id, {
              headers: {'Content-Type': 'application/json'},
              method: 'PUT',
              body: JSON.stringify({
                  id,
                  title,
                  finished,
              })
          });
          return await response.json();
      }
      catch (error) {
          console.log(error);
      }
    }

    export async function deleteTodo(id) {
       try {
           await fetch(API_URL + '/' + id, {
               method: 'DELETE'
           });
       }
       catch (error) {
           console.log(error);
       }
    }




