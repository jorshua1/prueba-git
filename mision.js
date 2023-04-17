let estudiantes = [];
let notas = [];
let nombres = [];
let codigo = [];
let menu;
let mision1 = [];
let mision2 = [];
let mision3 = [];
let finalPrueba = [];
var numEstudiantes;
let nombreEstudiante;
let codigoEstudiante;
let notaMision1;
let notaMision2;
let notaMision3;
let notaPruebaFinal;
do {
  menu = parseInt(
    prompt(`
        1- digite la cantidad de talentos coex
        2- registre los datos de cada estudiante
        3- registrar nota de la mision 1
        4- registrar nota de la mision 2
        5- registrar notas de la mision 3
        6- registrar nota de la prueba final
        7- mejor nota de la mision 1
        8- mejor nota de la mision 2
        9- mejor nota de la mision 3
        10- mostrar el nombre y el promedio de cada talento
        11- toda la informacion de los talentos incluyendo las notas
        12- nombre del talento que desarrollaron el ejercicio
        13- salir`)
  );
  switch (menu) {
    case 1:
      numEstudiantes = parseInt(prompt(`digite el numero de estudiantes`));
      while (numEstudiantes < 0 || isNaN(numEstudiantes)) {
        alert(`el dato ingresado es invalido`);
        numEstudiantes = parseInt(
          prompt(`ingrese el numero de estudiantes nuevamente`)
        );
      }
      break;
    case 2:
      if (numEstudiantes === undefined) {
        alert("No es posible ingresar a esta opción aun");
      } else {
        for (let i = 0; i < numEstudiantes; i++) {
          codigoEstudiante = parseInt(
            prompt(`estudiante ${i + 1} digite su codigo`)
          );
          while (codigoEstudiante < 0 || isNaN(codigoEstudiante)) {
            codigoEstudiante = parseInt(
              prompt(`estudiante digite su codigo nuevamente`)
            );
          }
          for (let i = 0; i < estudiantes.length; i++) {
            while (
              estudiantes[i][0] === codigoEstudiante ||
              codigoEstudiante < 0 ||
              isNaN(codigoEstudiante)
              
            ) {
              codigoEstudiante = parseInt(
                prompt(
                  `el codigo esta repetido vuelve a digitarlo o es invalido`
                )
                
              );
              i=0;
            }
          }
          codigo.push(codigoEstudiante);
          nombreEstudiante = prompt(`estudiante ${i + 1} digite su nombre`);
          while (nombreEstudiante.length === 0) {
            nombreEstudiante = prompt(
              `este campo esta vacio escribe tu nombre`
            );
          }
          nombres.push(nombreEstudiante);
          estudiantes[i] = [];
          for (let j = 0; j < 1; j++) {
            estudiantes[i][0] = codigoEstudiante;
            estudiantes[i][1] = nombreEstudiante;
          }
        }
        console.table(estudiantes);
      }

      break;
    case 3:
      if (numEstudiantes === undefined) {
        alert("No es posible ingresar a esta opción aun");
      } else {
        for (let i = 0; i < estudiantes.length; i++) {
          notaMision1 = parseFloat(
            prompt(
              "digite la nota de la mision 1 del estudiante " +
                estudiantes[i][1]
            )
          );
          while (notaMision1 < 0 || notaMision1 > 100 || isNaN(notaMision1)) {
            notaMision1 = parseFloat(
              prompt(
                `el dato ingresado para la mision 2 no es valido vuelve a digitarlo`
              )
            );
          }
          mision1.push(notaMision1);
        }
        console.table(notas);
      }
      break;
    case 4:
      if (notaMision1 === undefined) {
        alert("No es posible ingresar a esta opción aun");
      } else {
        for (let i = 0; i < estudiantes.length; i++) {
          notaMision2 = parseFloat(
            prompt(
              `digite la nota de la mision 2 del estudiante ${estudiantes[i][1]}`
            )
          );
          while (notaMision2 < 0 || notaMision2 > 100 || isNaN(notaMision2)) {
            notaMision2 = parseFloat(
              prompt(
                `el dato ingresado para la mision 2 no es valido vuelve a digitarlo`
              )
            );
          }
          mision2.push(notaMision2);
        }
      }
      break;
    case 5:
      if (notaMision2 === undefined) {
        alert("No es posible ingresar a esta opción aun");
      } else {
        for (let i = 0; i < estudiantes.length; i++) {
          notaMision3 = parseFloat(
            prompt(
              `digite la nota de la mision 3 del estudiante ${estudiantes[i][1]}`
            )
          );
          while (notaMision3 < 0 || notaMision3 > 100 || isNaN(notaMision3)) {
            notaMision3 = parseFloat(
              prompt(
                `el dato ingresado para la mision 3 no es valido vuelve a digitarlo`
              )
            );
          }
          mision3.push(notaMision3);
        }
      }
      break;
    case 6:
      if (notaMision3 === undefined) {
        alert("No es posible ingresar a esta opción aun");
      } else {
        for (let f = 0; f < estudiantes.length; f++) {
          notaPruebaFinal = parseFloat(
            prompt(`digite la nota de la prueba final del estudiante ${f + 1}`)
          );
          while (
            notaPruebaFinal < 0 ||
            notaPruebaFinal > 100 ||
            isNaN(notaPruebaFinal)
          ) {
            notaPruebaFinal = parseFloat(
              prompt(
                `el dato ingresado para la prueba final no es valido vuelve a digitarlo`
              )
            );
          }
          finalPrueba.push(notaPruebaFinal);
        }
      }
      break;
    case 7:
      if (notaPruebaFinal === undefined) {
        alert(`aun no puedes ingresar a esta opcion`);
      } else {
        let notaMayor1 = Math.max(...mision1);
        let nombre1 = mision1.indexOf(notaMayor1);
        alert(
          "El estudiante " +
            nombres[nombre1] +
            " con la nota " +
            notaMayor1 +
            " es la nota mayor de la Misión 1"
        );
      }
      break;
    case 8:
      if (nombreEstudiante === undefined) {
        alert(`aun no puedes ingresar a esta opcion`);
      } else {
        let notaMayor2 = Math.max(...mision2);
        let nombre2 = mision2.indexOf(notaMayor2);
        alert(
          "El estudiante " +
            nombres[nombre2] +
            " con la nota " +
            notaMayor2 +
            " es la nota mayor de la Misión 2"
        );
      }
      break;
    case 9:
      if (nombreEstudiante === undefined) {
        alert(`aun no puedes ingresar a esta opcion`);
      } else {
        let notaMayor3 = Math.max(...mision3);
        let nombre3 = mision3.indexOf(notaMayor3);
        alert(
          "El estudiante " +
            nombres[nombre3] +
            " con la nota " +
            notaMayor3 +
            " es la nota mayor de la Misión 3"
        );
      }
      break;
    case 10:
      for (let i = 0; i < estudiantes.length; i++) {
        let promedioEstudiantes =
          (mision1[i] + mision2[i] + mision3[i] + finalPrueba[i]) / 4;
        alert(
          "El estudiante " +
            estudiantes[i][1] +
            " tiene un promedio de " +
            promedioEstudiantes
        );
      }
      break;
    case 11:
      for (let i = 0; i < estudiantes.length; i++) {
        notas[i] = [];
        for (let j = 0; j < 5; j++) {
          notas[i]["codigo"] = codigo[i];
          notas[i]["nombre"] = nombres[i];
          notas[i]["mision 1"] = mision1[i];
          notas[i]["mision 2"] = mision2[i];
          notas[i]["mision 3"] = mision3[i];
          notas[i]["nota"] = finalPrueba[i];
        }
      }
      console.table(notas);
      break;
    case 12:
      alert(`el autor es felipe :D`);
      break;
    default:
      alert("saliste del menu");
      break;
  }
} while (menu != 13);
