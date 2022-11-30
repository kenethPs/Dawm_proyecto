window.onload = function (){
        const api = "https://ghibliapi.herokuapp.com/films";
        const HTMLResponse = document.querySelector("#contenedor");
        const listado = document.querySelector("#anios");
        fetch(api)
            .then(response => response.json())
            .then( films =>{
                films.forEach(film => {
                    //creacion de las cartas
                    let div1 = document.createElement("div")
                    div1.className += "col-lg-4 col-md-6 mb-4"
                    div1.className += " peliculas"
                    let div2 = document.createElement("div")
                    div2.className += "card"
                    let div3 = document.createElement("div")
                    div3.className += "bg-image hover-overlay ripple"
                    div3.setAttribute("data-mdb-ripple-color","light")
                    let image = document.createElement("img")
                    image.setAttribute("src",film.movie_banner)
                    image.className += "img-fluid"
                    image.className += " slideExpandUp"
                    div3.appendChild(image)
                    div2.appendChild(div3)
                    let div4 = document.createElement("div")
                    div4.className += "card-body"
                    let h5 = document.createElement("h5")
                    h5.innerText = film.title
                    h5.className += "card-title"
                    h5.className += " slideExpandUp"
                    let p = document.createElement("p")
                    p.innerText = film.description
                    p.className += "card-text"
                    p.className += " slideExpandUp"
                    div4.appendChild(h5)
                    div4.appendChild(p)
                    div2.appendChild(div4)
                    div1.appendChild(div2)
                    HTMLResponse.appendChild(div1)
                    //lista de opciones
                    let anio = document.createElement("option")
                    anio.setAttribute("value",film.release_date)
                    anio.innerText = film.release_date
                    listado.appendChild(anio)
                }); 
                
                let arr = films
                console.log(arr);
                let peliculasNombre = arr.map(fil => fil.title)
                
                let peliculasPuntos = arr.map(fil => fil.rt_score) 
                const data = {
                    labels: peliculasNombre,
                    datasets: [{
                      label: "Popularidad",
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 99, 132)'
                      ],
                      borderWidth: 1,
                      data: peliculasPuntos,
                    }]
                };
                const config = {
                    type: 'bar',
                    data,
                    options: {
                      indexAxis: 'y',
                      scales: {
                        y: {
                          ticks: {
                            crossAlign: 'far',
                          }
                        }
                      }
                    }
                };
                
                let chart1 = new Chart(
                    document.getElementById("mychart1"),
                    config
                );
        });
}
document.addEventListener("keyup", e=>{
    if (e.target.matches("#buscador")){
        let peliculas = document.querySelectorAll(".peliculas")
        peliculas.forEach(pelicula=>{
            pelicula.firstElementChild.querySelector("h5").textContent.toLowerCase().includes(e.target.value)
            ? pelicula.classList.remove("filtro")
            : pelicula.classList.add("filtro")
        })
    }
})
