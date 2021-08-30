// code here

const getData = async (url) => {
  
    const resp = await fetch(url);
    const data = await resp.json();
    data.forEach((usuario) => {
      const { nombre, correo} = usuario; // Object Destructuring =)
      document.querySelector("#nombreUsuario").innerHTML = nombre;
      document.querySelector("#correoUsuario").innerHTML = correo;
    });
  };

  window.addEventListener("DOMContentLoaded", () => {
    getData("http://localhost:4000/usuario")  
});

document.querySelector("a").addEventListener("click", ()=> localStorage.clear());



