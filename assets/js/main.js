/*---- Menu ----*/
document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function (e) {
            e.stopPropagation(); // evita que se dispare el click del document
            navbarToggle.classList.toggle('is-active');
            navbarMenu.classList.toggle('is-active');
            const isExpanded = navbarToggle.getAttribute('aria-expanded') === 'true';
            navbarToggle.setAttribute('aria-expanded', !isExpanded);
        });

        // Cerrar al hacer click en cualquier parte fuera del menú o toggle
        document.addEventListener('click', function (e) {
            if (
                navbarMenu.classList.contains('is-active') && // menú abierto
                !navbarMenu.contains(e.target) && // click fuera del menú
                !navbarToggle.contains(e.target) // click fuera del botón hamburguesa
            ) {
                navbarToggle.classList.remove('is-active');
                navbarMenu.classList.remove('is-active');
                navbarToggle.setAttribute('aria-expanded', false);
            }
        });
    }
});


/*---- Dinamismo entre botones ----*/
document.addEventListener('DOMContentLoaded', () => {
    const cities = {
        toluca: {
            title: "Toluca",
            date: "27 SEPTIEMBRE 2:00 P.M.",
            ubi: "CENTRO DINÁMICO PEGASO",
            logo: "./assets/img/TOLUCA-LOGO.png",
            bg: "bg-color-red",
            mapa: "./assets/maps/Mapa-toluca/genially.html",
            imgMapa: "./assets/maps/Mapa-toluca/mapa-toluca.jpg",
            direccion: `Dirección: <br>
                Foro Pegaso, Carr. Toluca-Naucalpan, San Mateo Otzacatipan, <br>
                Estado de México, México.`,
            artists: [
                { name: "TIMO", img: "./assets/img/TOLUCA-TIMO.jpg" },
                { name: "PISO 21", img: "./assets/img/TOLUCA-PISO-21.jpg" },
                { name: "DSTANCE", img: "./assets/img/TOLUCA-DSTANCE.jpg" }
            ],
            cardsIgm: {
                tacosImg: "./assets/img/tacos.jpg",
                costillasImg: "./assets/img/costilla.jpg",
                hamburguesaImg: "./assets/img/hamburguesa.jpg",
                postresImg: "./assets/img/galletas.jpg",
            },
            textClasses: {
                ciudadInfo: "text-color-white",
                ciudadSelectTitle: "color-title-black",
                artistTitle: "text-color-white",
                artistTitleDown: "text-color-black",
                artistSubtitle: "color-title-white",
                restaurantesTitle: "color-title-white",
                restaurantesSubtitle: "color-title-black",
            },
            waze: "https://ul.waze.com/ul?place=ChIJ-ZGhF9h00oURKemm5RRAwbY&ll=19.37051080%2C-99.56385390&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
            maps: "https://maps.app.goo.gl/kgBARbKFzMdTcr629",
            boletos: "https://coca-cola-food-fest-2025-toluca.boletia.com/?billboard=3291",
        },
        puebla: {
            title: "Puebla",
            date: "19 OCTUBRE 2:00 P.M.",
            ubi: "LOS FUERTES - PLAZA CÍVICA DE LA VICTORIA",
            logo: "./assets/img/PUEBLA-LOGO.png",
            bg: "bg-color-white",
            mapa: "./assets/maps/Mapa-puebla/genially.html",
            imgMapa: "./assets/maps/Mapa-puebla/mapa-puebla.jpg",
            direccion: `Dirección: <br>
                Plaza Cívica de La Victoria, Cívica 5 de Mayo, <br>
                Puebla de Zaragoza, Puebla, México`,
            artists: [
                { name: "TIMO", img: "./assets/img/PUEBLA-TIMO.jpg" },
                { name: "MAU Y RICKY", img: "./assets/img/PUEBLA-MAU-Y-RICKY.jpg" },
                { name: "LOS AMIGOS INVISIBLES", img: "./assets/img/PUEBLA-LOS-AMIGOS.jpg" }
            ],
            cardsIgm: {
                tacosImg: "./assets/img/tacos.jpg",
                costillasImg: "./assets/img/costilla.jpg",
                hamburguesaImg: "./assets/img/hamburguesa.jpg",
                postresImg: "./assets/img/galletas.jpg",
            },
            textClasses: {
                ciudadInfo: "text-color-black",
                ciudadSelectTitle: "color-title-red",
                artistTitle: "text-color-red",
                artistTitleDown: "color-title-black",
                artistSubtitle: "color-title-red",
                restaurantesTitle: "color-title-red",
                restaurantesSubtitle: "color-title-black",
            },
            waze: "https://ul.waze.com/ul?place=ChIJuz7-Lv7Az4URRLlSaHRsW-4&ll=19.05346050%2C-98.18073750&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
            maps: "https://maps.app.goo.gl/nUgoQoZm9xJzrPhX9",
            boletos: "https://coca-cola-food-fest-2025-puebla.boletia.com/?billboard=3291",
        },
        cdmx: {
            title: "CDMX",
            date: "20 SEPTIEMBRE 2:00 P.M.",
            ubi: "ESTADIO FRAY NANO",
            logo: "./assets/img/CDMX-LOGO.png",
            bg: "bg-color-black",
            mapa: "./assets/maps/mapa-cdmx/genially.html",
            mapaMob: "./assets/maps/mapa-mob3/genially.html",
            imgMapa: "./assets/maps/Mapa-cdmx/mapa-cdmx.jpg",
            direccion: `Dirección: <br>
                Estadio Fray Nano, Fernando Iglesias Calderón, Jardín Balbuena, <br>
                Ciudad de México, CDMX, México.`,
            artists: [
                { name: "INTOCABLE", img: "./assets/img/intocable.jpg" },
                { name: "MOTEL", img: "./assets/img/motel.jpg" },
                { name: "MATISSE", img: "./assets/img/matisse.jpg" }
            ],
            cardsIgm: {
                tacosImg: "./assets/img/cdmx-taco.jpg",
                costillasImg: "./assets/img/cdmx-costillas.jpg",
                hamburguesaImg: "./assets/img/cdmx-hamburguesa.jpg",
                postresImg: "./assets/img/cdmx-postres.jpg",
            },
            textClasses: {
                ciudadInfo: "text-color-white",
                ciudadSelectTitle: "color-title-red",
                artistTitle: "text-color-red",
                artistTitleDown: "text-color-white",
                artistSubtitle: "color-title-white",
                restaurantesTitle: "color-title-red",
                restaurantesSubtitle: "color-title-white",
            },
            waze: "https://ul.waze.com/ul?place=ChIJ-VOrkpj-0YURixXUrTZIKpk&ll=19.41011910%2C-99.10883960&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
            maps: "https://maps.app.goo.gl/NWHF22N2uM61f6sNA",
            boletos: "https://coca-cola-food-fest-2025.boletia.com/",
        }
    };

    // Referencias
    const logoCiudad = document.querySelector(".ciudad-logo__img");
    const logoRestaurantes = document.querySelector(".info-logo__img");
    const artistSubtitle = document.querySelector(".artist-subtitle");
    const artistCardsContainer = document.querySelector(".artist-cards-container");
    const mapaIframe = document.querySelector(".mapa-iframe");
    const ubicacionDireccion = document.querySelector(".ubicacion-info__direccion");

    // Secciones que cambian de fondo
    const sectionCiudad = document.querySelector(".ciudad");
    const sectionArtist = document.querySelector(".artist");
    const sectionRestaurantes = document.querySelector(".restaurantes");

    // Botones originales de la landing page
    const cityButtons = document.querySelectorAll(".select-btn");
    // Nuevos elementos del menú desplegable
    const cokeListItems = document.querySelectorAll('#cokeList .cokeList__item');
    // Referencia al botón flotante
    const cokeBtn = document.getElementById('cokeBtn');

    function updateCity(cityKey) {
        const city = cities[cityKey];
        if (!city) return;

        // Logos
        if (logoCiudad) {
            logoCiudad.src = city.logo;
            logoCiudad.alt = `Coca-Cola Food Fest ${city.title} Logo`;
        }
        if (logoRestaurantes) {
            logoRestaurantes.src = city.logo;
            logoRestaurantes.alt = `Logo ${city.title}`;
        }

        // Fecha + ubicación
        if (artistSubtitle) {
            artistSubtitle.innerHTML = `${city.date} <br>${city.ubi}`;
        }

        // Artistas
        if (artistCardsContainer) {
            artistCardsContainer.innerHTML = city.artists.map(artist => `
                <article class="artist-card">
                    <img src="${artist.img}" alt="${artist.name}" class="card-img">
                    <p class="card-title">${artist.name}</p>
                </article>
            `).join("");
        }

        // Mapa
        if (mapaIframe) {
            if (cityKey === "cdmx" && window.innerWidth < 900) {
                mapaIframe.src = city.mapaMob;
            } else {
                mapaIframe.src = city.mapa;
            }
        }

        // Dirección
        if (ubicacionDireccion) {
            ubicacionDireccion.innerHTML = city.direccion;
        }

        // Fondos dinámicos
        [sectionCiudad, sectionArtist, sectionRestaurantes].forEach(section => {
            if (!section) return;
            section.className = section.className
                .split(" ")
                .filter(cls => !cls.startsWith("bg-color-"))
                .join(" ");
            section.classList.add(city.bg);
        });

        // Textos dinámicos
        const textSelectors = {
            ciudadInfo: ".ciudad-info__text",
            ciudadSelectTitle: ".ciudad-select__title",
            artistTitle: ".artist-title",
            artistTitleDown: ".artist-title__down",
            artistSubtitle: ".artist-subtitle",
            restaurantesTitle: ".restaurantes-info__title",
            restaurantesSubtitle: ".restaurantes-subtitle",
        };

        Object.entries(textSelectors).forEach(([key, selector]) => {
            const el = document.querySelector(selector);
            if (el && city.textClasses[key]) {
                const baseClass = selector.replace(".", "");
                el.className = `${baseClass} ${city.textClasses[key]}`;
            }
        });

        // 🎯 Botones activos/inactivos de la landing page (originales)
        cityButtons.forEach(btn => btn.classList.remove("active"));
        const activeBtn = document.querySelector(`.select-btn[data-city="${cityKey}"]`);
        if (activeBtn) activeBtn.classList.add("active");

        cityButtons.forEach(btn => {
            btn.style.border = ""; // Limpia el borde de todos
        });
        if (activeBtn) {
            if (cityKey === "puebla") {
                activeBtn.style.border = "1px solid var(--negro)";
            } else {
                activeBtn.style.border = ""; // Sin borde para otros
            }
        }

        // Actualizar enlaces de Waze, Google Maps y Boletos
        document.querySelector('.waze').setAttribute('href', cities[cityKey].waze);
        document.querySelector('.maps').setAttribute('href', cities[cityKey].maps);
        document.querySelector('.boletos-btn').setAttribute('href', cities[cityKey].boletos);

        // Actualizar enlace de descarga del mapa
        const downloadBtn = document.querySelector('.ubicacion-map__btn');
        if (downloadBtn) {
            downloadBtn.href = city.imgMapa; // La ruta de la imagen del mapa
            const ciudadSlug = city.title.toLowerCase().replace(/\s+/g, '-');
            downloadBtn.setAttribute('download', `mapa-${ciudadSlug}.jpg`);
        }
    }

    // Guarda el contenido original al cargar la página
    const originalCards = [];
    document.querySelectorAll('.restaurante-card').forEach(card => {
        originalCards.push({
            imgSrc: card.querySelector('.restaurante-card__img').src,
            imgAlt: card.querySelector('.restaurante-card__img').alt,
            titleHTML: card.querySelector('.restaurante-card__title').innerHTML
        });
    });

    function updateRestaurantesCards(cityKey) {
        const city = cities[cityKey];
        const cards = document.querySelectorAll('.restaurante-card');
        const cardData = [
            { key: 'tacosImg', alt: 'LOS TACOS', title: 'LOS TACOS' },
            { key: 'costillasImg', alt: 'LAS COSTILLAS', title: 'LAS COSTILLAS' },
            { key: 'hamburguesaImg', alt: 'LAS HAMBURGUESAS', title: 'LAS HAMBURGUESAS' },
            { key: 'postresImg', alt: 'LOS POSTRES', title: 'LOS POSTRES' }
        ];

        cards.forEach((card, i) => {
            const img = card.querySelector('.restaurante-card__img');
            const title = card.querySelector('.restaurante-card__title');
            if (cityKey === 'cdmx') {
                // Restaurar el contenido original para CDMX
                img.src = originalCards[i].imgSrc;
                img.alt = originalCards[i].imgAlt;
                title.innerHTML = originalCards[i].titleHTML;
            } else {
                // Cambia imagen, alt y título para Toluca y Puebla
                img.src = city.cardsIgm[cardData[i].key];
                img.alt = cardData[i].alt;
                title.innerHTML = cardData[i].title;
            }
        });
    }

    // Eventos en botones de la landing page
    cityButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const cityKey = btn.dataset.city;
            updateCity(cityKey);
            updateRestaurantesCards(cityKey);

            // ✨ NUEVA LÍNEA PARA SINCRONIZAR EL TEXTO DEL BOTÓN FLOTANTE
            if (cokeBtn) {
                cokeBtn.textContent = `🌵 Andamos en ${cities[cityKey].title} 📍`;
            }
        });
    });

    // Eventos en los nuevos botones del menú desplegable
    cokeListItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const cityKey = item.dataset.city;
            updateCity(cityKey);
            updateRestaurantesCards(cityKey);

            // Cierra el menú desplegable después de la selección
            const cokeList = document.getElementById('cokeList');
            if (cokeList) {
                // Remover la clase que lo hace visible
                const parentSelector = document.querySelector('.coke-city-selector');
                if (parentSelector) {
                    parentSelector.classList.remove('active-list'); // Asume que tienes una clase para controlar la visibilidad
                }
            }
            // Actualiza el texto del botón principal
            if (cokeBtn) {
                cokeBtn.textContent = `🌵 Andamos en ${cities[cityKey].title} 📍`;
            }
        });
    });

    // Inicializar con CDMX
    updateCity("cdmx");
    updateRestaurantesCards("cdmx");

    // 🔥 Ajuste dinámico de mapa para CDMX en resize
    window.addEventListener('resize', () => {
        const activeBtn = document.querySelector('.select-btn.active');
        const activeMenuItem = document.querySelector('#cokeList .cokeList__item[data-city].active');
        const currentCityKey = activeBtn ? activeBtn.dataset.city : (activeMenuItem ? activeMenuItem.dataset.city : "cdmx");
        
        if (currentCityKey === "cdmx") {
            const city = cities["cdmx"];
            if (mapaIframe) {
                if (window.innerWidth < 900) {
                    mapaIframe.src = city.mapaMob;
                } else {
                    mapaIframe.src = city.mapa;
                }
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const fadeEls = document.querySelectorAll('.fade-in');
    const showOnScroll = () => {
        fadeEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                el.classList.add('visible');
            }
        });
    };
    showOnScroll();
    window.addEventListener('scroll', showOnScroll);
});

const patternContainer = document.getElementById('pattern-container');

// Crea un objeto MediaQueryList
const mediaQuery = window.matchMedia('(max-width: 900px)');

// Función que se ejecutará cuando el tamaño de la pantalla cambie
function handleScreenChange(e) {
    if (e.matches) {
        // La pantalla es menor o igual a 900px
        patternContainer.innerHTML = `
            <section class="pattern">
                <img src="./assets/img/patron-horizontal.svg" alt="Patron" class="pattern-img">
            </section>
        `;
    } else {
        // La pantalla es mayor a 900px
        patternContainer.innerHTML = `
            <div class="hero-pattern"></div>
        `;
    }
}

// Llama a la función al cargar la página por primera vez
handleScreenChange(mediaQuery);

// Añade un "listener" para cuando la media query cambie
mediaQuery.addListener(handleScreenChange);