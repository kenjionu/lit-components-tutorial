import { css, html, LitElement } from 'lit';
import sun from '../../assets/sun-icon-white.svg';
import moon from '../../assets/moon-icon-white.svg';
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
      display:flex;
      transition: background-color 0.3s, color 0.3s;
      align-items: center;
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
    .mode-icon{
    width: 30px;
    height: 30px;
    }
    `

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        // Cambia el atributo del host para aplicar los estilos correspondientes
        this.darkMode
        ? (this.setAttribute('dark-mode', ''), document.body.setAttribute('data-theme', 'dark'))
        : (this.removeAttribute('dark-mode'), document.body.removeAttribute('data-theme'), document.body.setAttribute('data-theme', 'light'));
      }

   
      render(){
        return html`
        <section>
            <button class="toggle-button bg-sky-700" @click="${this.toggleDarkMode}">
            ${this.darkMode ? html`<img class="mode-icon" src="${sun}" alt="Sun Icon" />` : html`<img class="mode-icon" src="${moon}" alt="Moon Icon" />`}
            </button>
        </section>
        `
      }
}
customElements.define('dark-mode', DarkMode);
