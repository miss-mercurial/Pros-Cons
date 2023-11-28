import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/select/select';
import '@shoelace-style/shoelace/dist/components/option/option';

import { styles as sharedStyles } from '../styles/shared-styles';

@customElement('sensitivity-selector')
export class SensitivitySelector extends LitElement {
    static styles = [
        sharedStyles
    ];

    render() {
        return html`
            <sl-select label="How sure would you like to be?">
                <sl-option value="option-1">Option 1</sl-option>
                <sl-option value="option-2">Option 2</sl-option>
                <sl-option value="option-3">Option 3</sl-option>
            </sl-select>
        `;
    }
}
