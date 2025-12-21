// ===== Calculator =====
let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// ===== Multiplication Table (Nested Loops) =====
function generateTable() {
  let size = parseInt(document.getElementById("tableNum").value);
  let table = document.getElementById("mulTable");

  table.innerHTML = "";

  if (isNaN(size) || size <= 0) {
    table.innerHTML = "<tr><td>Enter a valid number</td></tr>";
    return;
  }

  for (let i = 1; i <= size; i++) {
    let row = document.createElement("tr");

    for (let j = 1; j <= size; j++) {
      let cell = document.createElement("td");
      cell.textContent = i * j;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}

// ===== Number Comparison =====
function compareNumbers() {
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let result = document.getElementById("compareResult");

  if (isNaN(a) || isNaN(b)) {
    result.textContent = "Please enter both numbers.";
    return;
  }

  if (a > b) {
    result.textContent = a + " is greater than " + b;
  } else if (a < b) {
    result.textContent = a + " is less than " + b;
  } else {
    result.textContent = "Both numbers are equal.";
  }
}
