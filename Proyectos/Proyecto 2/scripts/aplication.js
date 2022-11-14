window.onload = function (){
    document.getElementById('cargar').addEventListener('click', () => {
        let id = document.getElementById("id_anime").value
        const api = "https://ghibliapi.herokuapp.com/films";
        const HTMLResponse = document.querySelector("#respuesta");
        
        fetch(api)
            .then(response => response.json())
            .then( films =>{
                    
                let film = films[id]
                    
                let ul = "<li>"
                        +"<img width='500' src="+film.image+ " alt="+film.original_title+">"
                        +'<div class="card text-bg-primary mb-3" id="contenedor_principal">'
                        +'<div class="card-header">'
                            +"<h1>"+film.title+"</h1>"
                        +'</div>'
                        +'<div class="card-body">'
                            +"<p class='card-text'>"+film.description+ "</p>"
                            +"</div>"
                        +"</div>"
                        +"</li>"
                
                HTMLResponse.innerHTML = "<ul>"+ul+"</ul>";    
        });
    })
}



