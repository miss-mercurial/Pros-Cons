import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/select/select';
import '@shoelace-style/shoelace/dist/components/option/option';
import '@shoelace-style/shoelace/dist/components/input/input';
import '@shoelace-style/shoelace/dist/components/divider/divider';

import { styles as sharedStyles } from '../../styles/shared-styles'
import { styles } from './importance-styles';
//import { classMap } from 'lit/directives/class-map.js';

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
            <sl-select clearable placeholder="Importance">
                <div class="custom-selector scheme-pro">
                    <small>Pro</small>
                    <sl-option value="option-1-pro">Pro Low</sl-option>
                    <sl-option value="option-2-pro">Pro Medium</sl-option>
                    <sl-option value="option-3-pro">Pro High</sl-option>
                </div>

                <div class="custom-selector scheme-con">
                    <sl-divider></sl-divider>
                    <small>Con</small>
                    <sl-option value="option-1-con">Con Low</sl-option>
                    <sl-option value="option-2-con">Con Medium</sl-option>
                    <sl-option value="option-3-con">Con High</sl-option>
                </div>
            </sl-select>

            <sl-input></sl-input>
        `;
    }
}
