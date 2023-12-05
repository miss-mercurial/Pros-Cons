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

    @property({ type: Boolean })
    public isPro: boolean = false;

    render() {
        return html`
            <div class="selector-container">
                <sl-select placeholder="Importance">
                        <sl-option value="option-0">Importance</sl-option>
                    <div class="custom-selector scheme-pro">
                        <small>Pro</small>
                        <sl-option value="option-1-pro">🟢🟢🟢</sl-option>
                        <sl-option value="option-2-pro">🟢🟢</sl-option>
                        <sl-option value="option-3-pro">🟢</sl-option>
                    </div>
                    <div class="custom-selector scheme-con">
                        <sl-divider></sl-divider>
                        <small>Con</small>
                        <sl-option value="option-1-con">🔴</sl-option>
                        <sl-option value="option-2-con">🔴🔴</sl-option>
                        <sl-option value="option-3-con">🔴🔴🔴</sl-option>
                    </div>
                </sl-select>

                <sl-input placeholder="Some pro or con" autocomplete="off"></sl-input>
            </div>
        `;
    }
}
