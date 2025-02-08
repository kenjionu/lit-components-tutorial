import { LitElement, html, css } from 'lit';

export class Header extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }

        `
    ];

    render() {
        return html`
        <header>
        <div>
        <span> cesar casares </span>
        <nav>
             <a href="/">Home</a>
             <a href="/about">About</a>
             <a href="/blogs">Blog</a>
        </nav>
        </div>
        </header>`
    }
}
customElements.define('template-header', Header);
