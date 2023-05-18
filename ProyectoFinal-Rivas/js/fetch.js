const url= 'https://jsonplaceholder.typicode.com/comments'

fetch(url)
.then(respuesta => respuesta.json())
.then(data =>{

    let element = document.getElementById('comments')
    element.innerHTML = `
    <p>${data.name}</p>
    `;
    console.log(data)
})
.catch(error=> console.log(error))