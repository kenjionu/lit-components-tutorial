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
                transform: scale(1.1);
                    animation: leaves 1s ease-in-out infinite alternate;
            }
               
            .fade-in-text {
            animation: fadeIn 5s;
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
        <div>
            <section class="home-view">
                <section class="content-avatar">
                    <img class="avatar" src="./src/assets/apicturecesar-min.webp" alt="cesar" arial-label="cesar picture">
                </section>
                <section class="content-text">
                    <p>Hola!, Soy Cesar.</p>
                    <p>Soy un <b class="fade-in-text">desarrollador de software</b> con experiencia en aplicaciones web.</p>
                    <p>Principalmente trabajo con:</p>
                    <b class="fade-in-text">
                    <ul>
                        <li>Angular</li>
                        <li>Javascript</li>
                        <li>Typescript</li>
                    </ul>
                    </b>
                    <p>Por otro lado he tenido mayores conocimientos de tecnologia:
                    <b class="fade-in-text">
                    <ul>
                        <li>React</li>
                        <li>Lit Components</li>
                    </ul>
                </section>
            </section>
        </div>
       `;
    }
}
customElements.define('home-view', HomeView);
