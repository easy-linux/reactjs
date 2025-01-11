export const getPosts = async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    if(id){
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
    } else {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
    }
}

export const getTodos = async (id) => {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    if(id){
        return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => res.json())
    } else {
        return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
    }
}
