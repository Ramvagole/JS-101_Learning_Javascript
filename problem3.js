let a = [3, 4, 5, 6, 7];
let output = "";

a.forEach(function (element, index) {
  if (index % 2 === 0) {
    output += element;
    if (index !== a.length - 2) {
      output += " - ";
    }
  }
});

console.log(output);
