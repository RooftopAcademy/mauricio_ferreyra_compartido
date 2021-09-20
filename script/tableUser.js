document.querySelector('.js-navbar').innerHTML = navbar()
const tabla = document.querySelector('.js-tbody')

function getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(json => json.forEach(user => tabla.innerHTML += row(user)))
    .catch(error => {
        console.log(error)
    })
}

async function fetching () {
    await getUsers()
}

fetching()