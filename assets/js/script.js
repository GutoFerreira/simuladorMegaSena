const numbersLoto = document.querySelector('#numbers-loto');
const numbersMega = document.querySelector('#number-mega');
const buttonMega = document.querySelector('#btn-mega');
const buttonLoto = document.querySelector('#btn-loto');

window.addEventListener('load', () => {
  buttonLoto.addEventListener('click', addNumberLoto());
  buttonMega.addEventListener('click',addNumberMega());
});

function addNumberLoto() {
  function randomLoto(){
    let numberR = [];
    function sortfunction(a, b){
      return (a - b);
    }
    for(let i = 0; numberR.length < 50; i++){
      let randomNumbers = Math.floor (Math.random () * 99);
      if(numberR.includes(randomNumbers)){
        numberR.pop(randomNumbers);
      } else {
        numberR.push(randomNumbers);
      }
    }
    console.log(numberR);
    return numberR.sort(sortfunction);
  }
  const numbers = () => {
    let numberR = randomLoto();
    numbersLoto.innerHTML = '';
    for(i in numberR){
        let button = createButton(); 
        button.classList.add('button-loto');
        button.innerText = numberR[i];
        numbersLoto.appendChild(button);
    }
}
  return numbers;
};

function addNumberMega(){
  function randomMega(){
    let numberR = [];
    function sortfunction(a, b){
      return (a - b);
    }
    for(let i = 0; numberR.length < 6; i++){
      let randomNumbers = Math.floor (Math.random () * 60);
      if(numberR.includes(randomNumbers) || randomNumbers === 0){
        numberR.pop(randomNumbers);
      } else {
        numberR.push(randomNumbers);
      }
    }
    return numberR.sort(sortfunction);
  }
  const numbers = () => {
    let numberR = randomMega();
    numbersMega.innerHTML= '';
    for(i in numberR){
      let button = createButton(); 
      button.classList.add('button-mega');
      button.innerText = numberR[i];
      numbersMega.appendChild(button);
  }
}
return numbers;
}

function createButton(){
  let btnNumberLoto = document.createElement('button');
  return btnNumberLoto;
}
