const loginForm = document.querySelector('#form-login')
//Tomar y frenar los valores q se introducen
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    //llamo a los input y los almaceno en el LS
    const name = document.querySelector('#name').value
    const password = document.querySelector('#pass').value
    const Users = JSON.parse(localStorage.getItem('users'))|| []
    const validUser = Users.find(user=> user.name === name && user.password === password)
    console.log(validUser)//Validacion

    //Mensaje si la validacion es correcta:
    swal.fire({
        icon: 'success',
        title:`Bienvenido/a ${validUser.name}`
    })

    //mando la info al LS de que el usuario esta registrado
    localStorage.setItem('login_succes', JSON.stringify(validUser))

    //hago que me lleve a la pagina principal
    window.location.href = 'inicio.html'

    //si no estoy registrado:
    if (!validUser) {
        return alert('Datos incorrectos')
    }

})


