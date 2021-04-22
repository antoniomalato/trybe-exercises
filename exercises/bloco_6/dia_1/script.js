const state = document.getElementById('input-state');

function createState() {
  const stateOptions = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < stateOptions.length; index += 1) {
    const createOptions = document.createElement('option');
    state.appendChild(createOptions).innerText = stateOptions[index];
    state.appendChild(createOptions).value = stateOptions[index];
  }
}

createState();

function validateData(data) {
  
}