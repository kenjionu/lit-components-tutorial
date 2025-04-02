import { LitElement, html, css } from 'lit';
import { pathUrls } from '../../../constants/pathsUrl';
import { animate } from '@lit-labs/motion';
import '../../atoms/dark-mode';


export class Header extends LitElement {
    static properties = { temaActual: {type: String} }; 
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
                border: 1px solid #000;
                border-right: none;
                border-left: none;
                border-top: none;
                box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
            }
            header.dark-mode {
            background-color: rgb(12 12 12);
            box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
            color: white;
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
            color: #001CF5;
            font-weight: bold;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-family: "DM Sans", sans-serif;
            }

            li a:hover {
            color: #389;
            }
        `
    ];

    
    constructor() {
        super();
        this.changeDarkMode()
        this.rutaActual = window.location.pathname; // Inicializa la ruta actual
    }

    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('vaadin-router-location-changed', this.actualizarRuta.bind(this));
        this.observeThemeChanges();
        this.changeDarkMode();
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('vaadin-router-location-changed', this.actualizarRuta.bind(this));
        this.disconnectThemeObserver();
    }


    observeThemeChanges() {
        this.themeObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                    this.changeDarkMode();
                }
            });
        });

        this.themeObserver.observe(document.body, { attributes: true });
    }

    disconnectThemeObserver() {
        if (this.themeObserver) {
            this.themeObserver.disconnect();
            this.themeObserver = null;
        }
    }

    actualizarRuta() {
        this.rutaActual = window.location.pathname;
        this.requestUpdate();
    }

    changeDarkMode() {
        this.temaActual = document.body.dataset.theme;
        this.requestUpdate();
    }


    
    handleClick(element) {
        element.animate(
            [
                { transform: 'perspective(400px) rotateX(90deg) rotateY(0deg)' },
                { transform: 'perspective(400px) rotateX(10deg) rotateY(0deg)' },
            ],
            {
                duration: 900,
                easing: 'ease-out',
                iterations: 1,
            }
        );
    }
  
    render() {
        const headerClass = this.temaActual === 'dark' ? 'dark-mode' : '';
        return html`
        <header class=${headerClass}
        })}>
            <div>
                <dark-mode></dark-mode>
                <nav role="menu" aria-labelledby="mainmenulabel">
                    <ul role="list">
                        ${pathUrls.urls.map((element, index) => {
                            const esActivo = this.rutaActual === element;
                            const claseActivo = esActivo ? 'active' : '';
                            return html`
                                <li 
                                    role="listitem"
                                    aria-label='${element}'
                                    @click="${(event) => this.handleClick(event.currentTarget)}"
                                >
                                    <a 
                                        ${animate({
                                            from: { transform: 'perspective(400px) rotateX(0deg) rotateY(0deg)' },
                                            to: { transform: 'perspective(400px) rotateX(10deg) rotateY(10deg)' },
                                            options: { duration: 300, easing: 'ease-out' }
                                        })}
                                        class="${claseActivo}" href="${element}"
                                    >
                                        ${pathUrls.name[index]}
                                    </a>
                                </li>
                            `;
                        })}
                    </ul>
                </nav>
            </div>
        </header>`
    }
}
customElements.define('template-header', Header);
