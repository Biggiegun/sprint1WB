//Code here

let opcionHTMLCorrecta = JSON.parse(localStorage.getItem("opcionesHTML-Correcta"));
let opcionHTMLIncorrecta = JSON.parse(localStorage.getItem("opcionesHTML-Incorrecta"));
let ordenarHTMLCorrecta = JSON.parse(localStorage.getItem("organizarHTML-Correcta"));
let ordenarHTMLIncorrecta = JSON.parse(localStorage.getItem("organizarHTML-Incorrecta"));
let imagenHTMLCorrecta = JSON.parse(localStorage.getItem("imagenHTML-Correcta"));
let imagenHTMLIncorrecta = JSON.parse(localStorage.getItem("imagenHTML-Incorrecta"));

let opcionCSSCorrecta = JSON.parse(localStorage.getItem("opcionesCSS-Correcta"));
let opcionCSSIncorrecta = JSON.parse(localStorage.getItem("opcionesCSS-Incorrecta"));
let ordenarCSSCorrecta = JSON.parse(localStorage.getItem("organizarCSS-Correcta"));
let ordenarCSSIncorrecta = JSON.parse(localStorage.getItem("organizarCSS-Incorrecta"));
let imagenCSSCorrecta = JSON.parse(localStorage.getItem("imagenCSS-Correcta"));
let imagenCSSIncorrecta = JSON.parse(localStorage.getItem("imagenCSS-Incorrecta"));

let opcionJSCorrecta = JSON.parse(localStorage.getItem("opcionesJS-Correcta"));
let opcionJSIncorrecta = JSON.parse(localStorage.getItem("opcionesJS-Incorrecta"));
let ordenarJSCorrecta = JSON.parse(localStorage.getItem("organizarJS-Correcta"));
let ordenarJSIncorrecta = JSON.parse(localStorage.getItem("organizarJS-Incorrecta"));
let imagenJSCorrecta = JSON.parse(localStorage.getItem("imagenJS-Correcta"));
let imagenJSIncorrecta = JSON.parse(localStorage.getItem("imagenJS-Incorrecta"));

let correctas = opcionHTMLCorrecta + ordenarHTMLCorrecta + imagenHTMLCorrecta + opcionCSSCorrecta + ordenarCSSCorrecta + imagenCSSCorrecta
opcionJSCorrecta + ordenarJSCorrecta + imagenJSCorrecta;

let incorrectas = opcionHTMLIncorrecta + ordenarHTMLIncorrecta + imagenHTMLIncorrecta + opcionCSSIncorrecta + ordenarCSSIncorrecta + imagenCSSIncorrecta
opcionJSIncorrecta + ordenarJSIncorrecta + imagenJSIncorrecta;

let total = opcionHTMLCorrecta + opcionHTMLIncorrecta + ordenarHTMLCorrecta + ordenarHTMLIncorrecta + imagenHTMLCorrecta
+ imagenHTMLIncorrecta + opcionCSSCorrecta + opcionCSSIncorrecta + ordenarCSSCorrecta + ordenarCSSIncorrecta + imagenCSSCorrecta
+ imagenCSSIncorrecta + opcionJSCorrecta + opcionJSIncorrecta + ordenarJSCorrecta + ordenarJSIncorrecta + imagenJSCorrecta
+ imagenJSIncorrecta;

let totalPreguntas = document.querySelector("#total");
let preguntasCorrectas = document.querySelector("#correctas");
let preguntasIncorrectas = document.querySelector("#incorrectas");

totalPreguntas.innerHTML = total;
preguntasCorrectas.innerHTML = correctas;
preguntasIncorrectas.innerHTML = incorrectas;