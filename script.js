const displayTab = document.querySelector('.display-tab');
const buttons = document.querySelectorAll('button');
const specialKeys = ['%', '*', '/', '-', '+', '='];
let output = '';

const calculate = function (btnValue) {
  if (btnValue === '=' && output !== '') {
    output = eval(output.replace(/%/g, '/100'));
  } else if (btnValue === 'AC') {
    output = '';
  } else if (btnValue === 'DEL') {
    output = output.toString().slice(0, -1);
  } else {
    // If output is empty and the button is a special key, do nothing
    if (output === '' && specialKeys.includes(btnValue)) return;

    output += btnValue;
  }
  displayTab.value = output;
};

buttons.forEach(button => {
  button.addEventListener('click', e => {
    console.log(e.target.dataset.value);
    calculate(e.target.dataset.value);
  });
});
