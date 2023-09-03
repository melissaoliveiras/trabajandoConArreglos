// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];


addEventListener("DOMContentLoaded", (event) => {

function filterByType(arr, type){
  return arr.filter(item=> typeof item === type);
}

const palabras = filterByType(strangeArray, 'string');
palabras.sort((a, b) => a.localeCompare(b, 'es-uy-u-kf-upper'));



// Función que recibe por parámetro un array y muestra sus elementos en pantalla
function showList(array) {
  const container = document.getElementById("list");
  container.innerHTML = "";
  // Más info de forEach => https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
  array.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}



let laLista = document.getElementById("list");
  palabras.forEach((item) => {  
  let li = document.createElement("li");
  li.textContent = item;
  laLista.appendChild(li);

});

});