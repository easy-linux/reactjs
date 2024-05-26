export const getPosts = async (id) => {
    if(id){
        return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
    } else {
        return await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
    }
}

export const getTodos = async (id) => {
    if(id){
        return await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => res.json())
    } else {
        return await fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
    }
}
