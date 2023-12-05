import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/input/input'

import { styles as sharedStyles } from '../styles/shared-styles';

@customElement('dilemma-input')
export class DilemmaInput extends LitElement {
    static styles = [
        sharedStyles
    ];

    render() {
        return html`
            <sl-input
                label="The dilemma?"
                autocomplete="off"
                autofocus
            >
                <span slot="suffix">🤔</span>
            </sl-input>
        `;
    }
}
