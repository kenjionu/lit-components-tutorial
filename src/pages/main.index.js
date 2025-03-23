// main-index.js

import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import './home/home-view';
import './about/about-view';
import '../components/pages/notfound';
import '../components/organisms/header/header';
import '../components/organisms/footer/footer';
import '../components/atoms/loading';

class LitUrlIndex extends LitElement {
  static styles = css`
    .loading {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @view-transition {
      navigation: auto;
    }
    #outlet {
      view-transition-name: page;
    }
    ::view-transition-old(page) {
      animation: fade 0.2s linear forwards;
    } 

    ::view-transition-new(page) {
      animation: fade 0.3s linear reverse;
      }
  `;

  constructor() {
    super()
    this.loading = false;
  }
  firstUpdated() {
    super.firstUpdated();
    const router = new Router(this.shadowRoot.querySelector('#outlet'));

    router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/about', component: 'about-view' },
      { path: '(.*)', component: 'not-found' },
    ]);

       // Escucha los eventos de cambio de ruta
    window.addEventListener('vaadin-router-before-enter', () => {
        this.loading = true;
        this.requestUpdate();
    });

    window.addEventListener('vaadin-router-after-enter', () => {
        this.loading = false;
        this.requestUpdate();
    });
  }


  render() {
    return html`
    <div>
            <template-header></template-header>
    </div>
        <div id="outlet"></div>
        <template-footer></template-footer>
    `;
  }
}

customElements.define('lit-url-index', LitUrlIndex);