// Code Here

let preguntasCSS = [
    [
      {
        pregunta:
          "Con qué etiqueta puedes aplicar estilos CSS a una página web?",
        correcta: "Link",
        opcion2: "script",
        opcion3: "meta",
      },
      {
        pregunta:
          "¿Cuál de las siguientes no es una unidad de dimensionamiento en CSS?",
        correcta: "mt",
        opcion2: "px",
        opcion3: "em",
      },
    ],
    [
      {
        pregunta: "Ordena de menor a mayor segun 'Bootstrap':",
        elemento1: "sm",
        elemento2: "md",
        elemento3: "lg",
        elemento4: "xl",
        elemento5: "xxl",
      },
      {
        pregunta: "Ordena por superposición en pantalla: ",
        elemento1: "z-index: 1",
        elemento2: "z-index: 2",
        elemento3: "z-index: 3",
        elemento4: "z-index: 4",
        elemento5: "z-index: 5",
      },
    ],
    [
      {
        pregunta: "Cuál de los siguientes es un framework de CSS?",
        imagen1: "../images/ReactJS.png",
        imagen2: "../images/VB.svg",
        correcta: "../images/Foundation.png",
        imagen4: "../images/CSharp.png",
      },
      {
        pregunta: "Propiedad place-content: 'flex-start'",
        imagen1: "../images/Center.png",
        imagen2: "../images/Flex-end.png",
        correcta: "../images/Flex-start.png",
        imagen4: "../images/Stretch.png",
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
  preguntasCSS[randomIndex][randomQuestion];

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
        }).then(() => {localStorage.setItem("opcionesCSS-Correcta", 1); 
        window.location.reload()})
        comprobar.classList.toggle("verdeCorrecto");
      } else {
        Swal.fire({text:'Incorrecto',
        icon:'error'
        }).then(() => {localStorage.setItem("opcionesCSS-Incorrecta", 1);
        window.location.reload()})
        comprobar.classList.toggle("rojo");
      }
    })
  );

} else if (randomIndex === 1) {
  // Organizar codigo
  const { pregunta, elemento5, elemento4, elemento3, elemento2, elemento1 } =
  preguntasCSS[randomIndex][randomQuestion];

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
        }).then(() => {localStorage.setItem("organizarCSS-Correcta", 1);
          window.location.reload()})
      comprobar.classList.toggle("verdeCorrecto");      
    } else {
      Swal.fire({text:'Incorrecto',
        icon:'error'
        }).then(() => {localStorage.setItem("organizarCSS-Incorrecta", 1);
          window.location.reload()})
      comprobar.classList.toggle("rojo");
    }
  });
} else if (randomIndex === 2) {
  // Seleccion imagen
  const { pregunta, imagen1, imagen2, correcta, imagen4 } =
  preguntasCSS[randomIndex][randomQuestion];

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
        }).then(() => {localStorage.setItem("imagenCSS-Correcta", 1); 
        window.location.reload()})
        comprobar.classList.toggle("verdeCorrecto");        
      } else {
        Swal.fire({text:'Incorrecto',
        icon:'error'
        }).then(() => {localStorage.setItem("imagenCSS-Incorrecta", 1);
          window.location.reload()});
        comprobar.classList.toggle("rojo");
      }
    })
  );
}

//alert("Ha culminado el proceso. Debe empezar desde en cero en cualquiera de las categorías!.");