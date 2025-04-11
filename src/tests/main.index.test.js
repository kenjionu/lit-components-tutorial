import { html, fixture, expect } from '@open-wc/testing';
import '../pages/main.index.js';
import '../pages/home/home-view.js';
import '../pages/about/about-view.js';
import '../components/pages/notfound.js';
import '../components/organisms/header/header.js';
import '../components/organisms/footer/footer.js';



describe("LitUrlIndex Home", () => {
    it('debera renderizar el componente de la ruta inicial', async() => {
        // window.history.pushState({}, 'Home', '/');
        const element = await fixture(html`<lit-url-index></lit-url-index>`);
        await element.updateComplete; // Asegura que el router ha actualizado el DOM
        expect(element.shadowRoot.querySelector('home-view')).to.exist;
    })
    it('debería renderizar AboutView en la ruta "/about"', async () => {
        // Simula la ruta /about
        // window.history.pushState({}, 'About', '/about');
        const element = await fixture(html`<lit-url-index></lit-url-index>`);
        await element.updateComplete;
        expect(element.shadowRoot.querySelector('about-view')).to.exist;
      });
    
      it('debería renderizar NotFound en rutas desconocidas', async () => {
        // Simula una ruta desconocida
        // window.history.pushState({}, 'Unknown', '/unknown');
        const element = await fixture(html`<lit-url-index></lit-url-index>`);
        await element.updateComplete;
        expect(element.shadowRoot.querySelector('not-found')).to.exist;
      });
    
      it('debería renderizar Header y Footer en todas las rutas', async () => {
        // Prueba la ruta raíz
        // window.history.pushState({}, 'Home', '/');
        const element = await fixture(html`<lit-url-index></lit-url-index>`);
        await element.updateComplete;
        expect(element.shadowRoot.querySelector('template-header')).to.exist;
        expect(element.shadowRoot.querySelector('template-footer')).to.exist;
    
        // Prueba la ruta /about
        window.history.pushState({}, 'About', '/about');
        await element.updateComplete;
        expect(element.shadowRoot.querySelector('template-header')).to.exist;
        expect(element.shadowRoot.querySelector('template-footer')).to.exist;
    
         // Prueba la ruta /unknown
        window.history.pushState({}, 'unknown', '/unknown');
        await element.updateComplete;
        expect(element.shadowRoot.querySelector('template-header')).to.exist;
        expect(element.shadowRoot.querySelector('template-footer')).to.exist;
      });
})