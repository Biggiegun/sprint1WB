// Code Here

let preguntasJS = [
    [
      {
        pregunta:
        "¿Cuál de estos operadores se utiliza para concatenar cadenas de caracteres?",
        correcta: "+",
        opcion2: "%",
        opcion3: "$",
      },
      {
        pregunta:
          "¿Cuando declaras variables en Javascript se utiliza la siguiente palabra reservada:?",
        correcta: "var",
        opcion2: "public",
        opcion3: "store",
      },
    ],
    [
      {
        pregunta: "Ordena de acuerdo con la declaración correcta de un ciclo for:",
        elemento1: "for",
        elemento2: "[expresion-inicial]",
        elemento3: "[condicion]",
        elemento4: "[expresion-final]",
        elemento5: "sentencia",
      },
      {
        pregunta: "Ordena de acuerdo con la declaración correcta del método forEach:",
        elemento1: "arr.forEach",
        elemento2: "function callback",
        elemento3: "currentValue",
        elemento4: "index",
        elemento5: "//tu iterador",
      },
    ],
    [
      {
        pregunta: "React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario",
        imagen1: "../images/Photoshop.svg",
        imagen2: "../images/netframework.svg",
        correcta: "../images/ReactJS.png",
        imagen4: "../images/netbeans.png",
      },
      {
        pregunta: "especificación de lenguaje de programación publicada por ECMA International.",
        imagen1: "../images/Java.png",
        imagen2: "../images/Atom.png",
        correcta: "../images/ES6.png",
        imagen4: "../images/Ilustrator.png",
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
  preguntasJS[randomIndex][randomQuestion];

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
        }).then(() => {localStorage.setItem("opcionesJS-Correcta", 1); 
        window.location.reload()})
        comprobar.classList.toggle("verdeCorrecto");
      } else {
        Swal.fire({text:'Incorrecto',
        icon:'error'
        }).then(() => {localStorage.setItem("opcionesJS-Incorrecta", 1);
        window.location.reload()})
        comprobar.classList.toggle("rojo");
      }
    })
  );

} else if (randomIndex === 1) {
  // Organizar codigo
  const { pregunta, elemento5, elemento4, elemento3, elemento2, elemento1 } =
  preguntasJS[randomIndex][randomQuestion];

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
        }).then(() => {localStorage.setItem("organizarJS-Correcta", 1);
          window.location.reload()})
      comprobar.classList.toggle("verdeCorrecto");      
    } else {
      Swal.fire({text:'Incorrecto',
        icon:'error'
        }).then(() => {localStorage.setItem("organizarJS-Incorrecta", 1);
          window.location.reload()})
      comprobar.classList.toggle("rojo");
    }
  });
} else if (randomIndex === 2) {
  // Seleccion imagen
  const { pregunta, imagen1, imagen2, correcta, imagen4 } =
  preguntasJS[randomIndex][randomQuestion];

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
        }).then(() => {localStorage.setItem("imagenJS-Correcta", 1); 
        window.location.reload()})
        comprobar.classList.toggle("verdeCorrecto");        
      } else {
        Swal.fire({text:'Incorrecto',
        icon:'error'
        }).then(() => {localStorage.setItem("imagenJS-Incorrecta", 1);
          window.location.reload()});
        comprobar.classList.toggle("rojo");
      }
    })
  );
}

//alert("Ha culminado el proceso. Debe empezar desde en cero en cualquiera de las categorías!.");
