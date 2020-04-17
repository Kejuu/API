function listarbookmarks() {

    let url2 = "http://localhost:3000/bookmarks";
    axios.get(url2).then((response) => {
        let paginas = response.data.info;
        let data = "";
        let data1 = "";
        for (let i = 0; i < paginas.length; i++) {
          let data = paginas[i];
          
            data1 += "<tr>"
            data1 += `<td>${data.id}</td>`
            data1 += `<td>${data.url}</td>`
            data1 += `<td>${data.nombre}</td>`
            data1 += `<td>${data.descripcion}</td>`
            data1 += "<tr>"
            console.log(data1);
            document.getElementById("lista_bookmarks").innerHTML = data1;
        }
        
      })
      .catch((error) => {
        console.log(error);
      });
  }

  listarbookmarks();
