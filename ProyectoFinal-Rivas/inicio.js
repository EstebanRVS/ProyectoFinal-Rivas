//Tomo los elementos del dom
const botonTomar = document.querySelectorAll('.BotonTomar');
const btnCalcular = document.querySelectorAll('.btnCalcular')

// Agregar evento click a cada botón de TOMARCLASE
botonTomar.forEach((boton) => {
  boton.addEventListener('click', () => {
    swal.fire({
      icon: 'success',
      title: "Has tomado la clase con exito",
      footer: 'Para más informacion nuestros datos estan al final de la pagina'
    })
  });
});

/* CALCULADORA */

//Muestro clases recomendadas
btnCalcular.addEventListener('click', ()=>calcularIMC())


function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = document.getElementById("resultado");
    
    //indico que hay q completar los campos 
    if(peso === '' || altura === '') {
      resultado.textContent = "Por favor, introduce tus datos.";
      return;
    }
    
    let imc = peso / (altura * altura);

    //muestro resultado
    resultado.textContent = "Tu índice de masa corporal es: " + imc.toFixed(2);

}

