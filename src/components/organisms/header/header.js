import { LitElement, html, css } from 'lit';
export class Header extends LitElement {
    static styles = [
        css`
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
ce            }

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

    render() {
        return html`
        <header>
  
            <div>
                <nav role="menu" aria-labelledby="mainmenulabel">
                    <ul>
                        <li><a href="/" data-route="home">Home</a></li>
                        <li><a href="/about" data-route="about">About</a></li>
                        <li><a href="/contact" data-route="contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
`
    }
}
customElements.define('template-header', Header);
