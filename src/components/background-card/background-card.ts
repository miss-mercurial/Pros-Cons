import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/card/card';

import { styles as sharedStyles } from '../../styles/shared-styles';
import { styles } from './background-card-styles';

@customElement('background-card')
export class BackgroundCard extends LitElement {
    static styles = [
        sharedStyles,
        styles
    ];

    render()
    {
        return html`
            <div class="center-container">
                <sl-card class="card-basic">
                    <!-- Your card content goes here -->
                    <slot></slot>
                </sl-card>
            </div>
        `;
    }
}
