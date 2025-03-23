import { html, LitElement } from 'lit';

export class Notfound extends LitElement {
    render() {
        return html`
        <div class="text-gray-900 font-sans container mx-auto px-6 py-8 max-w-lg">
            <h1 class="text-red-600 text-2xl font-bold mb-4">Oops! An Error Occurred</h1>
            <h2 class="text-lg font-semibold mb-4">The server returned a "500 Internal Server Error".</h2>
            <p class="text-base">
            Something is broken. Please let us know what you were doing when this error occurred. We will fix it as soon as possible. Sorry for any inconvenience caused.
            </p>
        </div>
        `;
    }
    
}
customElements.define('not-found', Notfound);
