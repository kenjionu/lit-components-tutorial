import { Router } from '@vaadin/router';
import { LitElement, html, css } from 'lit';
import { pathUrls } from '../../../constants/pathsUrl';
export class Header extends LitElement {
    static styles = [
        css`
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
                background-color: #fff;
                color: white;
                flex-wrap: wrap;
            }
            header div:first-child {
                            display: flex;
                            flex: 0.15;
                        }
            header div:last-child {
                            display: flex;
                            flex: 0.9;
                            justify-content: center;
                        }
            nav {
                display: flex;
                gap: 1rem;                
            }
            ul {
            border: 1px solid #e7e7e7;
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

    render() {
        return html`
        <header>
            <div>
                <nav role="menu" aria-labelledby="mainmenulabel">
                    <ul>
                            ${pathUrls.urls.map((element, index) => {
                                const esActivo = this.rutaActual === element;
                                const claseActivo = esActivo ? 'active' : '';

                                return html`
                                    <li>
                                        <a class="${claseActivo}" href="${element}">
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
