import {html, LitElement} from 'lit';

export class CustomButton extends LitElement {
  static properties = {
    someBoolean: {state: Boolean},
    someText: {state: String},
  };

  constructor() {
    super();
    this.someText = 'Some text';
  }

  render() {
    let someText = html`<p>${this.someText}</p>`;

    if (this.someBoolean) {
      someText = html`<p>Some other text</p>`;
    }

    return html`
      <button
          @click=${() => {
            this.someBoolean = !this.someBoolean;
          }}>
        Toggle template
      </button>
      <div>This is an inline ternary conditional</div>
      ${
        this.someBoolean ? html`<p>Some other text</p>` : html`<p>Some text</p>`
      }
      <div>This is a variable conditional</div>
      ${someText}
    `;
  }
}
customElements.define('custom-button', CustomButton);