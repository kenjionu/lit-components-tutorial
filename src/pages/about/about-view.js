import { LitElement, html, css } from 'lit';

export class AboutView extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
      
        `
    ];

    render() {
        return html`<p>About View Page</p>
        `;
    }
}
customElements.define('about-view', AboutView);
