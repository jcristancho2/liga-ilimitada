
class SearchBox extends HTMLElement {
  constructor() {
    super(); 

    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <p>Buscar</p>
      <input type="text" placeholder=" " />
      <button>buscar</button>
    `;

    const style = document.createElement('style');
    style.textContent = `

      div {
        overflow: hidden;
        height: auto;
        width: 100%;
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 10px;
        background: #333;
        border-radius: 25px;
        font-family: sans-serif;
        color: #fff;
        margin:15px;
      }
      p {
        color: #fff;
        text-transform: uppercase;
        margin: 5px;
      }
      input {
        flex: 1;
        padding: 6px;
        border-radius: 15px;
        border: none;
        width:
      }
      button {
        padding: 6px 12px;
        cursor: pointer;
        border: none;
        background: #555;
        color: #fff;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);

  }
}

customElements.define('search-box', SearchBox);
