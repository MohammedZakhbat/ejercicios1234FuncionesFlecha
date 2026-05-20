// 4.1 Número mayor

const mayor = () => {

  const n1 = parseInt(document.getElementById("num1").value);
  const n2 = parseInt(document.getElementById("num2").value);

  const res = document.getElementById("res1");

  if (n1 > n2) {
    res.innerText = "El mayor es: " + n1;
  } else if (n2 > n1) {
    res.innerText = "El mayor es: " + n2;
  } else {
    res.innerText = "Los dos números son iguales";
  }
};


// 4.2 Nivel experiencia

const nivel = () => {

  const nombre = document.getElementById("nombre").value;
  const años = parseInt(document.getElementById("años").value);

  let nivel = "";

  if (años < 2) nivel = "Principiante";
  else if (años <= 4) nivel = "Intermedio";
  else if (años <= 7) nivel = "Avanzado";
  else if (años <= 10) nivel = "Experto";
  else nivel = "Gurú";

  document.getElementById("res2").innerText =
    nombre + " tiene nivel: " + nivel;
};


// 4.3 Palabra bonita

const bonita = () => {

  const palabra = document.getElementById("palabra").value;

  const esBonita =
    (palabra.length === 9 && palabra.startsWith("h")) ||
    (palabra.length === 5 && palabra.startsWith("p"));

  const res = document.getElementById("res3");

  if (esBonita) {
    res.innerText = "La palabra es bonita según los estudios lingüísticos.";
  } else {
    res.innerText = "La palabra no es considerada bonita.";
  }
};


// 4.4 Número a letras

const convertir = () => {

  const num = parseInt(document.getElementById("numero").value);

  const letras = [
    "cero","uno","dos","tres","cuatro",
    "cinco","seis","siete","ocho","nueve","diez"
  ];

  const res = document.getElementById("res4");

  if (num >= 0 && num <= 10) {
    res.innerText = `El número ${num} es: ${letras[num]}`;
  } else {
    res.innerText = "Número inválido (0-10)";
  }
};