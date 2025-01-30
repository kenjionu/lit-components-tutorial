import { LitElement, html } from "lit";

class NameTag extends LitElement {
    static properties = {
        name: {}
    }

    render(){
        return html`Hola soy yo ${this.name}`
    }
}

customElements.define('name-tag', NameTag)

const tag = document.createElement('name-tag');
tag.name = 'dinamicamente creado';
document.body.appendChild(tag)
