import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/select/select';
import '@shoelace-style/shoelace/dist/components/option/option';

import { styles as sharedStyles } from '../../styles/shared-styles'
import { styles } from './importance-styles';
import { classMap } from 'lit/directives/class-map.js';

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
            <div class="custom-selector ${ classMap('scheme-pro': this.isPro) } ${ classMap('scheme-con': !this.isPro) }">
                <sl-select placeholder="Importance">
                <sl-option value="option-1">Low</sl-option>
                <sl-option value="option-2">Medium</sl-option>
                <sl-option value="option-3">High</sl-option>
                <sl-option value="option-3">
                    <div class="custom-selector scheme-con">Meget High</div>
                </sl-option>
                </sl-select>
            </div>
        `;
    }
}
