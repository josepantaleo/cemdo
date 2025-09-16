document.addEventListener("DOMContentLoaded", () => {
	let indicePreguntaActual = 0;
	let puntajeTotal = 0;
	let idiomaActual = "es";

	const elementoPregunta = document.getElementById("pregunta");
	const elementoOpciones = document.getElementById("respuestas");
	const elementoFeedback = document.getElementById("feedback");
	const elementoPuntaje = document.getElementById("puntaje");
	const botonReiniciarTrivia = document.getElementById("reiniciarTrivia");
	const botonCambiarTema = document.getElementById("toggleTema");
	const botonCambiarIdioma = document.getElementById("cambiarIdioma");
	const formularioCalculadora = document.getElementById("formCalculadora");

	const textos = {
		es: {
			mainTitle: "Usina Solar Fotovoltaica CEMDO I",
			subTitle: "Energía limpia para Villa Dolores y la región",
			navInfo: "Información",
			navGallery: "Galería",
			navLocation: "Ubicación",
			navImpact: "Impacto",
			navTeam: "Equipo",
			navInteractivity: "Interactividad",
			navContact: "Contacto",
			lightMode: "Modo Claro",
			darkMode: "Modo Oscuro",
			switchLanguage: "English",
			aboutPlant: "Sobre la Usina Solar",
			aboutPlantParagraph1: "El “Parque Solar Papa Francisco”, sede de la Usina Solar Fotovoltaica CEMDO I, honra el legado del Papa Francisco, impulsando la economía solidaria y el cuidado de nuestra Casa Común.",
			aboutPlantParagraph2: "Esta usina aporta electricidad limpia y renovable a la comunidad, promoviendo un desarrollo sostenible.",
			solarFeatures1: "Capacidad instalada: 10 MW (AC)",
			solarFeatures2: "Paneles solares: 20.880 bifaciales de 615 W de alta eficiencia",
			solarFeatures3: "Producción: Equivalente al 16% del consumo local con beneficios ambientales y económicos",
			moreInfoLink: "Más información en el sitio web de Cooperativa CEMDO.",
			whatIsSolar: "¿Qué es la Energía Solar?",
			whatIsSolarParagraph1: "La energía solar es una fuente de energía renovable que se obtiene directamente del sol, utilizando la radiación solar para generar electricidad o calor. Es una alternativa limpia y sostenible a los combustibles fósiles, ya que no produce emisiones contaminantes ni gases de efecto invernadero durante su uso.",
			whatIsSolarParagraph2: "Existen dos formas principales de aprovechar la energía solar:",
			whatIsSolarParagraph3: "La energía solar es una de las fuentes renovables con mayor crecimiento a nivel mundial debido a sus múltiples beneficios, entre ellos:",
			whatIsSolarBullet1: "Energía solar fotovoltaica: convierte la luz solar en electricidad mediante paneles solares compuestos por células fotovoltaicas.",
			whatIsSolarBullet2: "Sostenibilidad: es inagotable y reduce la dependencia de recursos no renovables.",
			whatIsSolarBullet3: "Reducción de costos: con la tecnología adecuada, la generación solar puede disminuir considerablemente el costo de la electricidad.",
			whatIsSolarBullet4: "Bajo impacto ambiental: no emite contaminantes ni residuos tóxicos.",
			whatIsSolarBullet5: "Generación distribuida: permite instalar sistemas solares tanto en grandes plantas como en hogares y empresas.",
			whatIsSolarParagraph4: "Gracias a estas ventajas, la energía solar contribuye al desarrollo sostenible y a la mitigación del cambio climático, mejorando la calidad de vida de las comunidades y promoviendo un futuro energético más limpio y seguro.",
			solarPark: "Parque Solar Cooperativo",
			videoCaption: "Beneficios del Parque Solar Fotovoltaico CEMDO I",
			gallery: "Galería",
			location: "Ubicación Geográfica",
			locationParagraph1: "La Usina Solar Fotovoltaica CEMDO I se encuentra en Villa Dolores, Córdoba, en una zona estratégica para aprovechar al máximo la radiación solar de la región.",
			locationParagraph2: "En el siguiente mapa interactivo puedes explorar la ubicación exacta, los accesos y puntos de interés cercanos, y alternar entre vista callejera y satelital.",
			mapCallejero: "Callejero",
			mapSatelital: "Satelital",
			mapPopup: "Usina Solar Fotovoltaica CEMDO I<br>Villa Dolores, Córdoba",
			developmentTeam: "Equipo de Desarrollo IPEM 146 ´Centenario´",
			teamRolProgramacion: "Programación",
			teamRolDiseno: "Diseño gráfico",
			teamRolContenido: "Contenido y Control de Calidad",
			teamRolAsesor: "Docente asesor",
			interactivity: "Calculadora de Ahorro Energético, Trivia y Simulador",
			contact: "Contacto",
			contactAddress: "Dirección: Av. San Martín 255, Villa Dolores, Córdoba",
			contactPhone: "Teléfono: +54 3544 42-2000",
			contactEmail: "Email: info@cemdo.com.ar",
			footerText: "Desarrollado por IPEM 146 \"Centenario\" | Cooperativa CEMDO",
			calculatorTitle: "Calculadora de Ahorro Energético",
			calculatorDescription: "Ingresa tu consumo mensual en kWh y calcula el ahorro estimado y el impacto ambiental de usar energía solar.",
			calculatorInputLabel: "Consumo mensual en kWh:",
			calculatorButton: "Calcular",
			savingsMoney: (m) => `Ahorro estimado en dinero: $${m.toFixed(2)}`,
			savingsCO2: (c) => `CO₂ evitado: ${c.toFixed(2)} kg`,
			savingsTrees: (t) => `Equivale a plantar aproximadamente ${t.toFixed(2)} árboles.`,
			triviaTitle: "Trivia sobre Energía Solar",
			triviaDescription: "Sumérgete en el mundo de la energía solar y prueba tus conocimientos con nuestra trivia.",
			triviaFinal: (s, t) => `¡Terminaste la trivia! Puntaje final: ${s} de ${t}.`,
			feedbackCorrect: "¡Correcto!",
			feedbackIncorrect: (a) => `Incorrecto. La respuesta correcta es: ${a}.`,
			questionText: (c, t, s) => `Pregunta ${c} de ${t} | Puntaje: ${s}`,
			restartTrivia: "Reiniciar Trivia",
			simulatorTitle: "Simulador de Producción Diaria",
			simulatorDescription: "Observa cómo la generación aumenta con la salida del sol y alcanza su pico al mediodía.",
			simulatorLabel: "Producción de Energía (kWh)",
			simulatorStart: "Iniciar Simulación",
			simulatorStop: "Detener",
			simulatorRestart: "Reiniciar",
		},
		en: {
			mainTitle: "CEMDO I Solar Power Plant",
			subTitle: "Clean energy for Villa Dolores and the region",
			navInfo: "Information",
			navGallery: "Gallery",
			navLocation: "Location",
			navImpact: "Impact",
			navTeam: "Team",
			navInteractivity: "Interactivity",
			navContact: "Contact",
			lightMode: "Light Mode",
			darkMode: "Dark Mode",
			switchLanguage: "Español",
			aboutPlant: "About the Solar Plant",
			aboutPlantParagraph1: "The “Pope Francis Solar Park,” home of the CEMDO I Solar Photovoltaic Plant, honors the legacy of Pope Francis, promoting a solidarity economy and the care of our Common Home.",
			aboutPlantParagraph2: "This plant provides clean and renewable electricity to the community, promoting sustainable development.",
			solarFeatures1: "Installed capacity: 10 MW (AC)",
			solarFeatures2: "Solar panels: 20,880 high-efficiency 615 W bifacial panels",
			solarFeatures3: "Production: Equivalent to 16% of local consumption with environmental and economic benefits",
			moreInfoLink: "More information on the Cooperativa CEMDO website.",
			whatIsSolar: "What is Solar Energy?",
			whatIsSolarParagraph1: "Solar energy is a source of renewable energy obtained directly from the sun, using solar radiation to generate electricity or heat. It is a clean and sustainable alternative to fossil fuels, as it produces no polluting emissions or greenhouse gases during use.",
			whatIsSolarParagraph2: "There are two main ways to harness solar energy:",
			whatIsSolarParagraph3: "Solar energy is one of the fastest-growing renewable sources worldwide due to its multiple benefits, including:",
			whatIsSolarBullet1: "Photovoltaic solar energy: converts sunlight into electricity using solar panels composed of photovoltaic cells.",
			whatIsSolarBullet2: "Sustainability: it is inexhaustible and reduces dependence on non-renewable resources.",
			whatIsSolarBullet3: "Cost reduction: with the right technology, solar generation can significantly lower the cost of electricity.",
			whatIsSolarBullet4: "Low environmental impact: it emits no pollutants or toxic waste.",
			whatIsSolarBullet5: "Distributed generation: allows solar systems to be installed in both large plants as well as homes and businesses.",
			whatIsSolarParagraph4: "Thanks to these advantages, solar energy contributes to sustainable development and climate change mitigation, improving the quality of life for communities and promoting a cleaner, more secure energy future.",
			solarPark: "Cooperative Solar Park",
			videoCaption: "Benefits of the CEMDO I Photovoltaic Solar Park",
			gallery: "Gallery",
			location: "Geographic Location",
			locationParagraph1: "The CEMDO I Solar Photovoltaic Plant is located in Villa Dolores, Córdoba, in a strategic area to make the most of the region's solar radiation.",
			locationParagraph2: "On the following interactive map, you can explore the exact location, access roads, and nearby points of interest, and switch between street and satellite views.",
			mapCallejero: "Street",
			mapSatelital: "Satellite",
			mapPopup: "CEMDO I Solar Power Plant<br>Villa Dolores, Córdoba",
			developmentTeam: "Development Team IPEM 146 ´Centenario´",
			teamRolProgramacion: "Programming",
			teamRolDiseno: "Graphic Design",
			teamRolContenido: "Content and Quality Control",
			teamRolAsesor: "Teacher advisor",
			interactivity: "Energy Savings Calculator, Trivia and Simulator",
			contact: "Contact",
			contactAddress: "Address: Av. San Martín 255, Villa Dolores, Córdoba",
			contactPhone: "Phone: +54 3544 42-2000",
			contactEmail: "Email: info@cemdo.com.ar",
			footerText: "Developed by IPEM 146 \"Centenario\" | Cooperativa CEMDO",
			calculatorTitle: "Energy Savings Calculator",
			calculatorDescription: "Enter your monthly kWh consumption and calculate the estimated savings and environmental impact of using solar energy.",
			calculatorInputLabel: "Monthly consumption in kWh:",
			calculatorButton: "Calculate",
			savingsMoney: (m) => `Estimated savings in money: $${m.toFixed(2)}`,
			savingsCO2: (c) => `CO₂ avoided: ${c.toFixed(2)} kg`,
			savingsTrees: (t) => `Equivalent to planting approximately ${t.toFixed(2)} trees.`,
			triviaTitle: "Solar Energy Trivia",
			triviaDescription: "Dive into the world of solar energy and test your knowledge with our trivia.",
			triviaFinal: (s, t) => `You finished the trivia! Final score: ${s} out of ${t}.`,
			feedbackCorrect: "Correct!",
			feedbackIncorrect: (a) => `Incorrect. The correct answer is: ${a}.`,
			questionText: (c, t, s) => `Question ${c} of ${t} | Score: ${s}`,
			restartTrivia: "Restart Trivia",
			simulatorTitle: "Daily Production Simulator",
			simulatorDescription: "Watch as the generation increases with the sunrise, reaches its peak at midday, and then declines.",
			simulatorLabel: "Energy Production (kWh)",
			simulatorStart: "Start Simulation",
			simulatorStop: "Stop",
			simulatorRestart: "Restart",
		}
	};

	const preguntas = [
		{ pregunta: { es: "¿Qué tecnología utiliza la Usina Solar CEMDO I para generar energía?", en: "What technology does the CEMDO I Solar Plant use to generate energy?" }, opciones: { es: ["Energía eólica", "Energía hidroeléctrica", "Energía solar fotovoltaica", "Energía nuclear"], en: ["Wind energy", "Hydroelectric energy", "Photovoltaic solar energy", "Nuclear energy"] }, correcta: 2 },
		{ pregunta: { es: "¿Dónde está ubicada la Usina Solar CEMDO I?", en: "Where is the CEMDO I Solar Plant located?" }, opciones: { es: ["Buenos Aires", "Villa Dolores, Córdoba", "Rosario", "Mendoza"], en: ["Buenos Aires", "Villa Dolores, Córdoba", "Rosario", "Mendoza"] }, correcta: 1 },
		{ pregunta: { es: "¿Qué beneficio principal aporta la Usina Solar?", en: "What is the main benefit of the Solar Plant?" }, opciones: { es: ["Generar empleo en otro país", "Producir energía limpia y renovable", "Extraer petróleo", "Construir represas"], en: ["Create jobs in another country", "Produce clean and renewable energy", "Extract oil", "Build dams"] }, correcta: 1 },
		{ pregunta: { es: "¿Cuántos paneles solares bifaciales tiene la Usina?", en: "How many bifacial solar panels does the Plant have?" }, opciones: { es: ["20880", "5000", "100000", "500"], en: ["20880", "5000", "100000", "500"] }, correcta: 0 },
		{ pregunta: { es: "¿Cuál es la capacidad instalada de la Usina?", en: "What is the installed capacity of the Plant?" }, opciones: { es: ["10 MW ac", "100 MW", "1 MW", "50 MW"], en: ["10 MW ac", "100 MW", "1 MW", "50 MW"] }, correcta: 0 },
		{ pregunta: { es: "¿Qué tipo de energía no es renovable?", en: "What type of energy is not renewable?" }, opciones: { es: ["Eólica", "Solar", "Carbón", "Hidráulica"], en: ["Wind", "Solar", "Coal", "Hydroelectric"] }, correcta: 2 },
		{ pregunta: { es: "La energía solar se obtiene a partir de...", en: "Solar energy is obtained from..." }, opciones: { es: ["La radiación solar", "El movimiento del agua", "El calor de la tierra", "El viento"], en: ["Solar radiation", "The movement of water", "The heat of the earth", "The wind"] }, correcta: 0 },
		{ pregunta: { es: "¿Qué componente de los paneles solares convierte la luz en electricidad?", en: "What component of solar panels converts light into electricity?" }, opciones: { es: ["El marco", "El vidrio", "Las células fotovoltaicas", "El inversor"], en: ["The frame", "The glass", "The photovoltaic cells", "The inverter"] }, correcta: 2 },
		{ pregunta: { es: "Un beneficio de la energía solar es la reducción de...", en: "A benefit of solar energy is the reduction of..." }, opciones: { es: ["Consumo de agua", "Emisiones de CO₂", "Tamaño de las plantas", "Ruido"], en: ["Water consumption", "CO₂ emissions", "Plant size", "Noise"] }, correcta: 1 },
		{ pregunta: { es: "¿Qué es la generación distribuida?", en: "What is distributed generation?" }, opciones: { es: ["Generar energía en un solo punto", "Generar energía solo de noche", "Producir energía cerca del punto de consumo", "Vender energía a otros países"], en: ["Generating energy at a single point", "Generating energy only at night", "Producing energy near the point of consumption", "Selling energy to other countries"] }, correcta: 2 }
	];

	function actualizarTextos() {
		const t = textos[idiomaActual];

		document.querySelector('h1').textContent = t.mainTitle;
		document.querySelector('header p').textContent = t.subTitle;

		const enlacesNavegacion = [
			{ selector: "a[href='#info']", text: t.navInfo },
			{ selector: "a[href='#galeria']", text: t.navGallery },
			{ selector: "a[href='#ubicacion']", text: t.navLocation },
			{ selector: "a[href='#impacto']", text: t.navImpact },
			{ selector: "a[href='#equipo']", text: t.navTeam },
			{ selector: "a[href='#interactividad']", text: t.navInteractivity },
			{ selector: "a[href='#contacto']", text: t.navContact }
		];

		enlacesNavegacion.forEach(enlace => {
			const el = document.querySelector(enlace.selector);
			if (el) el.textContent = enlace.text;
		});

		const elementosParaTraducir = [
			{ selector: '#info h2', text: t.aboutPlant },
			{ selector: '#sobre-energia-solar h2', text: t.whatIsSolar },
			{ selector: '#videoSection h2', text: t.solarPark },
			{ selector: '#galeria h2', text: t.gallery },
			{ selector: '#ubicacion h2', text: t.location },
			{ selector: '#equipo h2', text: t.developmentTeam },
			{ selector: '#interactividad h2', text: t.interactivity },
			{ selector: '#contacto h2', text: t.contact },
			{ selector: '#calculadoraTitulo', text: t.calculatorTitle },
			{ selector: '#triviaTitulo', text: t.triviaTitle },
			{ selector: '#simuladorTitulo', text: t.simulatorTitle },
			{ selector: '#info p:nth-of-type(1)', text: t.aboutPlantParagraph1 },
			{ selector: '#info p:nth-of-type(2)', text: t.aboutPlantParagraph2 },
			{ selector: '#sobre-energia-solar p:nth-of-type(1)', text: t.whatIsSolarParagraph1 },
			{ selector: '#sobre-energia-solar p:nth-of-type(2)', text: t.whatIsSolarParagraph2 },
			{ selector: '#sobre-energia-solar p:nth-of-type(3)', text: t.whatIsSolarParagraph3 },
			{ selector: '#sobre-energia-solar p:nth-of-type(4)', text: t.whatIsSolarParagraph4 },
			{ selector: '#ubicacion p:nth-of-type(1)', text: t.locationParagraph1 },
			{ selector: '#ubicacion p:nth-of-type(2)', text: t.locationParagraph2 },
			{ selector: '#videoSection .video-caption', text: t.videoCaption },
			{ selector: '#equipo .miembro:nth-of-type(1) p', text: t.teamRolProgramacion },
			{ selector: '#equipo .miembro:nth-of-type(2) p', text: t.teamRolProgramacion },
			{ selector: '#equipo .miembro:nth-of-type(3) p', text: t.teamRolDiseno },
			{ selector: '#equipo .miembro:nth-of-type(4) p', text: t.teamRolContenido },
			{ selector: '#equipo .miembro:nth-of-type(5) p', text: t.teamRolAsesor },
			{ selector: 'footer p:first-of-type', text: t.footerText },
		];

		elementosParaTraducir.forEach(el => {
			const elemento = document.querySelector(el.selector);
			if (elemento) {
				elemento.textContent = el.text;
			}
		});

		document.querySelector('#info li:nth-of-type(1)').textContent = t.solarFeatures1;
		document.querySelector('#info li:nth-of-type(2)').textContent = t.solarFeatures2;
		document.querySelector('#info li:nth-of-type(3)').textContent = t.solarFeatures3;
		document.querySelector('#info a').textContent = t.moreInfoLink;
		document.querySelector('#sobre-energia-solar ul:nth-of-type(1) li:nth-of-type(1)').textContent = t.whatIsSolarBullet1;
		document.querySelector('#sobre-energia-solar ul:nth-of-type(2) li:nth-of-type(1)').textContent = t.whatIsSolarBullet2;
		document.querySelector('#sobre-energia-solar ul:nth-of-type(2) li:nth-of-type(2)').textContent = t.whatIsSolarBullet3;
		document.querySelector('#sobre-energia-solar ul:nth-of-type(2) li:nth-of-type(3)').textContent = t.whatIsSolarBullet4;
		document.querySelector('#sobre-energia-solar ul:nth-of-type(2) li:nth-of-type(4)').textContent = t.whatIsSolarBullet5;
		document.querySelector('#formCalculadora label').textContent = t.calculatorInputLabel;
		document.querySelector('#formCalculadora button').textContent = t.calculatorButton;
		document.getElementById("iniciarSimulacion").textContent = t.simulatorStart;
		document.getElementById("detenerSimulacion").textContent = t.simulatorStop;
		document.getElementById("reiniciarSimulacion").textContent = t.simulatorRestart;
		document.getElementById("reiniciarTrivia").textContent = t.restartTrivia;

		document.querySelector('#contacto li:nth-of-type(1)').innerHTML = `<strong>${t.contactAddress.split(': ')[0]}:</strong> ${t.contactAddress.split(': ')[1]}`;
		document.querySelector('#contacto li:nth-of-type(2)').innerHTML = `<strong>${t.contactPhone.split(': ')[0]}:</strong> ${t.contactPhone.split(': ')[1]}`;
		document.querySelector('#contacto li:nth-of-type(3)').innerHTML = `<strong>${t.contactEmail.split(': ')[0]}:</strong> ${t.contactEmail.split(': ')[1]}`;
		botonCambiarIdioma.textContent = t.switchLanguage;

		botonCambiarTema.textContent = document.body.classList.contains("modo-oscuro") ? t.darkMode : t.lightMode;

		if (window.map && window.L && window.baseMaps) {
			window.baseMaps["Callejero"] = window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
				attribution: '&copy; OpenStreetMap contributors'
			});
			window.baseMaps["Satelital"] = window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
				attribution: 'Tiles &copy; Esri'
			});
			window.L.control.layers(window.baseMaps).addTo(window.map);
			window.L.marker(window.map.getCenter())
				.addTo(window.map)
				.bindPopup(`<b>${t.mapPopup.replace('<br>', '</b><br>').split('<br>')[0]}</b><br>${t.mapPopup.replace('<br>', '</b><br>').split('<br>')[1]}`)
				.openPopup();
		}

		mostrarPregunta();
		simulador.actualizarEtiqueta();
	}

	function mostrarPregunta() {
		const t = textos[idiomaActual];
		if (indicePreguntaActual < preguntas.length) {
			const p = preguntas[indicePreguntaActual];
			elementoPregunta.textContent = p.pregunta[idiomaActual];
			elementoOpciones.innerHTML = "";
			p.opciones[idiomaActual].forEach((opt, i) => {
				const btn = document.createElement("button");
				btn.textContent = opt;
				btn.classList.add("respuesta-btn");
				btn.disabled = false;
				btn.addEventListener("click", () => verificarRespuesta(i));
				elementoOpciones.appendChild(btn);
			});
			elementoFeedback.textContent = "";
			elementoPuntaje.textContent = t.questionText(indicePreguntaActual + 1, preguntas.length, puntajeTotal);
		} else {
			elementoPregunta.textContent = t.triviaFinal(puntajeTotal, preguntas.length);
			elementoOpciones.innerHTML = "";
			elementoFeedback.textContent = "";
			elementoPuntaje.textContent = "";
		}
	}

	function verificarRespuesta(indiceSeleccionado) {
		const t = textos[idiomaActual];
		const p = preguntas[indicePreguntaActual];
		const correcta = p.correcta;

		const botones = elementoOpciones.querySelectorAll("button");
		botones.forEach(b => b.disabled = true);

		if (indiceSeleccionado === correcta) {
			elementoFeedback.textContent = t.feedbackCorrect;
			elementoFeedback.classList.add("correcto");
			elementoFeedback.classList.remove("incorrecto");
			puntajeTotal++;
		} else {
			elementoFeedback.textContent = t.feedbackIncorrect(p.opciones[idiomaActual][correcta]);
			elementoFeedback.classList.add("incorrecto");
			elementoFeedback.classList.remove("correcto");
		}

		setTimeout(() => {
			indicePreguntaActual++;
			mostrarPregunta();
		}, 1500);
	}

	botonReiniciarTrivia.addEventListener("click", () => {
		indicePreguntaActual = 0;
		puntajeTotal = 0;
		mostrarPregunta();
	});

	if (formularioCalculadora) {
		const elementoResultado = document.getElementById("resultado");
		const elementoDinero = document.getElementById("ahorroDinero");
		const elementoCo2 = document.getElementById("ahorroCO2");
		const elementoArboles = document.getElementById("equivalencia");

		formularioCalculadora.addEventListener("submit", (e) => {
			e.preventDefault();
			const valorConsumo = parseFloat(document.getElementById("consumo").value);
			if (isNaN(valorConsumo) || valorConsumo <= 0) {
				alert(idiomaActual === "es" ? "Ingrese un valor válido." : "Please enter a valid value.");
				return;
			}

			const t = textos[idiomaActual];
			const porcentaje = 0.16;
			const costo = 1.12;
			const co2PorKwh = 0.7;
			const arbolesPorKgCo2 = 1 / 21.77;

			const ahorroKwh = valorConsumo * porcentaje;
			const ahorroDinero = ahorroKwh * costo;
			const ahorroCo2 = ahorroKwh * co2PorKwh;
			const ahorroArboles = ahorroCo2 * arbolesPorKgCo2;

			elementoDinero.textContent = t.savingsMoney(ahorroDinero);
			elementoCo2.textContent = t.savingsCO2(ahorroCo2);
			elementoArboles.textContent = t.savingsTrees(ahorroArboles);

			elementoResultado.style.display = "block";
		});
	}

	const simulador = (() => {
		const canvas = document.getElementById("graficoProduccion");
		const botonIniciar = document.getElementById("iniciarSimulacion");
		const botonDetener = document.getElementById("detenerSimulacion");
		const botonReiniciar = document.getElementById("reiniciarSimulacion");

		if (!canvas || !botonIniciar || !botonDetener || !botonReiniciar) {
			console.warn("Simulador: elementos faltantes");
			return { actualizarEtiqueta: () => {} };
		}

		const ctx = canvas.getContext("2d");
		let grafico;
		let idIntervalo = null;
		let hora = 0;
		const etiquetas = Array.from({ length: 24 }, (_, i) => `${i}:00h`);

		function generarProduccion(h) {
			const pico = 12;
			const desviacion = 4;
			return 10000 * Math.exp(-Math.pow(h - pico, 2) / (2 * Math.pow(desviacion, 2)));
		}

		function iniciarGrafico() {
			grafico = new Chart(ctx, {
				type: "line",
				data: {
					labels: etiquetas,
					datasets: [{
						label: textos[idiomaActual].simulatorLabel,
						data: Array(etiquetas.length).fill(null),
						borderColor: "rgb(255, 204, 0)",
						backgroundColor: "rgba(255, 204, 0, 0.3)",
						fill: true,
						tension: 0.3,
						pointRadius: 4,
					}]
				},
				options: {
					responsive: true,
					animation: false,
					scales: {
						y: {
							beginAtZero: true,
							max: 12000
						}
					}
				}
			});
		}

		function actualizarEtiqueta() {
			if (grafico) {
				grafico.data.datasets[0].label = textos[idiomaActual].simulatorLabel;
				grafico.update();
			}
		}

		function iniciarSimulacion() {
			if (idIntervalo) return;
			hora = 0;
			grafico.data.datasets[0].data.fill(null);
			grafico.update();

			idIntervalo = setInterval(() => {
				if (hora >= etiquetas.length) {
					clearInterval(idIntervalo);
					idIntervalo = null;
					return;
				}
				const prod = generarProduccion(hora);
				grafico.data.datasets[0].data[hora] = prod.toFixed(2);
				grafico.update();
				hora++;
			}, 500);
		}

		function detenerSimulacion() {
			if (idIntervalo) {
				clearInterval(idIntervalo);
				idIntervalo = null;
			}
		}

		function reiniciarSimulacion() {
			detenerSimulacion();
			hora = 0;
			grafico.data.datasets[0].data.fill(null);
			grafico.update();
		}

		botonIniciar.addEventListener("click", iniciarSimulacion);
		botonDetener.addEventListener("click", detenerSimulacion);
		botonReiniciar.addEventListener("click", reiniciarSimulacion);

		iniciarGrafico();

		return { actualizarEtiqueta };
	})();

	botonCambiarTema.addEventListener("click", () => {
		document.body.classList.toggle("modo-oscuro");
		const t = textos[idiomaActual];
		const esModoOscuro = document.body.classList.contains("modo-oscuro");
		botonCambiarTema.textContent = esModoOscuro ? t.darkMode : t.lightMode;
		localStorage.setItem("theme", esModoOscuro ? "dark" : "light");
	});

	const temaGuardado = localStorage.getItem("theme");
	if (temaGuardado === "dark") {
		document.body.classList.add("modo-oscuro");
	}
	botonCambiarTema.textContent = document.body.classList.contains("modo-oscuro") ? textos.es.darkMode : textos.es.lightMode;

	botonCambiarIdioma.addEventListener("click", () => {
		idiomaActual = idiomaActual === "es" ? "en" : "es";
		actualizarTextos();
	});

	actualizarTextos();
	mostrarPregunta();
});