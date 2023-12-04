import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/input/input'


import { styles as sharedStyles } from '../styles/shared-styles';
import { SlInputEvent } from '@shoelace-style/shoelace';

@customElement('sensitivity-selector')
export class SensitivitySelector extends LitElement {
    static styles = [
        sharedStyles
    ];

    firstUpdated() {
        const input = this.shadowRoot?.querySelector('sl-input');

        if (input) {
            input.addEventListener('sl-change', (event: SlInputEvent) => {
                this.handleInputChange(event.target as HTMLInputElement);
            });
        }
    }

    /**
     * Validate and correct the input value
     *
     * @param inputElement The InputElement the value of wich to do the validation on.
     */
    private handleInputChange(inputElement: HTMLInputElement) {
        const value: number = inputElement.valueAsNumber;
        if (value > 100)
            inputElement.value = "100";
        else if (value < 0)
            inputElement.value = "0";
    }

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
                value="50">
            >
                <span slot="suffix">%</span>
            </sl-input>
        `;
    }
}
