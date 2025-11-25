// Estructura enriquecida de lugares con muchos más datos, secciones e imágenes
const lugares = [
  {
    nombre: "Aeropuerto Internacional José María Córdova",
    icono: "fa-plane",
    imagenes: [
      {
        url: "https://pplx-res.cloudinary.com/image/upload/v1764029111/search_images/141b0ce33d13cf689444e32bf2271a97b7aa3469.jpg",
        descripcion: "Vista aérea del Aeropuerto José María Córdova en Rionegro."
      },
      {
        url: "https://pplx-res.cloudinary.com/image/upload/v1764029111/search_images/d4236d3d0f009d8fe0f75111388bdae34aa90b69.jpg",
        descripcion: "Terminal moderna y torre de control del aeropuerto."
      }
    ],
    ubicacion: "Rionegro, Antioquia",
    acceso: "Se ubica a 30 km de Medellín por la autopista Las Palmas o la vía Santa Elena. Acceso en taxi, bus intermunicipal, servicio Aerotaxi y vehículos propios. Conexión con rutas interurbanas y microbuses directos a Medellín, Oriente Antioqueño y San Nicolás.",
    datos: [
      "Inaugurado en 1985, cumple 40 años de operación.",
      "Altitud: 2.137 m.s.n.m. (metros sobre el nivel del mar).",
      "Proyección de 14.4 millones de pasajeros anuales para 2025.",
      "Centro exportador de flores, frutas y productos manufacturados.",
      "En 2006 realizó pruebas con un Airbus A380, siendo el primero en Latinoamérica.",
    ],
    historia: "El Aeropuerto Internacional José María Córdova reemplazó al aeropuerto Olaya Herrera como principal terminal aérea internacional de Antioquia y el Eje Cafetero. El aeropuerto ha permitido conectividad global, facilitando el desarrollo económico regional y la exportación. Su crecimiento, modernización y rol como hub de exportación -especialmente flores y productos agrícolas- lo han convertido en pilar estratégico de Antioquia.",
    impacto: "Conecta a la región con más de 30 destinos nacionales e internacionales. Soporta la economía exportadora (flores, aguacate, industria de moda). Genera más de 20 mil empleos directos e indirectos y posiciona a Medellín como capital logística del noroccidente colombiano. Es clave en la imagen internacional de la región y la anfitrionía de grandes eventos. Recibe entre 120-150 vuelos diarios y aporta a la descentralización de operaciones aéreas de Colombia.",
    curiosidades: [
      "Primera pista de Latinoamérica donde aterrizó un Airbus A380: el avión comercial más grande del mundo.",
      "Exporta más de 50,000 toneladas de flores anualmente, especialmente durante San Valentín y el Día de la Madre a EE.UU y Europa.",
      "La pista principal cuenta con 3,557 metros"
    ],
    innovacion: "Implementa control migratorio biométrico y es pionero en eficiencia ambiental entre los aeropuertos del país. Sus modernos hangares permiten mantenimiento de aviones widebody.",
    importancia: "Punto estratégico para el comercio internacional, movilidad de personas, competitividad exportadora, recepción de turistas y eventos. Es figura clave en la integración regional y conectividad global de Medellín.",
    cobertura: "Atiende a la región de Antioquia, el Eje Cafetero y parte de la Costa Atlántica. Es el segundo aeropuerto más importante de Colombia.",
    relevancia_academica: "Estudia casos de logística internacional, conectividad estratégica y movilidad aérea. Referente en gestión aeroportuaria y exportación nacional."
  },
  {
    nombre: "Somos Movilidad Rionegro",
    icono: "fa-bus",
    imagenes: [
      {
        url: "https://actualidad.com.co/wp-content/uploads/2023/09/7-anos-Moviendo-el-Futuro-de-la-Region-1-scaled-1-e1695480335112.jpg",
        descripcion: "Funcionario de movilidad urbana en Rionegro."
      }
    ],
    ubicacion: "Rionegro, Antioquia",
    acceso: "Opera a través de rutas principales y alimentadoras en todo Rionegro. Cobertura en el Oriente Antioqueño, integra aplicaciones móviles y paraderos inteligentes.",
    datos: [
      "Fundada: 23 de agosto de 2016.",
      "Gestionan la movilidad en eventos masivos con altos estándares de seguridad.",
      "Programa Bicirio: sistema de más de 500 bicicletas compartidas.",
      "Impactos positivos en la reducción de emisiones de CO2 y congestión."
    ],
    historia: "Nació de la necesidad de soluciones integrales de movilidad. Articula actores públicos y privados, con enfoque en innovación, integración de sistemas de bicicleta pública y planes de manejo ambiental. Con fuerte visión en sostenibilidad y transformación urbana.",
    impacto: "Impacto directo en calidad de vida ciudadana: facilitando la reducción de tiempos de desplazamiento, integración modal y educación vial. Más de 50 eventos masivos gestionados anualmente. Fomenta el uso de vehículos ecológicos y promueve la movilidad activa.",
    curiosidades: [
      "El programa Bicirio es el más grande en el oriente antioqueño.",
      "Sus estrategias han sido replicadas en otras ciudades de Colombia."
    ],
    innovacion: "Implementación de rutas adaptables, ecoflota y planes piloto de movilidad inteligente con sensores.",
    importancia: "Clave para la movilidad regional; referente para políticas públicas de movilidad; modelo replicable en municipios medianos.",
    cobertura: "Cubre centro urbano, veredas y municipios cercanos a Rionegro.",
    relevancia_academica: "Caso de estudio en movilidad sostenible, integración regional y educación vial."
  },
  {
    nombre: "Metro de Medellín",
    icono: "fa-subway",
    imagenes: [
      {
        url: "https://metromedellin.com.co/wp-content/uploads/Mapa_Metro_Santiago.webp",
        descripcion: "Mapa actual del sistema Metro de Medellín y sus estaciones."
      },
      {
        url: "https://static-uat.cambiocolombia.com/s3fs-public/2022-12/metro_de_medellin_12122022.jpg",
        descripcion: "Tren moderno del Metro de Medellín."
      }
    ],
    ubicacion: "Medellín, Antioquia",
    acceso: "Accesible en toda el área metropolitana. Integración por tarjeta Cívica, buses alimentadores, Metrocable y Tranvía. El sistema opera desde Laureles hasta Bello y el sur del Valle de Aburrá.",
    datos: [
      "Inauguración el 30 de noviembre de 1995. Más de 25 años de operación continua.",
      "27 estaciones, cubriendo 5 municipios del Valle de Aburrá.",
      "12 años de construcción, con desafíos de ingeniería y contexto social complejo.",
      "Conecta las líneas A (Niquía-La Estrella) y B (San Javier-San Antonio).",
      "Transporta a más de 500.000 pasajeros diarios."
    ],
    historia: "Fue ideado en los años 80 como alternativa ante el caos vial. Símbolo de la transformación post-violencia de Medellín. Con su inauguración cambió la cultura ciudadana y la imagen global de la ciudad.",
    impacto: "Genera inclusión social. Conecta zonas periféricas con el centro. Transformó la movilidad, redujo tiempos de viaje y generó sentido de pertenencia y civismo. Es emblema turístico y cultural. Ha sido usado para programas de arte, cultura y deportes.",
    curiosidades: [
      "Primer metro de Latinoamérica con mujeres operadoras de trenes ('metreras').",
      "Algunas estaciones incluyen bibliotecas, gimnasios y galerías artísticas abiertas al público.",
      "Ha recibido premios de innovación de ONU y otros organismos."
    ],
    innovacion: "Pago inteligente con tarjeta Cívica, estaciones accesibles y sistemas intermodales de integración.",
    importancia: "Pilar de la movilidad; referente a nivel nacional e internacional; referente académico de cultura ciudadana y transformación social.",
    cobertura: "Cubre de norte a sur el Valle de Aburrá, enlazando municipios aledaños.",
    relevancia_academica: "Estudio de caso en urbanismo, inclusión, transporte sostenible y gestión cultural urbana."
  },
  {
    nombre: "Metrocable - Sistema de Teleféricos",
    icono: "fa-cable-car",
    imagenes: [
      {
        url: "https://pplx-res.cloudinary.com/image/upload/v1764029111/search_images/6160007ca8395eff2ea17b976203f9a16fccfcb7.jpg",
        descripcion: "Cabinas del Metrocable recorriendo barrios montañosos de Medellín."
      },
      {
        url: "https://pplx-res.cloudinary.com/image/upload/v1763980873/search_images/a860d5ab3c82bc1bd1d9f8b167cca38f79033c77.jpg",
        descripcion: "Vista al sistema de teleféricos integrados en el sistema metro."
      }
    ],
    ubicacion: "Medellín, Antioquia",
    acceso: "Accesible a través de estaciones intermodales del Metro. Conecta barrios altos y montañosos con el sistema principal. Integra buses y rutas peatonales.",
    datos: [
      "Primera línea (K): 7 de agosto de 2004.",
      "Actualmente cuenta con 6 líneas: H, J, K, L, M y P.",
      "Más de 14 km de extensión; 20 estaciones operativas.",
      "Reduce viajes de 2 horas a solo 7 minutos.",
    ],
    historia: "Solución pionera para barrios de laderas y difícil acceso. Primer teleférico del mundo de operación permanente y uso público, no turístico. Inspiró sistemas similares en América Latina y Asia.",
    impacto: "Reduce inequidad urbana, acerca servicios y oportunidades a familias marginadas, mejora seguridad y autoestima colectiva. Es símbolo global de innovación social y transformación.",
    curiosidades: [
      "Cable de 2 cm de diámetro soporta las 24 cabinas a velocidades de 12 km/h.",
      "Premio Holcim a la innovación y sostenibilidad."
    ],
    innovacion: "Tecnología de teleféricos Doppelmayr. Sistema redundante de seguridad y operación automatizada.",
    importancia: "Ejemplo mundial de movilidad incluyente y eficiente. Ha sido replicado en ciudades como La Paz y Río de Janeiro.",
    cobertura: "Conecta comunas periféricas de Medellín, potenciando acceso social, laboral y educativo.",
    relevancia_academica: "Estudio ejemplo en inclusión social, movilidad intermodal y urbanismo innovador."
  },
  {
    nombre: "Tranvía de Medellín",
    icono: "fa-train-tram",
    imagenes: [
      {
        url: "https://pplx-res.cloudinary.com/image/upload/v1764029111/search_images/07fb8d37f83eaba579d7a21556f6086d93e5d0b3.jpg",
        descripcion: "Tranvía de Medellín circulando por el corredor de Ayacucho."
      },
      {
        url: "https://pplx-res.cloudinary.com/image/upload/v1764029114/search_images/3341e941d95116a808f41d5f6b69ca88dd5b6a67.jpg",
        descripcion: "Estaciones modernas y tranvías de última generación en Medellín."
      }
    ],
    ubicacion: "Medellín, Antioquia",
    acceso: "Acceso desde el centro de Medellín hasta la zona oriental. Intercambio con Metro, buses y Metrocable. Adaptado para personas con movilidad reducida.",
    datos: [
      "Operación comercial iniciada el 31 de marzo de 2016.",
      "Línea T (Ayacucho): 4.3 km, 9 estaciones.",
      "70 años sin servicio entre 1950 y 2016.",
      "Flota: 12 tranvías modernos; capacidad: 5,400 pasajeros por hora/sentido.",
      "Primer tranvía con llantas de goma en América Latina."
    ],
    historia: "El tranvía original se inauguró en 1887 tirado por mulas y funcionó hasta 1950. Su regreso revitalizó el corredor de Ayacucho, mezcla patrimonio histórico y modernidad.",
    impacto: "Revitaliza barrios patrimoniales, promueve memoria urbana y transporte sostenible. Mejora movilidad y calidad ambiental.",
    curiosidades: [
      "Solo tranvía con ruedas de goma en Latinoamérica, lo que reduce ruido y vibración.",
      "Recorre el histórico Museo de Antioquia, epicentro cultural de Medellín."
    ],
    innovacion: "Tecnología híbrida (eléctrico + ruedas de goma).",
    importancia: "Innova el transporte, rescata memoria histórica y fomenta identidad urbana.",
    cobertura: "Cubre el oriente de Medellín, conecta barrios históricos con el centro.",
    relevancia_academica: "Referente en integración patrimonial y tecnología moderna en sistemas urbanos."
  },
  {
    nombre: "Metroplús - Sistema BRT",
    icono: "fa-bus-alt",
    imagenes: [],
    ubicacion: "Medellín, Envigado e Itagüí",
    acceso: "Opera sobre troncales exclusivas, estaciones accesibles para personas con discapacidad. Intercambio con Metro, buses y rutas de barrios.",
    datos: [
      "Sistema BRT de mediana capacidad y alta eficiencia.",
      "Troncal principal: 12,5 km/20 estaciones. Pretroncal sur: 18.5 km en obra.",
      "Atiende el 11% de la demanda de transporte metropolitano.",
      "20 estaciones adaptadas a movilidad reducida.",
      "Carriles elevados exclusivos para buses; reduce tiempos de viaje muy notablemente."
    ],
    historia: "Complementa al Metro con alta capacidad y eficiencia. Modelo de integración SITVA, pionero en adaptación de infraestructura urbana para buses BRT.",
    impacto: "Fomenta la equidad, facilita la interconexión sur-norte, reduce la congestión vial y disminuye la huella ambiental del transporte colectivo.",
    curiosidades: [
      "Estaciones accesibles, pioneras en Colombia.",
      "Pases integrados SITVA, permiten transbordos directos con tarifa única."
    ],
    innovacion: "Sistemas inteligentes de información al usuario y control de flotas. Buses amigables con el medioambiente.",
    importancia: "Pilar del sistema integrado del área metropolitana; ejemplo nacional de eficiencia urbana.",
    cobertura: "Conexión de la zona sur de Medellín con Envigado e Itagüí.",
    relevancia_academica: "Modelo de movilidad sostenible, infraestructura urbana accesible y gestión BRT."
  },
  {
    nombre: "Comuna 13 - Transformación Urbana",
    icono: "fa-palette",
    imagenes: [
      {
        url: "https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/uploads/2023/09/Esclaeras_electricas_45.jpg",
        descripcion: "Graffitis y murales coloridos en la Comuna 13."
      },
      {
        url: "https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/uploads/2023/09/Esclaeras_electricas_4a.jpg",
        descripcion: "Escaleras eléctricas y comunidad activa de la Comuna 13."
      }
    ],
    ubicacion: "San Javier, Medellín",
    acceso: "Acceso en Metro hasta San Javier, luego buses integrados y caminatas por el barrio. Escaleras eléctricas públicas para el ascenso a zonas altas.",
    datos: [
      "Reducción significativa de homicidios",
      "Epicentro de violencia en los años 90; ahora, galería de arte al aire libre.",
      "Escaleras eléctricas públicas: 350 escalones en 6 tramos, primera de su tipo en América Latina.",
      "Jóvenes transformaron armas en micrófonos, danzas y graffitis."
    ],
    historia: "Pasó de ser el lugar más peligroso de Medellín a símbolo global de resiliencia. Gracias a intervención estatal y liderazgo comunitario, se transformó con arte, cultura y economía creativa.",
    impacto: "Reducción drástica de violencia, generación de centenares de empleos en turismo, arte y emprendimiento. Cambió la imagen global de Medellín de violencia a innovación social.",
    curiosidades: [
      "Graffitour premiado a nivel internacional. Recorrido principal de turistas internacionales en Medellín.",
      "La fachada de la Comuna 13 es una galería de arte continuo, en crecimiento permanente.",
      "Primer barrio popular de Latinoamérica intervenido con escaleras eléctricas públicas."
    ],
    innovacion: "Modelo de regeneración urbana mediante intervención cultural y artística, referencia para ciudades del mundo.",
    importancia: "Símbolo internacional de transformación social y creatividad colorida. Inspiración para procesos similares en otras ciudades históricamente violentas.",
    cobertura: "Alcanza a toda la zona occidental de Medellín e inspira proyectos urbanos globales.",
    relevancia_academica: "Modelo en urbanismo social, desarrollo comunitario y cultura urbana."
  },
  {
    nombre: "Parques del Río Medellín",
    icono: "fa-tree",
    imagenes: [
      {
        url: "https://pplx-res.cloudinary.com/image/upload/v1764029112/search_images/cd6d187a48fc02e7ddc12c2abc9545e26613223b.jpg",
        descripcion: "Zonas verdes, ciclorrutas y espacio público en Parques del Río Medellín."
      },
      {
        url: "https://pplx-res.cloudinary.com/image/upload/v1764029111/search_images/e20fab3c1cb0cca8818d130eec16c1386adf4a76.jpg",
        descripcion: "Obra escultórica y vista general del proyecto urbano Parques del Río."
      }
    ],
    ubicacion: "Medellín, Antioquia",
    acceso: "Ubicado a ambos lados del río Medellín, accesible desde el centro, Laureles y barrios aledaños. Entradas peatonales, ciclorrutas y portales en la avenida Regional.",
    datos: [
      "Proyecto de revitalización con 71.800 m² de espacio público nuevo.",
      "cientos de árboles nativos y decenas de miles de m² de zonas verdes",
      "Inversión: 198 mil millones de pesos (primera etapa, 2016-2018).",
      "Recuperación ambiental del río y reducción de contaminación.",
    ],
    historia: "El río Medellín fue históricamente símbolo de contaminación y segregación urbana. Parques del Río convierte el corredor en destino de naturaleza, deporte y bienestar, rediseñando el paisaje urbano.",
    impacto: "Mejora drásticamente la calidad ambiental y social del borde del río. Genera espacios de integración ciudadana. Marca tendencia de recuperar ríos urbanos en América Latina.",
    curiosidades: [
      "Incluye la escultura 'Montaña Medellín', de 10 metros de altura, obra de Ugo Rondinone, símbolo de esperanza y convivencia.",
      "Primer parque lineal en recuperar un río urbano en Colombia.",
      "Proyecto a 10 años con múltiples fases y expansión en curso."
    ],
    innovacion: "Diseño paisajístico de vanguardia, estrategias de bioingeniería y manejo sostenible del agua.",
    importancia: "Cardo ambiental de la ciudad, mejora calidad de vida y aporta a la salud pública e integración urbana.",
    cobertura: "Atraviesa el corazón de Medellín, conecta norte/sur, barrios y zonas industriales.",
    relevancia_academica: "Caso ejemplar de urbanismo sostenible y espacios públicos de nueva generación."
  }
];




// Generate lugar cards
function generateLugarCards() {
  const grid = document.getElementById('lugaresGrid');
  
  lugares.forEach((lugar, index) => {
    const card = document.createElement('div');
    card.className = 'lugar-card';
    card.onclick = () => openLugarModal(lugar);
    
    card.innerHTML = `
      <div class="lugar-icon">
        <i class="fas ${lugar.icono}"></i>
      </div>
      <h3>${lugar.nombre}</h3>
      <div class="lugar-ubicacion">
        <i class="fas fa-map-marker-alt"></i>
        <span>${lugar.ubicacion}</span>
      </div>
      <p class="lugar-preview">${lugar.datos[0]}</p>
      <div class="ver-mas-btn">
        <span>Ver más detalles</span>
        <i class="fas fa-arrow-right"></i>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// Modal expandido con muchas más secciones e imágenes
function openLugarModal(lugar) {
  const modal = document.getElementById('lugarModal');
  const modalBody = document.getElementById('modalBody');
  
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';

  // Imágenes reales
  let imagenesHTML = '';
  if (lugar.imagenes && lugar.imagenes.length > 0) {
    imagenesHTML = `<div class="modal-section"><h3><i class='fas fa-image'></i> Imágenes Reales</h3>
      <div class="modal-imagenes">${lugar.imagenes.map(img => `
        <figure class="modal-imagen-fig">
          <img src="${img.url}" alt="${img.descripcion}" class="modal-imagen-real" loading="lazy" />
          <figcaption class="modal-imagen-caption">${img.descripcion}</figcaption>
        </figure>
      `).join('')}</div>
    </div>`;
  }

  // Sección de ubicación y acceso
  const ubicacionHTML = `<div class="modal-section">
    <h3><i class="fas fa-location-dot"></i> Ubicación y Acceso</h3>
    <div class="lugar-ubicacion-acceso">
        <p><strong>📍 Ubicación:</strong> ${lugar.ubicacion}</p>
        ${lugar.acceso ? `<p><strong>🚦 Acceso:</strong> ${lugar.acceso}</p>` : ''}
    </div>
  </div>`;

  // Información general / historia
  const historiaHTML = lugar.historia ? `<div class="modal-section">
    <h3><i class="fas fa-landmark"></i> Información General / Historia</h3>
    <p>${lugar.historia}</p>
  </div>` : '';

  // Datos y estadísticas
  const datosHTML = `<div class="modal-section">
    <h3><i class="fas fa-chart-bar"></i> Datos y Estadísticas</h3>
    <ul class="datos-list">
      ${lugar.datos && lugar.datos.length > 0 ? lugar.datos.map(dato => `<li>${dato}</li>`).join('') : '<li>No hay datos</li>'}
    </ul>
  </div>`;

  // Datos curiosos
  const curiosidadesHTML = lugar.curiosidades && lugar.curiosidades.length > 0 ? `<div class="modal-section">
    <h3><i class="fas fa-star"></i> Datos Curiosos</h3>
    <ul class="datos-list">
      ${lugar.curiosidades.map(curio => `<li>${curio}</li>`).join('')}
    </ul>
  </div>` : '';

  // Impacto social
  const impactoHTML = lugar.impacto ? `<div class="modal-section">
    <h3><i class="fas fa-people-carry"></i> Impacto Social / Transformación</h3>
    <p>${lugar.impacto}</p>
  </div>` : '';

  // Innovación / características técnicas
  const innovacionHTML = lugar.innovacion ? `<div class="modal-section">
    <h3><i class="fas fa-rocket"></i> Innovación / Características Técnicas</h3>
    <p>${lugar.innovacion}</p>
  </div>` : '';

  // Alcance y cobertura
  const coberturaHTML = lugar.cobertura ? `<div class="modal-section">
    <h3><i class="fas fa-globe"></i> Alcance y Cobertura</h3>
    <p>${lugar.cobertura}</p>
  </div>` : '';

  // Importancia estratégica
  const importanciaHTML = lugar.importancia ? `<div class="modal-section">
    <h3><i class="fas fa-lightbulb"></i> Importancia Estratégica</h3>
    <p>${lugar.importancia}</p>
  </div>` : '';

  // Relevancia académica
  const relevanciaHTML = lugar.relevancia_academica ? `<div class="modal-section">
    <h3><i class="fas fa-graduation-cap"></i> Relevancia Académica</h3>
    <p>${lugar.relevancia_academica}</p>
  </div>` : '';

  // Estructura del modal
  modalBody.innerHTML = `
    <div class="modal-header">
      <div class="modal-icon">
        <i class="fas ${lugar.icono}"></i>
      </div>
      <div>
        <h2>${lugar.nombre}</h2>
        <div class="modal-ubicacion">
          <i class="fas fa-map-marker-alt"></i>
          <span>${lugar.ubicacion}</span>
        </div>
      </div>
    </div>
    <div class="modal-body">
      ${imagenesHTML}
      ${ubicacionHTML}
      ${historiaHTML}
      ${datosHTML}
      ${curiosidadesHTML}
      ${impactoHTML}
      ${innovacionHTML}
      ${coberturaHTML}
      ${importanciaHTML}
      ${relevanciaHTML}
    </div>
  `;

  modal.classList.add('active');
}

// Generic modal functions
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }
}

// Close modal when clicking outside
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.classList.remove('active');
    // Prevent body scroll when modal is closed
    document.body.style.overflow = 'auto';
  }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


// Close modal with ESC key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const activeModal = document.querySelector('.modal.active');
    if (activeModal) {
      activeModal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }
});

// Timeline Data
const timelineData = [
  { año: "1979", titulo: "Creación del Metro de Medellín", descripcion: "Visión de transformación urbana. Se inicia el proyecto que cambiaría Medellín.", icono: "fa-flag" },
  { año: "1985", titulo: "Aeropuerto José María Córdova", descripcion: "Inauguración del aeropuerto, conectando la región con el mundo. Hub de exportación de flores.", icono: "fa-plane" },
  { año: "1995", titulo: "Inauguración del Metro", descripcion: "Revolución en movilidad y cultura ciudadana. Símbolo de resiliencia y transformación.", icono: "fa-subway" },
  { año: "2004", titulo: "Primera línea de Metrocable", descripcion: "Innovación mundial en transporte público. Conecta barrios montañosos en 7 minutos.", icono: "fa-cable-car" },
  { año: "2012", titulo: "Escaleras eléctricas en Comuna 13", descripcion: "Símbolo de inclusión social. Primera en Latinoamérica en barrio popular.", icono: "fa-bolt" },
  { año: "2013", titulo: "Medellín, Ciudad Más Innovadora", descripcion: "Reconocimiento mundial WSJ y Citi. Transformación urbana y social reconocida globalmente.", icono: "fa-award" },
  { año: "2016", titulo: "Inauguración del Tranvía moderno", descripcion: "Resurgimiento después de 70 años sin servicio. Rescate patrimonial con tecnología moderna.", icono: "fa-train-tram" },
  { año: "2025", titulo: "Expansión continua", descripcion: "Expansión con enfoque en sostenibilidad y movilidad verde. Transformación completada.", icono: "fa-leaf" },
];

const medellinInfo = [
  { titulo: "Geografía", icono: "fa-mountain", descripcion: "Ubicada en el Valle de Aburrá, a 1495 m.s.n.m., rodeada por montañas que forman un paisaje espectacular." },
  { titulo: "Clima", icono: "fa-thermometer-half", descripcion: "Temperatura promedio de 22°C todo el año, conocida como 'Ciudad de la Eterna Primavera'." },
  { titulo: "Población", icono: "fa-users", descripcion: "Más de 2.5 millones de habitantes en el área metropolitana, segunda ciudad más poblada de Colombia." },
  { titulo: "Economía", icono: "fa-industry", descripcion: "Centro industrial, tecnológico y de innovación. Hub de startups y transformación digital en Latinoamérica." },
  { titulo: "Cultura", icono: "fa-palette", descripcion: "Feria de las Flores, Festival Internacional de Poesía, música y arte urbano reconocidos mundialmente." },
  { titulo: "Reconocimientos", icono: "fa-trophy", descripcion: "Ciudad más innovadora del mundo 2013. Premio Lee Kuan Yew World City Prize 2016." },
];

const aprendizaje = [
  { titulo: "Planificación Urbana", icono: "fa-city", items: ["Diseño de sistemas de transporte multimodal","Integración de movilidad y desarrollo urbano","Análisis de flujos y demanda"] },
  { titulo: "Sostenibilidad", icono: "fa-leaf", items: ["Transporte de bajas emisiones","Impacto ambiental y huella de carbono","Movilidad verde y activa"] },
  { titulo: "Impacto Social", icono: "fa-people-group", items: ["Inclusión y equidad en movilidad","Transformación de comunidades","Desarrollo comunitario integrado"] },
  { titulo: "Tecnología", icono: "fa-microchip", items: ["Sistemas de información de transporte","IoT y sensores urbanos","Big data en movilidad"] },
  { titulo: "Gestión Operativa", icono: "fa-chart-line", items: ["Administración de flotas","Optimización de rutas","Indicadores de desempeño (KPIs)"] },
  { titulo: "Políticas Públicas", icono: "fa-handshake", items: ["Marco regulatorio de transporte","Participación ciudadana","Financiamiento de proyectos"] },
];

const cifras = [
  { numero: "27", etiqueta: "Estaciones de Metro", icono: "fa-train" },
  { numero: "1.2M", etiqueta: "Pasajeros Diarios", icono: "fa-users" },
  { numero: "1.280", etiqueta: "Árboles Plantados", icono: "fa-tree" },
  { numero: "71.800m²", etiqueta: "Espacio Público", icono: "fa-building" },
  { numero: "14.4M", etiqueta: "Pasajeros Aeropuerto", icono: "fa-plane" },
  { numero: "+10.000", etiqueta: "Empleos Directos", icono: "fa-briefcase" },
];

const curiosidadesVis = [
  { titulo: "Altura", icono: "fa-mountain", descripcion: "El Aeropuerto José María Córdova está a 2.137 metros sobre el nivel del mar, uno de los más altos de Colombia." },
  { titulo: "Ahorro de Tiempo", icono: "fa-clock", descripcion: "El Metrocable redujo viajes de 2 horas a solo 7 minutos en las zonas de ladera." },
  { titulo: "Historia del Tranvía", icono: "fa-horse", descripcion: "El primer tranvía en 1887 era tirado por mulas. Resurgió en 2016 con tecnología moderna." },
  { titulo: "Gigante del Aire", icono: "fa-plane-arrival", descripcion: "El aeropuerto realizó pruebas con el Airbus A380, el avión de pasajeros más grande del mundo, en 2006." },
  { titulo: "Arte Urbano", icono: "fa-paint-brush", descripcion: "Comuna 13 es la galería de arte al aire libre más grande de Colombia, símbolo de transformación social." },
  { titulo: "Única en Colombia", icono: "fa-star", descripcion: "El Tranvía de Medellín es único en Colombia por usar llantas de goma en lugar de ruedas metálicas." },
];

// Timeline rendering
function generateTimeline() {
  const timeline = document.getElementById('timelineContainer');
  timeline.innerHTML = timelineData.map((item, idx) => `
    <div class="timeline-item">
      <div class="timeline-content" style="${(idx % 2 === 0) ? 'margin-right:auto;' : 'margin-left:auto;'}">
        <div class="timeline-year">${item.año}</div>
        <div class="timeline-title"><i class="fas ${item.icono}"></i> ${item.titulo}</div>
        <div class="timeline-description">${item.descripcion}</div>
      </div>
      <div class="timeline-icon" style="top:calc(50% - 30px);">
        <i class="fas ${item.icono}"></i>
      </div>
    </div>
  `).join('');
}

// Medellín info rendering
function generateMedellinInfo() {
  const grid = document.getElementById('medellinGrid');
  grid.innerHTML = medellinInfo.map(item => `
    <div class="medellin-card">
      <div class="medellin-card-icon">
        <i class="fas ${item.icono}"></i>
      </div>
      <h3>${item.titulo}</h3>
      <p>${item.descripcion}</p>
    </div>
  `).join('');
}

// Learning section rendering
function generateLearningCards() {
  const grid = document.getElementById('learningGrid');
  grid.innerHTML = aprendizaje.map(item => `
    <div class="learning-card">
      <div class="learning-card-header">
        <div class="learning-card-icon"><i class="fas ${item.icono}"></i></div>
        <h3>${item.titulo}</h3>
      </div>
      <ul class="learning-items">
        ${item.items.map(sub => `<li>${sub}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

// Stats section rendering
function generateStats() {
  const grid = document.getElementById('statsGrid');
  grid.innerHTML = cifras.map(item => `
    <div class="stat-card">
      <div class="stat-icon"><i class="fas ${item.icono}"></i></div>
      <div class="stat-number">${item.numero}</div>
      <div class="stat-label">${item.etiqueta}</div>
    </div>
  `).join('');
}

// Curiosities section rendering
function generateCuriosities() {
  const grid = document.getElementById('curiositiesGrid');
  grid.innerHTML = curiosidadesVis.map(item => `
    <div class="curiosity-card">
      <div class="curiosity-card-icon">
        <i class="fas ${item.icono}"></i>
      </div>
      <h3>${item.titulo}</h3>
      <p>${item.descripcion}</p>
    </div>
  `).join('');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  generateTimeline();
  generateMedellinInfo();
  generateLearningCards();
  generateStats();
  generateCuriosities();
  generateLugarCards();
  
  // Add smooth scroll to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && !href.includes('onclick')) {
        e.preventDefault();
        const targetId = href.substring(1);
        scrollToSection(targetId);
      }
    });
  });
});