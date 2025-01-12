export async function getPosts() {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts")
                            .then(res => res.json())
                            .then(json => json)
                            .catch(()=> alert("cant feed!"))
    return result   

}
await getPosts()
export async function getUsers() {
    const result = await fetch("https://jsonplaceholder.typicode.com/users")
                            .then(res=> res.json())
                            .then(json => json)
                            .catch(() => console.log("cant feed users!"))
    return result
}
await getUsers()
export async function matchingUser(userId) {
   const result =await fetch(`https://jsonplaceholder.typicode.com/users/?id=${userId}`)
    .then(res=> res.json())
    .then(json => json[0])
    return result

}
export async function matchingComments(postId) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`)
        .then(res=>res.json())
        .then(json=>json)
        
        return result
    
}