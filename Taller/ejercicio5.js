let nota1 = parseFloat(prompt("ingrese la nota 1"));
let nota2 = parseFloat(prompt("ingrese la nota 2"));
let nota3 = parseFloat(prompt("ingrese la nota 3"));
let nota4 = parseFloat(prompt("ingrese la nota 4"));
let nota40 = ((nota1+nota2)/2)*0.4;
let nota60 = ((nota3+nota4)/2)*0.6;
let notaPromedio = nota40+nota60;
alert("la nota promedio es " + notaPromedio);