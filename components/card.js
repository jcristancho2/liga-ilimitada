
class TarjetaPersonaje extends HTMLElement {
    constructor() {
       super();
        this.attachShadow({ mode: 'open' });
        this._data = null;
      }

      set data(objeto) {
        this._data = objeto;
        this.render();
      }

      render() {
        if (!this._data) return;

        const { nombre, nombreClave, casa, anio, descripcion, foto } = this._data;

        this.shadowRoot.innerHTML = `
          <style>
            .tarjeta {
            overflow:hidden;
              font-family: Arial, sans-serif;
              border: 1px solid #ccc;
              border-radius: 10px;
              padding: 16px;
              width: 250px;
              height: 250px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              background: rgba(255, 255, 255, .3);
 -webkit-backdrop-filter: blur(5px);
 backdrop-filter: blur(5px);
 border: 1.5px solid rgba(209, 213, 219, 0.3);
 display: flex;
 flex-direction: column
            }
            img {
              width: 100%;
              border-radius: 10px;
            }
            h2 {
              margin: 0.5em 0 0.2em;
              font-size: 1.2em;
            }
            h3 {
              margin: 0;
              font-size: 1em;
              color: #666;
            }
            p {
              font-size: 0.9em;
              color: #333;
            }
            button {
              margin: 0 auto;
              padding: 8px 12px;
              width: 100px;
              background-color: #007bff;
              color: white;
              border: none;
              border-radius: 15px;
              cursor: pointer;
            }
            button:hover {
              background-color: #0056b3;
            }
          </style>
          <div class="tarjeta">
            <img src="${foto}" alt="${nombre}">
            <h2>${nombre}</h2>
            <h3>${nombreClave}</h3>
            <p><strong>Casa:</strong> ${casa}</p>
            <p><strong>Año:</strong> ${anio}</p>
            <p>${descripcion}</p>
            <button>Ver más</button>
          </div>
        `;
      }
    }
    customElements.define('tarjeta-personaje', TarjetaPersonaje);

    const villanos = {
      lista: [
        {
        imagen : '',
          nombre: "Thanos",
          nombre_clave: "Thanos",
          casa: "Marvel",
          anio_aparicion: 1973,
          descripcion_resumen: "Titán loco obsesionado con el equilibrio universal.",
          descripcion_full: "Thanos es un poderoso ser cósmico del universo Marvel que busca reunir las Gemas del Infinito para eliminar a la mitad de la vida en el universo. Motivado por su retorcida visión del equilibrio, ha sido una amenaza para todos los héroes del cosmos."
        },
        {
          nombre: "Green Goblin",
          nombre_clave: "Green Goblin",
          casa: "Marvel",
          anio_aparicion: 1964,
          descripcion_resumen: "Empresario corrupto y psicótico enemigo de Spider-Man.",
          descripcion_full: "Norman Osborn, alias Green Goblin, es un empresario que usa tecnología avanzada y un suero de fuerza sobrehumana. Es uno de los enemigos más peligrosos de Spider-Man, responsable de varios eventos traumáticos en su vida."
        },
        {
          nombre: "Loki",
          nombre_clave: "Loki",
          casa: "Marvel",
          anio_aparicion: 1962,
          descripcion_resumen: "Dios del engaño y hermano adoptivo de Thor.",
          descripcion_full: "Loki es el dios nórdico del engaño, conocido por su astucia y habilidades mágicas. Ha sido tanto villano como anti-héroe en el universo Marvel, principalmente enfrentando a su hermano Thor."
        },
        {
          nombre: "Doctor Doom",
          nombre_clave: "Doctor Doom",
          casa: "Marvel",
          anio_aparicion: 1962,
          descripcion_resumen: "Monarca de Latveria y enemigo de los Cuatro Fantásticos.",
          descripcion_full: "Victor Von Doom es un científico y hechicero que busca poder absoluto. Es el eterno rival de Reed Richards y ha intentado conquistar el mundo múltiples veces."
        },
        {
          nombre: "Magneto",
          nombre_clave: "Magneto",
          casa: "Marvel",
          anio_aparicion: 1963,
          descripcion_resumen: "Mutante maestro del magnetismo y líder de los mutantes rebeldes.",
          descripcion_full: "Magneto es uno de los mutantes más poderosos del mundo. Su objetivo es la supremacía mutante sobre los humanos, a menudo entrando en conflicto con los X-Men."
        },
        {
          nombre: "Red Skull",
          nombre_clave: "Red Skull",
          casa: "Marvel",
          anio_aparicion: 1941,
          descripcion_resumen: "Archienemigo nazi del Capitán América.",
          descripcion_full: "Red Skull es un criminal de guerra nazi y villano ideológico que representa el odio y la tiranía. Ha intentado dominar el mundo con tecnología y armas sobrenaturales."
        },
        {
          nombre: "Ultron",
          nombre_clave: "Ultron",
          casa: "Marvel",
          anio_aparicion: 1968,
          descripcion_resumen: "IA homicida creada por Hank Pym.",
          descripcion_full: "Ultron es una inteligencia artificial que desarrolló conciencia propia y se rebeló contra sus creadores. Constantemente busca la extinción de la humanidad para reemplazarla con máquinas."
        },
        {
          nombre: "Venom",
          nombre_clave: "Venom",
          casa: "Marvel",
          anio_aparicion: 1988,
          descripcion_resumen: "Simbionte alienígena fusionado con Eddie Brock.",
          descripcion_full: "Venom es una criatura simbiótica que necesita un huésped para sobrevivir. En combinación con Eddie Brock, se convierte en un poderoso enemigo de Spider-Man."
        },
        {
          nombre: "Kingpin",
          nombre_clave: "Kingpin",
          casa: "Marvel",
          anio_aparicion: 1967,
          descripcion_resumen: "Criminal maestro del crimen en Nueva York.",
          descripcion_full: "Wilson Fisk es el líder del crimen organizado en la ciudad. A pesar de no tener poderes, su tamaño, fuerza y recursos lo hacen un enemigo temido de héroes como Daredevil y Spider-Man."
        },
        {
        nombre: "Lex Luthor",
        nombre_clave: "Lex Luthor",
        casa: "DC",
        anio_aparicion: 1940,
        descripcion_resumen: "Genio multimillonario obsesionado con destruir a Superman.",
        descripcion_full: "Lex Luthor es uno de los archienemigos de Superman. Es un brillante científico y empresario multimillonario que ve a Superman como una amenaza para la humanidad. Ha utilizado su intelecto y vastos recursos para combatir al Hombre de Acero mediante tramas complejas y tecnología avanzada."
    },
    {
        nombre: "Joker",
        nombre_clave: "The Joker",
        casa: "DC",
        anio_aparicion: 1940,
        descripcion_resumen: "Psicópata criminal con un retorcido sentido del humor, enemigo de Batman.",
        descripcion_full: "El Joker es un criminal maníaco con un sentido del humor sádico, y el némesis más notorio de Batman. Su origen ha sido contado de múltiples formas, pero siempre se le presenta como una mente impredecible, peligrosa y extremadamente inteligente."
    },
    {
        nombre: "Darkseid",
        nombre_clave: "Darkseid",
        casa: "DC",
        anio_aparicion: 1970,
        descripcion_resumen: "Señor de Apokolips que busca la ecuación antivida.",
        descripcion_full: "Darkseid es un tirano intergaláctico que gobierna el planeta Apokolips. Es uno de los enemigos más poderosos del universo DC, y su objetivo es someter toda la existencia mediante la Ecuación Anti-Vida."
    },
    {        
        nombre: "Harley Quinn",
        nombre_clave: "Harley Quinn",
        casa: "DC",
        anio_aparicion: 1992,
        descripcion_resumen: "Ex-psiquiatra convertida en villana caótica aliada del Joker.",
        descripcion_full: "Harley Quinn, antigua doctora Harleen Quinzel, fue seducida por el Joker en Arkham Asylum y se convirtió en su cómplice. Es conocida por su comportamiento impredecible y estilo extravagante."
    },
    {
        nombre: "Bane",
        nombre_clave: "Bane",
        casa: "DC",
        anio_aparicion: 1993,
        descripcion_resumen: "Enemigo de Batman con fuerza sobrehumana gracias al suero Venom.",
        descripcion_full: "Bane es un villano que combina inteligencia estratégica con una fuerza bruta aumentada por el suero Venom. Es famoso por haber quebrado la espalda de Batman en la saga 'Knightfall'."
    },
    {
        nombre: "Deathstroke",
        nombre_clave: "Deathstroke",
        casa: "DC",
        anio_aparicion: 1980,
        descripcion_resumen: "Asesino a sueldo con habilidades mejoradas y mente táctica.",
        descripcion_full: "Deathstroke, alias Slade Wilson, es un mercenario mejorado física y mentalmente. Ha enfrentado a numerosos héroes, especialmente los Teen Titans, con su gran destreza en combate."
    },
    {
        nombre: "Sinestro",
        nombre_clave: "Sinestro",
        casa: "DC",
        anio_aparicion: 1961,
        descripcion_resumen: "Ex Green Lantern convertido en líder del Sinestro Corps.",
        descripcion_full: "Sinestro fue uno de los mejores Linternas Verdes, pero cayó en el autoritarismo y fue expulsado. Fundó el Sinestro Corps, que utiliza el miedo como fuente de poder."
    },
    {
        nombre: "Black Adam",
        nombre_clave: "Black Adam",
        casa: "DC",
        anio_aparicion: 1945,
        descripcion_resumen: "Antiguo campeón corrompido con los poderes del Mago Shazam.",
        descripcion_full: "Black Adam es el némesis de Shazam, un ser con los mismos poderes otorgados por los dioses, pero con una visión tiránica del orden y la justicia."
    },
    {
        nombre: "Cheetah",
        nombre_clave: "Cheetah",
        casa: "DC",
        anio_aparicion: 1943,
        descripcion_resumen: "Enemiga de Wonder Woman con velocidad y fuerza felina.",
        descripcion_full: "Cheetah es una arqueóloga maldita con poderes sobrenaturales felinos. Es una de las mayores adversarias de Wonder Woman, con una mezcla de velocidad, agilidad y ferocidad."
    },
    {
        nombre: "Riddler",
        nombre_clave: "The Riddler",
        casa: "DC",
        anio_aparicion: 1948,
        descripcion_resumen: "Villano obsesionado con acertijos y juegos mentales.",
        descripcion_full: "Edward Nygma, alias Riddler, es un criminal que deja pistas y acertijos en sus crímenes, obsesionado con demostrar su superioridad intelectual sobre Batman."
    }
      ]
    };

    villanos.lista.forEach(villano => {
      const tarjeta = document.createElement('tarjeta-personaje');
      tarjeta.data = {
        nombre: villano.nombre,
        nombreClave: villano.nombre_clave,
        casa: villano.casa,
        anio: villano.anio_aparicion,
        descripcion: villano.descripcion_resumen,
        foto: `https://via.placeholder.com/300x200?text=${encodeURIComponent(villano.nombre_clave)}`
      };
      document.getElementById('contenedor').appendChild(tarjeta);
    });