import { LitElement, html, css } from 'lit';

class IndicadorCarga extends LitElement {
    static styles = css`
        .spinner {
            border: 4px solid rgba(0, 0, 0, 0.1);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border-left-color: #09f;
            animation: spin 1s ease infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    `;

    render() {
        return html` <div class="spinner"></div> `;
    }
}

customElements.define('indicador-carga', IndicadorCarga);