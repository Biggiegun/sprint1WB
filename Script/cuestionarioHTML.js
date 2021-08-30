//Code here - HTML

let preguntasHTML = [
  [
    {
      pregunta:
        "¿Qué etiqueta es semánticamente correcta para el contenido principal?",
      correcta: "main",
      opcion2: "section",
      opcion3: "header",
    },
    {
      pregunta:
        "¿Qué etiqueta HTML nos sirve para incluir archivos de JavaScript?",
      correcta: "script",
      opcion2: "br",
      opcion3: "styles",
    },
  ],
  [
    {
      pregunta: "Organiza la estructura de un documento HTML5:",
      elemento1: "<!DOCTYPE html>",
      elemento2: "<html>",
      elemento3: "<head></head>",
      elemento4: "<body></body>",
      elemento5: "</html>",
    },
    {
      pregunta: "Ordena Jerárquicamente las siguientes etiquetas:",
      elemento1: "<h1>",
      elemento2: "<h2>",
      elemento3: "<h3>",
      elemento4: "<h4>",
      elemento5: "<p>",
    },
  ],
  [
    {
      pregunta: "¿Qué tecnologías pertenece al MEVN Stack?",
      imagen1: "../images/Windows.png",
      imagen2: "../images/Kotlin.png",
      correcta: "../images/Vue.png",
      imagen4: "../images/Angular.png",
    },
    {
      pregunta:
        "Sistema de base de datos NoSQL, orientado a documentos y de código abierto...",
      imagen1: "../images/Linux.png",
      correcta: "../images/Mongo.png",
      imagen2: "../images/Nodejs.png",
      imagen4: "../images/express.png",
    },
  ],
];

let randomImage = Math.floor(Math.random() * 4);
let animaciones = new Array();
animaciones[0] = "../images/boy1.svg";
animaciones[1] = "../images/boy2.svg";
animaciones[2] = "../images/girl1.svg";
animaciones[3] = "../images/girl2.svg";


let randomIndex = Math.floor(Math.random() * 3);
let randomQuestion = Math.floor(Math.random() * 2);

      
if (randomIndex === 0) { 

  // 3 respuestas 1 correcta
  const { pregunta, correcta, opcion2, opcion3 } =
    preguntasHTML[randomIndex][randomQuestion];

  let pintarDom = `
    <div id="pregunta">
      <img src="${animaciones[randomImage]}" alt="Imagen Aleatoria" />
      <p>${pregunta}</p>
    </div>

    <div id="opciones">
      <div class="seleccionOpcion" id="1">
        <p>${correcta}</p>
        <input type="checkbox" name="" id="">
      </div>

      <div class="seleccionOpcion" id="2">
        <p>${opcion2}</p>
        <input type="checkbox" name="" id="">
      </div>
      
      <div class="seleccionOpcion" id="3">
        <p>${opcion3}</p>
        <input type="checkbox" name="" id="">
      </div>
    </div>
        <button>COMPROBAR</button>
    `;
  document.body.innerHTML = pintarDom;

  let seleccion = document.getElementsByClassName("seleccionOpcion");
  let comprobar = document.querySelector("button");
  let respuesta = "";
  seleccionRespuesta = (e) => {
    const valor1 = e.target.id;
    document.getElementById(valor1).classList.toggle("verde");
    respuesta = valor1;
  };
  for (var i = 0; i < seleccion.length; i++) {
    seleccion[i].addEventListener("click", seleccionRespuesta);
  }

  comprobar.addEventListener(
    "click",
    (comprobarRespuesta = () => {
      if (respuesta == 1) {
        Swal.fire({text:'¡Buen Trabajo!',
        icon:'success'
        }).then(() => {localStorage.setItem("opcionesHTML-Correcta", 1); 
        window.location.reload()})
        comprobar.classList.toggle("verdeCorrecto");
      } else {
        Swal.fire({text:'Incorrecto',
        icon:'error'
        }).then(() => {localStorage.setItem("opcionesHTML-Incorrecta", 1);
        window.location.reload()})
        comprobar.classList.toggle("rojo");
      }
    })
  );

} else if (randomIndex === 1) {
  // Organizar codigo
  const { pregunta, elemento5, elemento4, elemento3, elemento2, elemento1 } =
    preguntasHTML[randomIndex][randomQuestion];

  let pintarDom = `
    <header id="pregunta1">${pregunta}</header>
    <div class="organizarElementos">
        <hr>
    </div>
    <div id="inicial">
        <input class="desplazarCodigo" id="0" type="button" value="${elemento5}">
        <input class="desplazarCodigo" id="1" type="button" value="${elemento4}">
        <input class="desplazarCodigo" id="2" type="button" value="${elemento3}">
        <input class="desplazarCodigo" id="3" type="button" value="${elemento2}">
        <input class="desplazarCodigo" id="4" type="button" value="${elemento1}">
    </div>
    <div id="contenedorBoton">
    <button>COMPROBAR</button>
    </div>
    `;
  document.body.innerHTML = pintarDom;

  let comprobar = document.querySelector("button");
  let seleccion = document.getElementsByClassName("desplazarCodigo");
  let arregloRpta = new Array();
  let acumArray = new Array();
  let arreglo2 = new Array();

  for (var i = 0; i < seleccion.length; i++) {
    seleccion[i].addEventListener("click", desplazar = (e) =>{
      const valor = e.target;
       acumArray = arregloRpta.push(valor.id);
       arregloRpta[i] += acumArray;

       arreglo2 = arregloRpta.filter(element => element != null && !Number.isNaN(element));
       //console.log(arreglo2);

      for (let i = 0; i < 4; i++) {
        document.querySelector(".organizarElementos").append(valor);   
      }
    });
  }

  comprobar.addEventListener("click", comprobarRespuesta = () =>{    
    const arregloPrueba = ["4", "3", "2", "1", "0"];
    if (arreglo2.length==arregloPrueba.length && arreglo2.every((v,i) => v === arregloPrueba[i])) {
      Swal.fire({text:'¡Buen Trabajo!',
        icon:'success'
        }).then(() => {localStorage.setItem("organizarHTML-Correcta", 1);
          window.location.reload()})
      comprobar.classList.toggle("verdeCorrecto");      
    } else {
      Swal.fire({text:'Incorrecto',
        icon:'error'
        }).then(() => {localStorage.setItem("organizarHTML-Incorrecta", 1);
          window.location.reload()})
      comprobar.classList.toggle("rojo");
    }
  });
} else if (randomIndex === 2) {
  // Seleccion imagen
  const { pregunta, imagen1, imagen2, correcta, imagen4 } =
    preguntasHTML[randomIndex][randomQuestion];

  let pintarDom = `
    <header>${pregunta}</header>
    <div id="padreImagen">
    <div class="item">
    <img class="seleccionImagen" id="1" src="${imagen4}" alt="imagen 4">
    </div>
    <div class="item">
    <img class="seleccionImagen" id="2" src="${correcta}" alt="imagen 3">
    </div>
    <div class="item">
    <img class="seleccionImagen" id="3" src="${imagen2}" alt="imagen 2">
    </div>
    <div class="item">
    <img class="seleccionImagen" id="4" src="${imagen1}" alt="imagen 1"> 
    </div>
    </div>
    <button>COMPROBAR</button>
    `;
  document.body.innerHTML = pintarDom;

  let seleccion = document.getElementsByClassName("seleccionImagen");
  let comprobar = document.querySelector("button");
  let respuesta = "";
  seleccionRespuesta = (e) => {
    const valor = e.target.id;
    document.getElementById(valor).classList.toggle("verde");
    respuesta = valor;
  };
  for (var i = 0; i < seleccion.length; i++) {
    seleccion[i].addEventListener("click", seleccionRespuesta);
  }

  comprobar.addEventListener(
    "click",
    (comprobarRespuesta = () => {
      if (respuesta == 2) {
        Swal.fire({text:'¡Buen Trabajo!',
        icon:'success'
        }).then(() => {localStorage.setItem("imagenHTML-Correcta", 1); 
        window.location.reload()})
        comprobar.classList.toggle("verdeCorrecto");        
      } else {
        Swal.fire({text:'Incorrecto',
        icon:'error'
        }).then(() => {localStorage.setItem("imagenHTML-Incorrecta", 1);
          window.location.reload()});
        comprobar.classList.toggle("rojo");
      }
    })
  );
}

//alert("Ha culminado el proceso. Debe empezar desde en cero en cualquiera de las categorías!.");

