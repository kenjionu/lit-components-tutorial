import { css, html, LitElement } from 'lit';

export class DarkMode extends LitElement {
    static properties = {
        darkMode: { type: Boolean }
      };

    constructor(){
        super()
        this.darkMode = false;
    }
    static styles = css`
   :host {
   
      transition: background-color 0.3s, color 0.3s;
    }
    :host .toogle-button([dark-mode]) {
      background-color: #333;
      color: white;
    }

    :host .toogle-button([dark-mode]) {
      background-color: #333;
      color: white;
    }
    .toggle-button {
      padding: 10px 20px;
      font-size: 1.2rem;
      background-color: #3C33DE;
      color: white;
      border: none;
      border-radius: 20px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .toggle-button:hover {
      opacity: 0.4
    }
    `

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        // Cambia el atributo del host para aplicar los estilos correspondientes
        if (this.darkMode) {
          this.setAttribute('dark-mode', '');
          document.body.style.backgroundColor = 'black'; // Cambiar el fondo del body a negro
          document.body.style.color = 'white';
          document.body.setAttribute('data-theme', 'dark');
          // Cambiar el color
        } else {
          this.removeAttribute('dark-mode');
          document.body.removeAttribute('data-theme');
          document.body.style.backgroundColor = ''; // Restaurar el fondo
          document.body.style.color = '';  // Restaurar el color del texto
        }
      }

   
      render(){
        return html`
        
        <section>
            <button class="toggle-button bg-sky-700" @click="${this.toggleDarkMode}">
            ${this.darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </section>
        `
      }
}
customElements.define('dark-mode', DarkMode);
