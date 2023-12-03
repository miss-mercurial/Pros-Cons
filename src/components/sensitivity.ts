import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/input/input'


import { styles as sharedStyles } from '../styles/shared-styles';

@customElement('sensitivity-selector')
export class SensitivitySelector extends LitElement {
    static styles = [
        sharedStyles
    ];

    render() {
        return html`
            <sl-input
                label="How sure would you like to be?"
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                max="100"
                step="1"
                value="60">
                <span slot="suffix">%</span>
            </sl-input>
        `;
    }
}
