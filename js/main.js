const result = document.getElementById('div__p--result');
const userinput = document.getElementById('div__input--number');
let usernumber;

userinput.addEventListener('input', calculateSucessorAndAntecessor);

function calculateSucessorAndAntecessor()
{
  console.log('Entering in the calculate function');
  usernumber = parseInt(userinput.value);
  if (Number.isNaN(usernumber))
  {
    result.style.color = "#0003";
    result.textContent = `Aqui aparecerá o antecessor e sucessor do seu número`;
  }
  else
  {
    result.style.color = "#000";
    result.textContent = `O antecessor de ${usernumber} é ${usernumber-1} e o sucessor é ${usernumber+1}`;
  }
}