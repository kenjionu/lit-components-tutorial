import { LitElement } from "lit";

export class FeatureHome extends LitElement {

  constructor() {
    super()
    this.pageName = 'Home Page';
  }

  render() {
    return html `<p>${this.pageName}</p>`;
  }
}

customElements.define('feature-home', FeatureHome);