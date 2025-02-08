import { LitElement, html, css } from 'lit';

export class HomeView extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
            .home-view{
                width: 28rem;
                margin: 0 auto;
                font-size: 1.2rem;
                text-align: justify;
                margin-top: 2rem;
                margin-bottom: 2rem;
            }
        `
    ];

    render() {
        return html`
        <div class="home-view">
        <p>I'm a Frontend Engineer with five years of experience with Angular in many projects performed my abilities and lullaby ideas to breathe my life into making a nice world in the IoT.<p>

<p>The web and mobile can be the apprentice intransigent and change every day, so I love, Learn new technologies and be useful in a team projects, my inspiration like coder is the music and arts while working my codes.</p>

<p>That's part of me.</p>

<p>I use HTML, CSS, and JavaScript. Though constantly changing, my focus right now is Angular 2.0, React.js, Node, Express, PHP, Laravel, Ruby on Rails</p>
</div>`;
    }
}
customElements.define('home-view', HomeView);
