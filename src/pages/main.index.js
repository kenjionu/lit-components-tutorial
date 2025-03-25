// main-index.js

import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import './home/home-view';
import './about/about-view';
import '../components/pages/notfound';
import '../components/organisms/header/header';
import '../components/organisms/footer/footer';

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
  }
  firstUpdated() {
    super.firstUpdated();
    const router = new Router(this.shadowRoot.querySelector('#outlet'));

    router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/about', component: 'about-view' },
      { path: '(.*)', component: 'not-found' },
    ]);
  }


  render() {
    return html`
        <template-header></template-header>
        <div id="outlet"></div>
        <template-footer></template-footer>
    `;
  }
}

customElements.define('lit-url-index', LitUrlIndex);