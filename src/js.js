import { getPosts,getUsers, matchingComments, matchingUser } from "./services.js";
const root = document.getElementById("root")

async function renderTrigger(){
    let allPosts= await getPosts()
    renderPost(allPosts)
}
renderTrigger()
async function renderUsers(userId,postId) {
    const getId = await matchingUser(userId)

    document.querySelector(`#post${postId} > #postHeader > #userInf > #userNameTop`).innerHTML=getId.username
    document.querySelector(`#post${postId} > #footer > #userNameButt`).innerHTML=getId.username
    
}
async function renderComments(postId){
    const getComment = await matchingComments(postId)

    const template = getComment.map(comment => `<div id="commentItem${postId}" class="my-2 ">
        <h1 class="inline-block">${comment.name}:</h1>
        <span class="text-xs">${comment.body}</span>`).join("")

        document.querySelector(`#post${postId} > #commentRoot`).innerHTML=template

}






function renderPost(posts){
   
    const template = posts.map(post => {
        renderUsers(post.userId,post.id)
        renderComments(post.id)
        return `<div id="post${post.id}" class=" relative flex flex-col gap-1 w-full p-7">
        <div id="postHeader" class="flex justify-between items-center">
            <div id="userInf" class="flex justify-between items-center gap-4">
                <div id="avatar" class="rounded-full w-10 h-10 bg-black "></div>
                <h1 id="userNameTop"></h1>

            </div>
            <svg width="30px" height="30px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Editable-line"
                version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink">
                <circle cx="16" cy="16" fill="none" id="XMLID_878_" r="2" stroke="#000000" stroke-linecap="round"
                    stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                <circle cx="6" cy="16" fill="none" id="XMLID_879_" r="2" stroke="#000000" stroke-linecap="round"
                    stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
                <circle cx="26" cy="16" fill="none" id="XMLID_880_" r="2" stroke="#000000" stroke-linecap="round"
                    stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" /></svg>

        </div>
        <div id="img" class="w-full h-64 bg-black"></div>
        <div id="intract-sector" class="flex items-center gap-3"><svg id="like" width="30px" height="30px"
                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                    stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg id="comment" onclick="commentBoxHandle(${post.id})" width="30px" height="30px" viewBox="0 0 32 32" version="1.1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">

                <title>comment-1</title>
                <desc>Created with Sketch Beta.</desc>
                <defs>

                </defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
                    <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-100.000000, -255.000000)"
                        fill="#000000">
                        <path
                            d="M116,281 C114.832,281 113.704,280.864 112.62,280.633 L107.912,283.463 L107.975,278.824 C104.366,276.654 102,273.066 102,269 C102,262.373 108.268,257 116,257 C123.732,257 130,262.373 130,269 C130,275.628 123.732,281 116,281 L116,281 Z M116,255 C107.164,255 100,261.269 100,269 C100,273.419 102.345,277.354 106,279.919 L106,287 L113.009,282.747 C113.979,282.907 114.977,283 116,283 C124.836,283 132,276.732 132,269 C132,261.269 124.836,255 116,255 L116,255 Z"
                            id="comment-1" sketch:type="MSShapeGroup">

                        </path>
                    </g>
                </g>
            </svg>
            <svg id="send" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 14L12.2728 19.3032C12.5856 20.0331 13.5586 20.1103 13.9486 19.4185C14.7183 18.0535 15.8591 15.8522 17 13C19 8 20 4 20 4M10 14L4.69678 11.7272C3.96687 11.4144 3.88975 10.4414 4.58149 10.0514C5.94647 9.28173 8.14784 8.14086 11 7C16 5 20 4 20 4M10 14L20 4"
                    stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg class="ml-auto" id="save" width="30px" height="30px" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M6.75 6L7.5 5.25H16.5L17.25 6V19.3162L12 16.2051L6.75 19.3162V6ZM8.25 6.75V16.6838L12 14.4615L15.75 16.6838V6.75H8.25Z"
                    fill="#080341" />
            </svg>
        </div>
        <div id="footer" class="flex gap-3">

            <h1 id="userNameButt"></h1>
            <span id="title" >${post.title}</span>
        </div>
        <div id="viewComments">view all comments</div>
        <div id="commentRoot" class=" overflow-y-auto bg-slate-300 absolute border-t-2 rounded-lg p-4 w-full scale-y-0 h-1/2 origin-bottom duration-150 bottom-0 left-0 "></div>

    </div>`

    }).join("")

    return root.innerHTML=template
    
}
 function commentBoxHandle(postId){  
    let toggle=  document.querySelector(`#post${postId} > #commentRoot`).classList.toggle("scale-y-0")
    return toggle
}

