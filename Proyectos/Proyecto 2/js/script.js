window.onload = function (){
        const api = "https://ghibliapi.herokuapp.com/films";
        const HTMLResponse = document.querySelector("#contenedor");
        
        fetch(api)
            .then(response => response.json())
            .then( films =>{
                films.forEach(film => {
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
                    div3.appendChild(image)
                    div2.appendChild(div3)
                    let div4 = document.createElement("div")
                    div4.className += "card-body"
                    let h5 = document.createElement("h5")
                    h5.innerText = film.title
                    h5.className += "card-title"
                    let p = document.createElement("p")
                    p.innerText = film.description
                    p.className += "card-text"
                    div4.appendChild(h5)
                    div4.appendChild(p)
                    div2.appendChild(div4)
                    div1.appendChild(div2)
                    HTMLResponse.appendChild(div1)                    
                });  
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
