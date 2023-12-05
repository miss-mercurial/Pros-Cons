import { LitElement, html} from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/card/card';
import '@shoelace-style/shoelace/dist/components/menu/menu';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item';

import '@shoelace-style/shoelace/dist/components/input/input';
import '@shoelace-style/shoelace/dist/components/select/select';
import '@shoelace-style/shoelace/dist/components/option/option';

import { styles as sharedStyles } from '../styles/shared-styles';
import '../components/importance/importance'
import '../components/background-card/background-card'
import '../components/sensitivity'

@customElement('new-page')
export class AppSettings extends LitElement {
    static styles = [
        sharedStyles
    ];

    render() {
        return html`
            <app-header ?enableBack="${true}"></app-header>
            <main>
                <div class="center-container">
                    <background-card>
                        <sl-input label="The dilemma?" autocomplete="off" autofocus></sl-input>
                        <sensitivity-input></sensitivity-input>
                        <p>Importance -------------- Matter</p>
                        <div class="custom-selector scheme-pro">
                            <importance-selector></importance-selector>
                        </div>
                        <div class="custom-selector scheme-con">
                            <importance-selector></importance-selector>
                        </div>
                        <p>Conclusion</p>
                        <div style="text-align: center;">
                            <p>??% pros</p>
                            <p>??% cons</p>
                            <h4>Do it 👍|Think more about it 🤔|Don't do it 👎</h4>
                        </div>
                    </background-card>
                </div>
            </main>
        `;
    }
}
