import { LitElement, html} from 'lit';
import { customElement } from 'lit/decorators.js';

import { styles } from './app-about/about-styles';

import { styles as sharedStyles } from '../styles/shared-styles'

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';

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

            <sl-dropdown>
                <sl-button slot="trigger" caret>Dropdown</sl-button>
                <sl-menu>
                    <sl-menu-item>Dropdown Item 1</sl-menu-item>
                    <sl-menu-item>Dropdown Item 2</sl-menu-item>
                    <sl-menu-item>Dropdown Item 3</sl-menu-item>
                </sl-menu>
            </sl-dropdown>


            </main>
        `;
    }
}
