import { LitElement, html, css } from 'lit';
import { pathUrls } from '../../../constants/pathsUrl';
import { animate } from '@lit-labs/motion';
import '../../atoms/dark-mode';


export class Header extends LitElement {

    static styles = [
        css`
            body[data-theme="dark"] header {
            background-color: orange;  /* Color de fondo más suave para el header en modo oscuro */
            color: white;
            }
            li a.active {
            color: #389;
            }
            @view-transition {
                navigation: auto;
            }
            :host {
                display: block;
            }
            header {
                padding: 1rem 2rem;
                color: white;
                border: 1px solid #000;
                box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
            }
            header div:first-child {
                            display: flex;
                            flex: 0.15;
                        }
            header div:last-child {
                            display: flex;
                            flex: 0.9;
                            justify-content: space-between;
                        }
            nav {
                display: flex;
                gap: 1rem;                
            }
            ul {
            border-radius: 20px;
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            }

            li {
            float: left;
            }

            li a {
            display: block;
            color: #012FFB;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            }

            li a:hover {
            color: #389;
            }

     
        `
    ];

    
    constructor() {
        super();
        this.addEventListener('click', this.handleClick);
        this.changeDarkMode()
        
        this.rutaActual = window.location.pathname; // Inicializa la ruta actual
    }

    connectedCallback() {
        super.connectedCallback();
        // Escucha los eventos de cambio de ruta
        window.addEventListener('vaadin-router-location-changed', this.actualizarRuta.bind(this));
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // Elimina el listener cuando el componente se desconecta
        window.removeEventListener('vaadin-router-location-changed', this.actualizarRuta.bind(this));
    }

    actualizarRuta() {
        this.rutaActual = window.location.pathname;
        this.requestUpdate(); // Fuerza la actualización del componente
    }

    changeDarkMode(){
              // Para obtener el tema actual:
      const temaActual = document.body.dataset.theme;
      console.log('Tema actual:', temaActual);
      
      // Para verificar el tema y realizar acciones:
      if (document.body.dataset.theme === 'light') {
        // Acciones para tema claro
        console.log('Tema claro activo.');
      } else if (document.body.dataset.theme === 'dark') {
        // Acciones para tema oscuro
        console.log('Tema oscuro activo.');
      } else {
        // Manejo de caso por defecto o tema no definido
        console.log('Tema no definido o desconocido.');
      }

    }

    

    handleClick() {
        const element = this.shadowRoot.querySelector('header > div > nav > ul ');
        element.animate(
          [
            { transform: 'perspective(400px) rotateX(90deg) rotateY(0deg)' },
            { transform: 'perspective(400px) rotateX(10deg) rotateY(0deg)' }
          ],
          {
            duration: 900,
            easing: 'ease-out',
            iterations: 1
          }
        );
      }
  
    render() {
        return html`
        <header>
            <div>
            <dark-mode></dark-mode>
                <nav role="menu" aria-labelledby="mainmenulabel">
                    <ul>
                            ${pathUrls.urls.map((element, index) => {
                                const esActivo = this.rutaActual === element;
                                const claseActivo = esActivo ? 'active' : '';

                                return html`
                                    <li>
                                        <a 
                                           ${animate({
                                        from: { transform: 'perspective(400px) rotateX(0deg) rotateY(0deg)' },
                                        to: { transform: 'perspective(400px) rotateX(10deg) rotateY(10deg)' },
                                        options: { duration: 300, easing: 'ease-out' }
                                        })}
                                        class="${claseActivo}" href="${element}">
                                            ${pathUrls.name[index]}
                                        </a>
                                    </li>
                                `;
                            })}
                    </ul>
                </nav>
            </div>
        </header>
`
    }
}
customElements.define('template-header', Header);
