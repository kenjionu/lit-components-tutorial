import { LitElement, html, css } from 'lit';
export class HomeView extends LitElement {
    static styles = [
        css`
 
            :host {
                display: block;
            }
            .home-view{
                width: 100%;
                margin: 0 auto;
                font-size: 1.2rem;
                text-align: justify;
                margin-top: 2rem;
                margin-bottom: 2rem;
            }
            .content-avatar {
                display: flex;
                justify-content: center;
            }
            .content-text{
                width: 80%;
                margin: 0 auto;
            }
            
            .avatar {
                border-radius: 20%;
                width: 100px;
                margin-bottom: 3rem;
            }

            .avatar:hover {
                transform: scale(1.0);
                animation: leaves 0.5s ease-in-out infinite alternate;
            }
               
            .fade-in-text {
            animation: fadeIn 1.5s;
            }

            
            @keyframes leaves {
                0% {
                    transform: scale(1.0);
                }
                100% {
                    transform: scale(1.5);
                }
            }

            @keyframes fadeIn {
                0% { opacity: 0; }
                100% { opacity: 1; }
            }

            @media (min-width: 992px) {
                .content-text {
                   display:block;
                   text-align:center;
                }
                ul{
                    list-style-position: inside;
                    text-align: center;
                }
            }
        `
    ];

    render() {
        return html`
        <section>
            <section class="home-view">
                <section 
                class="content-avatar"   
                aria-label="avatar">
                    <img class="avatar"   
                    aria-label="avatar image"
                    src="./src/assets/apicturecesar-min.webp" alt="cesar" arial-label="cesar picture">
                </section>
                <section class="content-text"
                  aria-description="Description of the home page">
                    <p>Hola!, Soy Cesar.</p>
                    <p>Soy <b class="fade-in-text">Ingeniero de Sistema desde Venezuela, vivo actualmente en Lima, 🇵🇪</b> Experto en Angular, construyendo aplicaciones web robustas y escalables.</p>
                    <p>Principalmente trabajo con:</p>
                    <b class="fade-in-text">
                    <ul role="list technology experience">
                        <li>Angular</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                    </ul>
                    </b>
                    <p>Profundizando en para ampliar mis horizontes:
                    <b class="fade-in-text">
                    <ul role="list technology learning">
                        <li>React</li>
                        <li>Lit Components</li>
                    </ul>
                </section>
            </section>
        </esction>`;
    }
}
customElements.define('home-view', HomeView);
