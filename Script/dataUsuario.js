//Code here!!
let usuario = document.querySelector("#confirmarDatosUsuario");

const getData = async (url) => {
  
    const resp = await fetch(url);
    const data = await resp.json();
    data.forEach((usuario) => {
      const { nombre, correo, id } = usuario;
      document.querySelector("#nombreUsuario").value = nombre;
      document.querySelector("#correoUsuario").value = correo;
      document.querySelector("#id").value = id;
    });
  };


////////////////////////////////////////////////////////////

window.addEventListener("DOMContentLoaded", () => {
    getData("http://localhost:4000/usuario")  
});


usuario.addEventListener("click",  async() =>{
        let nombreMod = document.querySelector("#nombreUsuario").value
        let correoMod = document.querySelector("#correoUsuario").value
        let idModificar = document.querySelector("#id").value;
        let resp = await fetch(`http://localhost:4000/usuario/${idModificar}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: idModificar,
                nombre: nombreMod,
                correo: correoMod
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        })
        location.href = "categorias.html";  
    }
);
