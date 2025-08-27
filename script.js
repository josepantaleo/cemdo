// ===== Variables y configuración inicial =====
let indiceActual = 0;
let puntajeTotal = 0;
let idiomaActual = "es";

const elementoPregunta = document.getElementById("pregunta");
const elementoOpciones = document.getElementById("respuestas");
const elementoFeedback = document.getElementById("feedback");
const elementoPuntaje = document.getElementById("puntaje");
const botonReiniciar = document.getElementById("reiniciarTrivia");
const toggleTema = document.getElementById("toggleTema");
const botonIdioma = document.getElementById("cambiarIdioma");

// ===== Textos bilingües para toda la página =====
const textos = {
    es: {
        titulo: "Usina Solar Fotovoltaica CEMDO I",
        descripcion: "Energía limpia para Villa Dolores y la región",
        nav: ["Información","Galería","Ubicación","Impacto","Equipo","Trivia","Contacto"],
        info: "Sobre la Usina Solar",
        infoText: "El “Parque Solar Papa Francisco”, sede de la futura Usina Solar Fotovoltaica CEMDO I, honra el legado del Papa Francisco, impulsando la economía solidaria y el cuidado de nuestra Casa Común.",
        infoLista: ["Capacidad instalada: 10 MW ac","20880 Paneles solares bifaciales de 615 W de alta eficiencia","Producción 16% de energía y beneficios ambientales y económicos"],
        infoLink: "Más información en Cooperativa CEMDO",
        infoLinkHref: "https://www.cemdo.com.ar",
        videoTitulo: "Parque Solar Cooperativo",
        videoCaption: "Beneficios del Parque Solar Fotovoltaica CEMDO I",
        galeriaTitulo: "Galería",
        ubicacionTitulo: "Ubicación Geográfica",
        ubicacionTexto: "La Usina Solar CEMDO I se encuentra en Villa Dolores, Córdoba, Argentina.",
        impactoTitulo: "Impacto Ambiental y Social",
        impactoLista: ["Reducción de emisiones de CO₂ en la región","Fomento de energías renovables y educación ambiental","Generación de empleo local y desarrollo comunitario","Ahorro económico para los usuarios de la cooperativa"],
        equipoTitulo: "Equipo de Desarrollo",
        equipoMiembros: [
            { nombre: "Parsons Tiziano - Frontend", img: "parsons.jpg" },
            { nombre: "Ugolini Gianlucas - Backend", img: "ugolini.jpg" },
            { nombre: "Lucero Valentín - Diseño gráfico", img: "lucero.jpg" },
            { nombre: "Orozco Jeremías - Contenido y QA", img: "orozco.jpg" }
        ],
        triviaTitulo: "Trivia sobre Energía Solar",
        reiniciarTrivia: "Reiniciar Trivia",
        puntaje: "Tu puntaje: ",
        preguntasTrivia: [
            { pregunta: "¿Qué tipo de energía produce la Usina CEMDO I?", opciones: ["Energía solar","Energía eólica","Energía hidráulica"], correcta: 0 },
            { pregunta: "¿Dónde se encuentra la Usina Solar CEMDO I?", opciones: ["Villa Dolores","Córdoba Capital","Mendoza"], correcta: 0 },
            { pregunta: "¿Cuál es uno de los beneficios ambientales?", opciones: ["Reducción de CO₂","Mayor contaminación","Uso de carbón"], correcta: 0 }
        ],
        footerTexto1: 'Desarrollado por IPEM 146 "Centenario" | Cooperativa CEMDO',
        footerTexto2: "Parsons Tiziano - Ugolini Gianlucas - Lucero Valentín - Orozco Jeremías",
        footerRedes: [{nombre:"Facebook", href:"https://www.facebook.com/cemdo"},{nombre:"Instagram", href:"https://www.instagram.com/cemdo"},{nombre:"X", href:"https://www.x.com/cemdo"}]
    },
    en: {
        titulo: "CEMDO I Solar Photovoltaic Plant",
        descripcion: "Clean energy for Villa Dolores and the region",
        nav: ["Information","Gallery","Location","Impact","Team","Quiz","Contact"],
        info: "About the Solar Plant",
        infoText: "The “Pope Francis Solar Park”, home of the future CEMDO I Solar Photovoltaic Plant, honors the legacy of Pope Francis, promoting solidarity economy and care for our Common Home.",
        infoLista: ["Installed capacity: 10 MW ac","20880 Bifacial solar panels of 615 W high efficiency","16% energy production and environmental and economic benefits"],
        infoLink: "More information at Cooperativa CEMDO",
        infoLinkHref: "https://www.cemdo.com.ar",
        videoTitulo: "Cooperative Solar Park",
        videoCaption: "Benefits of CEMDO I Solar Photovoltaic Plant",
        galeriaTitulo: "Gallery",
        ubicacionTitulo: "Geographical Location",
        ubicacionTexto: "The CEMDO I Solar Plant is located in Villa Dolores, Córdoba, Argentina.",
        impactoTitulo: "Environmental and Social Impact",
        impactoLista: ["Reduction of CO₂ emissions in the region","Promotion of renewable energies and environmental education","Generation of local employment and community development","Economic savings for cooperative users"],
        equipoTitulo: "Development Team",
        equipoMiembros: [
            { nombre: "Parsons Tiziano - Frontend", img: "parsons.jpg" },
            { nombre: "Ugolini Gianlucas - Backend", img: "ugolini.jpg" },
            { nombre: "Lucero Valentín - Graphic Design", img: "lucero.jpg" },
            { nombre: "Orozco Jeremías - Content and QA", img: "orozco.jpg" }
        ],
        triviaTitulo: "Solar Energy Quiz",
        reiniciarTrivia: "Restart Quiz",
        puntaje: "Your score: ",
        preguntasTrivia: [
            { pregunta: "What type of energy does the CEMDO I Plant produce?", opciones: ["Solar energy","Wind energy","Hydraulic energy"], correcta: 0 },
            { pregunta: "Where is the CEMDO I Solar Plant located?", opciones: ["Villa Dolores","Córdoba Capital","Mendoza"], correcta: 0 },
            { pregunta: "What is one of the environmental benefits?", opciones: ["CO₂ reduction","Higher pollution","Use of coal"], correcta: 0 }
        ],
        footerTexto1: 'Developed by IPEM 146 "Centenario" | Cooperativa CEMDO',
        footerTexto2: "Parsons Tiziano - Ugolini Gianlucas - Lucero Valentín - Orozco Jeremías",
        footerRedes: [{nombre:"Facebook", href:"https://www.facebook.com/cemdo"},{nombre:"Instagram", href:"https://www.instagram.com/cemdo"},{nombre:"X", href:"https://www.x.com/cemdo"}]
    }
};

// ===== Función para mostrar pregunta =====
function mostrarPregunta() {
    const pregunta = textos[idiomaActual].preguntasTrivia[indiceActual];
    elementoPregunta.textContent = pregunta.pregunta;
    elementoOpciones.innerHTML = "";
    elementoFeedback.textContent = "";

    pregunta.opciones.forEach((opcion, i) => {
        const boton = document.createElement("button");
        boton.textContent = opcion;
        boton.className = "respuesta-btn";
        boton.addEventListener("click", () => verificarRespuesta(i));
        elementoOpciones.appendChild(boton);
    });
}

// ===== Función verificar respuesta =====
function verificarRespuesta(indice) {
    const correcta = textos[idiomaActual].preguntasTrivia[indiceActual].correcta;
    if (indice === correcta) {
        elementoFeedback.textContent = idiomaActual === "es" ? "¡Correcto!" : "Correct!";
        elementoFeedback.style.color = "green";
        puntajeTotal++;
    } else {
        elementoFeedback.textContent = idiomaActual === "es" ? "Incorrecto." : "Incorrect.";
        elementoFeedback.style.color = "red";
    }

    indiceActual++;
    if (indiceActual < textos[idiomaActual].preguntasTrivia.length) {
        setTimeout(mostrarPregunta, 1000);
    } else {
        setTimeout(() => {
            elementoPregunta.textContent = idiomaActual === "es" ? "Trivia finalizada." : "Quiz finished.";
            elementoOpciones.innerHTML = "";
            elementoFeedback.textContent = "";
            elementoPuntaje.textContent = `${textos[idiomaActual].puntaje}${puntajeTotal} de ${textos[idiomaActual].preguntasTrivia.length}`;
        }, 1000);
    }
}

// ===== Reiniciar trivia =====
botonReiniciar.addEventListener("click", () => {
    indiceActual = 0;
    puntajeTotal = 0;
    elementoPuntaje.textContent = "";
    mostrarPregunta();
});

// ===== Función actualizar toda la página al idioma seleccionado =====
function actualizarIdioma() {
    const t = textos[idiomaActual];

    document.querySelector("header h1").textContent = t.titulo;
    document.querySelector("header p").textContent = t.descripcion;

    const nav = document.querySelectorAll("nav a");
    nav.forEach((a, i) => a.textContent = t.nav[i]);

    document.querySelector("#info h2").textContent = t.info;
    document.querySelector("#info p").textContent = t.infoText;
    const listaInfo = document.querySelector("#info ul");
    listaInfo.innerHTML = "";
    t.infoLista.forEach(item => { const li=document.createElement("li"); li.textContent=item; listaInfo.appendChild(li); });
    document.querySelector("#info a").textContent = t.infoLink;
    document.querySelector("#info a").href = t.infoLinkHref;

    document.querySelector("#video-beneficios h2").textContent = t.videoTitulo;
    document.querySelector(".video-caption").textContent = t.videoCaption;

    document.querySelector("#galeria h2").textContent = t.galeriaTitulo;

    document.querySelector("#ubicacion h2").textContent = t.ubicacionTitulo;
    document.querySelector("#ubicacion p").textContent = t.ubicacionTexto;

    document.querySelector("#impacto h2").textContent = t.impactoTitulo;
    const listaImpacto = document.querySelector("#impacto ul");
    listaImpacto.innerHTML = "";
    t.impactoLista.forEach(item => { const li=document.createElement("li"); li.textContent=item; listaImpacto.appendChild(li); });

    document.querySelector("#equipo h2").textContent = t.equipoTitulo;
    const divEquipo = document.querySelector(".equipo-miembros");
    divEquipo.innerHTML = "";
    t.equipoMiembros.forEach(m => {
        const div = document.createElement("div");
        div.className = "miembro";
        div.innerHTML = `<img src="${m.img}" alt="${m.nombre}"><p>${m.nombre}</p>`;
        divEquipo.appendChild(div);
    });

    document.querySelector("#trivia h2").textContent = t.triviaTitulo;
    botonReiniciar.textContent = t.reiniciarTrivia;

    document.querySelector("footer p:first-child").textContent = t.footerTexto1;
    document.querySelector("footer p:nth-child(2)").textContent = t.footerTexto2;
    const divRedes = document.querySelector(".redes");
    divRedes.innerHTML = "";
    t.footerRedes.forEach(r => {
        const a = document.createElement("a");
        a.href = r.href;
        a.target = "_blank";
        a.textContent = r.nombre;
        divRedes.appendChild(a);
    });

    indiceActual = 0;
    puntajeTotal = 0;
    mostrarPregunta();
}

// ===== Botón cambiar idioma =====
botonIdioma.addEventListener("click", () => {
    idiomaActual = idiomaActual === "es" ? "en" : "es";
    botonIdioma.textContent = idiomaActual === "es" ? "English" : "Español";
    actualizarIdioma();
});

// ===== Modo claro/oscuro =====
toggleTema.textContent = "Modo Claro";
toggleTema.addEventListener("click", () => {
    if (document.body.classList.contains("tema-oscuro")) {
        document.body.classList.replace("tema-oscuro","tema-claro");
        toggleTema.textContent = "Modo Oscuro";
    } else {
        document.body.classList.replace("tema-claro","tema-oscuro");
        toggleTema.textContent = "Modo Claro";
    }
});

// ===== Zoom de página =====
document.body.style.zoom = "150%";

// ===== Inicializar trivia =====
mostrarPregunta();

// ===== Inicializar mapa Leaflet =====
const mapa = L.map('mapa').setView([-31.9456,-65.1697],13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; OpenStreetMap contributors'}).addTo(mapa);
const marcador = L.marker([-31.9456,-65.1697]).addTo(mapa);
marcador.bindPopup("<b>Usina Solar CEMDO I</b><br>Villa Dolores, Córdoba").openPopup();
