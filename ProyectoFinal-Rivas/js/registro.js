//funcion de registrarse
const registerForm = document.querySelector('#form-registro')
registerForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    //tomo los input con sus respectivos valores.

const name = document.querySelector('#name').value
const password = document.querySelector('#pass').value

//traigo la info del LS

const Users = JSON.parse(localStorage.getItem('users')) || []
const UsuarioRegistrado = Users.find(user=> user.name === name)
if (UsuarioRegistrado) {
    return alert('El nombre de usuario ya esta registrado!')
}
// pusheamos el usuario al ls
Users.push({name: name, password: password})
localStorage.setItem('users', JSON.stringify(Users))
alert('Registrado con exito')
window.location.href = "index.html"
})