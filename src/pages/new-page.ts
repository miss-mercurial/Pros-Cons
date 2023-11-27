import { LitElement, html} from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/card/card';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown';
import '@shoelace-style/shoelace/dist/components/menu/menu';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item';

import { styles as sharedStyles } from '../styles/shared-styles'
import '../components/importance/importance'

@customElement('new-page')
export class AppSettings extends LitElement {
    static styles = [
        sharedStyles
    ];

    render() {
        return html`
            <app-header ?enableBack="${true}"></app-header>
            <main>
                <sl-card class="card-basic">
                    <sl-input label="The dilemma?" autocomplete="off" autofocus="on"></sl-input>

                    <div class="custom-selector scheme-pro">
                        <importance-selector></importance-selector>
                    </div>
                    <div class="custom-selector scheme-con">
                        <importance-selector></importance-selector>
                    </div>
                </sl-card>
            </main>
        `;
    }
}
