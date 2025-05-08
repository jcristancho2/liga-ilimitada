    // 1. Definición del Web Component
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
              font-family: Arial, sans-serif;
              border: 1px solid #ccc;
              border-radius: 10px;
              padding: 16px;
              max-width: 300px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
              margin-top: 10px;
              padding: 8px 12px;
              background-color: #007bff;
              color: white;
              border: none;
              border-radius: 5px;
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

    // 2. Registrar el componente
    customElements.define('tarjeta-personaje', TarjetaPersonaje);

    // 3. Crear el objeto literal con la información
    const personaje = {
      nombre: "Harry Potter",
      nombreClave: "El Elegido",
      casa: "Gryffindor",
      anio: 1991,
      descripcion: "El niño que sobrevivió, conocido por su valentía y amistad.",
      foto: "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"
    };

    // 4. Crear e insertar el componente en el DOM
    const tarjeta = document.createElement('tarjeta-personaje');
    tarjeta.data = personaje;
    document.getElementById('contenedor').appendChild(tarjeta);