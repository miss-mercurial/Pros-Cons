import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/select/select';
import '@shoelace-style/shoelace/dist/components/option/option';
import '@shoelace-style/shoelace/dist/components/input/input';
import '@shoelace-style/shoelace/dist/components/divider/divider';

import { styles as sharedStyles } from '../../styles/shared-styles';
import { styles } from './importance-styles';

@customElement('importance-selector')
export class ImportanceSelector extends LitElement {
    static styles = [
        sharedStyles,
        styles
    ];

    @property({ type: String })
    public labelImportance: string = "";

    @property({ type: String })
    public labelMatter: string = "";

    private handleSelectChange(event: Event) {
        // Get value from event
        const element: HTMLSelectElement = event.target as HTMLSelectElement;
        const value: number = parseInt(element.value);

        // Generate event options
        const options = {
            detail: {value},
            bubbles: true,
            composed: true
        };

        // Dispatch up the DOM
        this.dispatchEvent(
            new CustomEvent('importance-change', options)
        );
    }

    render() {
        return html`
            <div class="selector-container">
                <sl-select @sl-change=${ this.handleSelectChange } placeholder="Importance" .label="${this.labelImportance}">
                    <sl-option value="option-0">Importance</sl-option>
                    <div class="custom-selector scheme-pro">
                        <small>Pro</small>
                        <sl-option value=3>🟢🟢🟢</sl-option>
                        <sl-option value=2>🟢🟢</sl-option>
                        <sl-option value=1>🟢</sl-option>
                    </div>
                    <div class="custom-selector scheme-con">
                        <sl-divider></sl-divider>
                        <small>Con</small>
                        <sl-option value=-1>🔴</sl-option>
                        <sl-option value=-2>🔴🔴</sl-option>
                        <sl-option value=-3>🔴🔴🔴</sl-option>
                    </div>
                </sl-select>
                <sl-input
                    placeholder="Some pro or con"
                    autocomplete="off"
                    .label="${this.labelMatter}"
                ></sl-input>
            </div>
        `;
    }
}
