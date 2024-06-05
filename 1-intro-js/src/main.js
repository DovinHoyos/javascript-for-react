
//fetch api
/*const httpClient = fetch('https://jsonplaceholder.typicode.com/users');
httpClient
    .then(response => response.json())
    .then(data => console.log(data));*/

//async/await
const getAllUsers = async() => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    const ul = document.createElement('ul');

    users.forEach(user => {
        const li = document.createElement('li');
        li.innerHTML = user.name;
        ul.append(li);
        console.log(user.name);
    });

    document.getElementById('root').append(ul);

}
//DOM manipulation
const h1 = document.createElement('h1');
h1.innerHTML = 'Listado de usuarios:';
document.getElementById('root').append(h1);

getAllUsers();