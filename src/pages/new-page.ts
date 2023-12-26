import { LitElement, html} from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

import '@shoelace-style/shoelace/dist/components/card/card';
import '@shoelace-style/shoelace/dist/components/menu/menu';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item';
import '@shoelace-style/shoelace/dist/components/input/input';
import '@shoelace-style/shoelace/dist/components/option/option';

import { styles as sharedStyles } from '../styles/shared-styles';

import { SlInputEvent } from '@shoelace-style/shoelace';

import '../components/importance/importance'
import '../components/background-card/background-card'
import '../components/sensitivity'
import '../components/dilemma'

@customElement('new-page')
export class AppSettings extends LitElement {
    static styles = [
        sharedStyles
    ];

    firstUpdated() {
        const input = this.shadowRoot?.querySelector('sl-input');
        const outputEl = this.shadowRoot?.querySelector('#output') as HTMLElement;

        if (input && outputEl) {
            input.addEventListener('sl-change', (event: SlInputEvent) => {
                this.handleInputChange(event.target as HTMLInputElement, outputEl);
            });
        }
    }

    /**
     * Get inputvalue and print
     *
     * @param inputElement InputElement, the value of wich to print.
     */
    private handleInputChange(inputElement: HTMLInputElement, outputEl: HTMLElement) {
        const value = inputElement.value;
        console.log(value);
        outputEl.textContent = value;
    }

    // State ensures that the whole page is rerendered each time listProCon is changed through the button
    @state()
    private listProCon: number[] = Array.from({ length: 7 }, () => 0)

    render() {
        return html`
            <app-header ?enableBack="${true}"></app-header>
            <main>
                <div class="center-container">
                    <background-card>
                        <!-- Dummy input and div-output to learn and test with Lit -->
                        <sl-input autocomplete="off"></sl-input>
                        <div id="output"></div>
                        <dilemma-input></dilemma-input>
                        <sensitivity-input></sensitivity-input>
                        ${map(this.listProCon, (_, i) => {
                                if (i == 0)
                                    return html`<importance-selector
                                        @importance-change=${ this.handleImportanceChange }
                                        labelImportance = "Importance"
                                        labelMatter = "Matter"
                                    ></importance-selector>`
                                else
                                    return html`<importance-selector
                                        @importance-change=${ this.handleImportanceChange }
                                    ></importance-selector>`
                            })
                        }
                        <!-- [...this.listProCon, 0] makes a new list consisting of the old list and a new number -->
                        <sl-button @click=${ () => this.listProCon = [...this.listProCon, 0] }>Add more pros/cons</sl-button>
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

    private handleImportanceChange(e: CustomEvent)
    {
        console.log(e.detail.value)
    }
}
