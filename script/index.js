const inputName = document.querySelector('.input-name')
const inputMom = document.querySelector('.input-mom')
const inputPet = document.querySelector('.input-pet')
const start = document.querySelector('.start')
const welcome = document.querySelector('.welcome')
let name = document.querySelectorAll('.name')
let mom = document.querySelector('.mom')
let pet = document.querySelectorAll('.pet')

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

start.addEventListener('click', () => {
  welcome.style.display = 'none'
  name.forEach(element => {
    element.innerHTML = inputName.value.capitalize()
  });
  mom.innerHTML = inputMom.value.capitalize()
  pet.forEach(element => {
    element.innerHTML = inputPet.value.capitalize()
  });
})

