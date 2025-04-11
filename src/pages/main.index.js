// main-index.js

import { LitElement, html, css } from 'lit';
import './home/home-view';
import './about/about-view';
import '../components/pages/notfound';
import '../components/organisms/header/header';
import '../components/organisms/footer/footer';
import { Router } from '@lit-labs/router';

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

  _router = new Router(this, [
      { path: '/', render: () => html`<home-view></home-view>` },
      { path: '/about', render: () => html`<about-view></about-view>`},
      { path: '(.*)', render: () => html`<not-found></not-found>` },
  ]);
  
  render() {
    return html`
        <template-header></template-header>
        ${this._router.outlet()}
        <template-footer></template-footer>
    `;
  }
}

customElements.define('lit-url-index', LitUrlIndex);