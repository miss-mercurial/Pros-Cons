import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/input/input'

import { styles as sharedStyles } from '../styles/shared-styles';

@customElement('sensitivity-input')
export class SensitivityInput extends LitElement {
    static styles = [
        sharedStyles
    ];

    @property({ type: Number })
    readonly initialVal: number = 50;

    /**
     * Validate and correct the input value
     *
     * @param event the event containing the input value to do the validation on.
     */
    private handleInputChange(event: Event)
    {
        // Get value from event
        const element: HTMLInputElement = event.target as HTMLInputElement;
        const value: number = parseInt(element.value);

        if (value > 100)
            element.value = "100";
        else if (value < 0 || isNaN(value))
            element.value = "0";

        // Generate event options
        const options = {
            detail: parseInt(element.value),
            bubbles: true,
            composed: true
        };
        console.log(options);

        // Dispatch up the DOM
        this.dispatchEvent(
            new CustomEvent('sensitivity-change', options)
        );
    }

    render()
    {
        return html`
            <sl-input @sl-input=${ this.handleInputChange }
                label="How sure would you like to be?"
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                max="100"
                step="1"
                value=${ this.initialVal }
            >
                <span slot="suffix">%</span>
            </sl-input>
        `;
    }
}
