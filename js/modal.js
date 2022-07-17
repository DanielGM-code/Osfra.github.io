modalTecnologia = document.getElementById("btnModalTecnologia");
modalConstruccion = document.getElementById("btnModalConstruccion");
modalSalud = document.getElementById("btnModalSalud");
modalOtros = document.getElementById("btnModalOtros");
titulo = document.getElementById("titulo-modal");
lista = document.getElementById("lista-modal");
const li = document.createElement("li");

// Lista de los servicios ofrecidos de tecnología
let listaTecnologia = [
    'Comercio al por mayor de equipo y accesorios de cómputo.',
    'Servicios de consultoría en computación.',
    'Comercio al por mayor de equipo y material eléctrico.',
    'Comercio al por mayor de equipo de telecomunicaciones, fotografía y cinematografía.'
]

// Lista de los servicios ofrecidos de construcción
let listaConnstruccion = [
    'Administración y supervisión de Construcción de inmuebles comerciales, institucionales y de servicios.',
    'Comercio al por mayor de mobiliario y equipo de oficina.',
    'Comercio al por mayor de maquinaria y equipo para la industria manufacturera.'
]

// Lista de los servicios ofrecidos de salud
let listaSalud = [
    'Comercio de instrumentos y aparatos ópticos de uso oftálmico.',
    'Comercio al por mayor de mobiliario, equipo e instrumental médico y de laboratorio.',
    'Consultorios de optometría.',
    'Comercio al por menor de lentes.'
]

// Lista de los otros servicios ofrecidos
let listaOtros = [
    'Otros servicios profesionales, científicos y técnicos.',
    'Telefonía tradicional.',
    'Comercio al por menor de artículos para la limpieza.',
    'Comercio al por menor en ferreterías y tlapalerías.',
    'Comercio al por menor de llantas y cámaras, corbatas, válvulas de cámara y tapones para automóviles, camionetas y camiones de motor.',
    'Comercio al por menor de partes y refacciones nuevas para automóviles, camionetas y camiones.',
    'Servicios de consultoría en administración.',
    'Servicios de investigación y desarrollo en ciencias físicas, de la vida e ingeniería prestados por el sector privado.',
    'Comercio al por mayor de ropa.'
],
ul = document.getElementById('lista-modal');

// Click en cualquier botón
if(modalTecnologia || modalConstruccion || modalSalud || modalOtros){
    var modal = document.getElementById("ventana-modal");
    var span = document.getElementsByClassName("boton-cerrar")[0];
    var body = document.getElementsByTagName("body")[0];

    modalTecnologia.onclick = function() {
        cargarEstilosModal();

        titulo.innerHTML= "Servicios de Tecnología:";

        // Recorre cada elemento de la lista y crea li de html dinámicamente
        listaTecnologia.forEach(item => {
            let li = document.createElement('li');
            ul.appendChild(li);
        
            li.innerHTML += item;
        });
    }

    modalConstruccion.onclick = function() {
        cargarEstilosModal();

        titulo.innerHTML= "Servicios de Construcción:";

        // Recorre cada elemento de la lista y crea li de html dinámicamente
        listaConnstruccion.forEach(item => {
            let li = document.createElement('li');
            ul.appendChild(li);
        
            li.innerHTML += item;
        });
    }

    modalSalud.onclick = function() {
        cargarEstilosModal();

        titulo.innerHTML= "Servicios de Salud:";

        // Recorre cada elemento de la lista y crea li de html dinámicamente
        listaSalud.forEach(item => {
            let li = document.createElement('li');
            ul.appendChild(li);
        
            li.innerHTML += item;
        });
    }

    modalOtros.onclick = function() {
        cargarEstilosModal();

        titulo.innerHTML= "Otros servicios:";

        // Recorre cada elemento de la lista y crea li de html dinámicamente
        listaOtros.forEach(item => {
            let li = document.createElement('li');
            ul.appendChild(li);
        
            li.innerHTML += item;
        });
    }

    cargarEstilosModal = function(){
        modal.style.display = "block";
        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";
        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";

        ul.innerHTML = "";

    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.position = "inherit";
            body.style.height = "auto";
            body.style.overflow = "visible";

            ul.innerHTML = "";
        }
    }
}