const inputName = document.querySelector('.input-name')
const inputMom = document.querySelector('.input-mom')
const inputPet = document.querySelector('.input-pet')
const start = document.querySelector('.start')
const welcome = document.querySelector('.welcome')
let name = document.querySelectorAll('.name')
let mom = document.querySelector('.mom')
let pet = document.querySelectorAll('.pet')
const back = document.querySelector('.back')


String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

start.addEventListener('click', () => {
  if (inputName.value == '' || inputMom.value == '') {
    alert('Uppps! parece que olvidaste responder algunas preguntas')
  } else if (inputPet.value == '') {
    pet.forEach(element => {
      element.innerHTML = 'Bobby'
    });
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      document.body.scrollTop = 0; // For Safari
      welcome.style.display = 'none'
      name.forEach(element => {
      element.innerHTML = inputName.value.capitalize()
    });
      mom.innerHTML = inputMom.value.capitalize()
  } else {
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    document.body.scrollTop = 0; // For Safari
    welcome.style.display = 'none'
    name.forEach(element => {
      element.innerHTML = inputName.value.capitalize()
    });
    mom.innerHTML = inputMom.value.capitalize()
    pet.forEach(element => {
      element.innerHTML = inputPet.value.capitalize()
    });
  }
})

back.addEventListener('click', () => {
  document.location.reload()
})