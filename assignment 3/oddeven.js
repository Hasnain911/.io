do {
  number = prompt("Enter a number");
  if (number % 2 == 0) {
    alert(`${number} is even.`);
  } else {
    alert(`${number}  is odd.`);
  }
} while (confirm("Do you want to enter another number?"));

