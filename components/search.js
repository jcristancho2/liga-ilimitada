
class SearchBox extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `

        <header>
          <div class="titulo">
            <h1>villans hub</h1>
          </div>
          <div class="search">
            <p>buscar</p>
            <input type="text" id="searchInput">
            <button type="button" id="searchButton">
              <span class="material-symbols-outlined">
                search
              </span>
            </button>
          </div>
        </header>
      `;
  
      const style = document.createElement('style');
      style.textContent = `
        header {
          background-color: transparent;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100vw;
        }
  
        .titulo{
          margin: 0;
          text-align: center;
          clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
          width: 100%;
          background-color: #001f3fce;
        }
        .titulo h1 {
          margin: 0;
          font-size: 1.5em;
          text-transform: uppercase;
          padding:20px;
        }
  
        .search {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          background-color: #001f3fce;
          padding: 10px 15px;
          border-radius: 12px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          width: 90%;
          margin: 20px auto;
          overflow: hidden;
        }
  
        .search p {
          margin: 0;
          font-weight: bold;
          color: #fff;
        }
  
        .search input[type="text"] {
          flex-grow: 1;
          padding: 8px 12px;
          border: none;
          border-radius: 8px;
          outline: none;
          background-color: #fff;
          font-size: 14px;
        }
  
        .search button {
          background-color: transparent;
          border:none;
        }
        .search button .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          display: inline-block;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          white-space: nowrap;
          direction: ltr;
          color:#fff;
        }
  
        .search button:hover {
          background-color: #0039b388;
        }
  
        .search .material-symbols-outlined {
          font-size: 20px; }
      `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);

    const input = shadow.getElementById('searchInput');
    const button = shadow.getElementById('searchButton');

    let debounceTimeout;
    const handleSearch = () => {
      this.dispatchEvent(new CustomEvent('search-villains', {
        detail: input.value,
        bubbles: true,
      }));
    };

    input.addEventListener('input', () => {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(handleSearch, 300);
    });

    button.addEventListener('click', () => {
      input.value = '';
      handleSearch();
    });
  }
}

customElements.define('search-box', SearchBox);

document.addEventListener('search-villains', (event) => {
  const contenedor = document.getElementById('contenedor');
  const termino = event.detail.toLowerCase();
  const filtrados = villanos.lista.filter(v => 
    v.nombre.toLowerCase().includes(termino) ||
    v.nombre_clave.toLowerCase().includes(termino) ||
    v.casa.toLowerCase().includes(termino)
    
  );

  contenedor.innerHTML = '';
  filtrados.forEach(villano => {
    const tarjeta = document.createElement('tarjeta-personaje');
    tarjeta.data = {
      nombre: villano.nombre,
      nombreClave: villano.nombre_clave,
      casa: villano.casa,
      anio: villano.anio_aparicion,
      descripcion: villano.descripcion_resumen,
      foto: villano.imagen
    };
    contenedor.appendChild(tarjeta);
  });
});
