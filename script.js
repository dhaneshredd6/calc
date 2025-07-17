function appendValue(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

function toggleSign() {
  const display = document.getElementById('display');
  if (display.value) {
    display.value = String(-parseFloat(display.value));
  }
}
