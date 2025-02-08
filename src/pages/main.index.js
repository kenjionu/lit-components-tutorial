// main-index.js

import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import './home/home-view';
import './about/about-view';
import '../components/organisms/header/header';

class LitUrlIndex extends LitElement {
eeeeeeeee
  firstUpdated() {
    super.firstUpdated();
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/about', component: 'about-view' },
      { path: '(.*)', redirect: '/' },
    ]);
  }

// ... 

  render() {
    return html`
    <div>
            <template-header></template-header>
    </div>
        <div id="outlet"></div>
    `;
  }
}

customElements.define('lit-url-index', LitUrlIndex);