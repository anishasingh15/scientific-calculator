function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  let display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}
function calculate() {
  let display = document.getElementById('display');
  try {
    let expr = display.value;

    // Convert sin, cos, tan to degree-based values
    expr = expr
      .replace(/sin\(([^)]+)\)/g, (_, angle) => `Math.sin((${angle}) * Math.PI / 180)`)
      .replace(/cos\(([^)]+)\)/g, (_, angle) => `Math.cos((${angle}) * Math.PI / 180)`)
      .replace(/tan\(([^)]+)\)/g, (_, angle) => `Math.tan((${angle}) * Math.PI / 180)`)
      .replace(/log\(([^)]+)\)/g, (_, val) => `Math.log10(${val})`);

    display.value = eval(expr);
  } catch {
    display.value = "Error";
  }
}