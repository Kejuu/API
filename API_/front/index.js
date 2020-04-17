
function save(){

let nombre = document.getElementById("nombre").value;
let descripcion = document.getElementById("descripcion").value;
let url = document.getElementById("url").value;
let bookmark = { 
    url: url,
    nombre: nombre,
    descripcion: descripcion
};

let url1 = "http://localhost:3000/bookmarks"
axios.post(url1, bookmark).then((response) => {
    // handle success
    console.log(response);
  }).catch((error) => {
    // handle error
    console.log(error);
  });
}
