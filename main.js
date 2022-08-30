document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);

function getText(){
    // fetch('sample.txt')
    // .then(function(res){
    //     return res.text();
    // })
    // .then(function(data){
    //     console.log(data);
    // })

    fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
        document.getElementById('outPut').innerHTML = data;
    })
    .catch((err) => console.log(err))
}

function getUsers() {
    fetch('user.json')
    .then((res) => res.json())  
    .then((data) => {
        let outPut = '<h2>User</h2>'
        data.forEach((user) => {
            outPut += `
                <ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">Name: ${user.name}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                </ul>
            `
        });
        document.getElementById('outPut').innerHTML = outPut;
    })
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
        let outPut =  '<h2>Post</h2>'
        data.forEach((posts) => {
            outPut +=
             ` 
                <div class="card card-body mb-3">
                    <h3>${posts.title}</h3>
                    <p>${posts.body}</p>
                </div>
            `
        })
        document.getElementById('outPut').innerHTML = outPut;
    })
}

function addPost(e) {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'content-type': 'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}
