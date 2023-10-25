import { LitElement, html} from 'lit';
import { customElement } from 'lit/decorators.js';

import { styles } from './app-about/about-styles';

import { styles as sharedStyles } from '../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';

@customElement('new-page')
export class AppSettings extends LitElement {
    static styles = [
        sharedStyles,
        styles
    ];

    render() {
        return html`
            <app-header ?enableBack="${true}"></app-header>

            <main>
            <h2>Test page</h2>

            <sl-card>
                <h2>Woop woop</h2>

                <p>
                    It worked 😎
                </p>

                <p>
                    🐱‍💻
                </p>
            </sl-card>
            </main>
        `;
    }
}
