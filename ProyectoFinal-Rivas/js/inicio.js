const servicios = [
    {id: 1,nombre: "Maquinas y pesas", precio: 1900 },
    {id: 2,nombre: "Clases de Hiit", precio: 2600 },
    {id: 3,nombre: "Clases de Funcional", precio: 1500},
    {id: 4,nombre: "Clases de Strong", precio: 1300 },
    {id: 5,nombre: "Calistenia", precio: 1250},
]

const formulario = document.getElementById('form-login');

formulario.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('name').value;
  const pass = document.getElementById('password').value;
});


const inputUser = document.querySelector("#name"),
      inputPass = document.querySelector("#pass")


function guardar(valor) {


    let user = {usuario: inputUser.value, pass: inputPass.value };
  
    if (user.usuario === "" || user.pass === "") {
      message.innerHTML = "Complete los datos requeridos";
      return;
    } else {
      valor === "sessionStorage" &&
        sessionStorage.setItem("item", JSON.stringify(user));
  
      valor === "localStorage" &&
        localStorage.setItem("item", JSON.stringify(user));
    }
    return user;
  }

  