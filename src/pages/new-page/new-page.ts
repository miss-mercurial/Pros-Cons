import { LitElement, html} from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

import '@shoelace-style/shoelace/dist/components/card/card';
import '@shoelace-style/shoelace/dist/components/menu/menu';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item';
import '@shoelace-style/shoelace/dist/components/input/input';
import '@shoelace-style/shoelace/dist/components/option/option';

import { styles as sharedStyles } from '../../styles/shared-styles';

import { SlInputEvent } from '@shoelace-style/shoelace';

import '../../components/importance/importance'
import '../../components/background-card/background-card'
import '../../components/sensitivity'
import '../../components/dilemma'
import { NewPageState } from './model/new-page-state';

@customElement('new-page')
export class AppSettings extends LitElement {
    static styles = [
        sharedStyles
    ];

    firstUpdated()
    {
        const input = this.shadowRoot?.querySelector('sl-input');
        const outputEl = this.shadowRoot?.querySelector('#output') as HTMLElement;

        if (input && outputEl)
        {
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
    private handleInputChange(inputElement: HTMLInputElement, outputEl: HTMLElement)
    {
        const value = inputElement.value;
        outputEl.textContent = value;
    }

    // State ensures that the whole page is rerendered each time listProCon is changed through the button
    @state()
    private listProCon: number[] = Array.from({ length: 5 }, () => 0)

    @state()
    private state: NewPageState | undefined = new NewPageState(
        0, 0, "More information needed"
    );

    private sensitivity: number = 50;
    private conclusion: string = "";

    render()
    {
        return html`
            <app-header ?enableBack="${true}"></app-header>
            <main>
                <div class="center-container">
                    <background-card>
                        <!-- Dummy input and div-output to learn and test with Lit -->
                        <sl-input autocomplete="off"></sl-input>
                        <div id="output"></div>
                        <dilemma-input></dilemma-input>
                        <sensitivity-input
                            @sensitivity-change=${ this.handleSensitivityChange }
                            initialVal = ${ this.sensitivity }></sensitivity-input>
                        ${map(this.listProCon, (_, i) => this.genImportanceSelector(i))}
                        <!-- [...this.listProCon, 0] makes a new list consisting of the old list and a new number -->
                        <sl-button @click=${ () => this.listProCon = [...this.listProCon, 0] }>Add more pros/cons</sl-button>
                        <p>Conclusion</p>
                        <div style="text-align: center;">
                            <p>${ this.state?.pro ?? "?" }% pros</p>
                            <p>${ this.state?.con ?? "?" }% cons</p>
                            <h4>${ this.state?.conclusion ?? "?" }</h4>
                            <!-- Do it 👍|Think more about it 🤔|Don't do it 👎 -->
                        </div>
                    </background-card>
                </div>
            </main>
        `;
    }

    private genImportanceSelector(i: number)
    {
        if (i == 0)
            return html`<importance-selector
                @importance-change=${ (e: CustomEvent) => this.handleImportanceChange(e, i) }
                labelImportance = "Importance"
                labelMatter = "Matter"
            ></importance-selector>`
        else
            return html`<importance-selector
                @importance-change=${ (e: CustomEvent) => this.handleImportanceChange(e, i) }
            ></importance-selector>`
    }

    private handleImportanceChange(e: CustomEvent, i: number)
    {
        this.listProCon[i] = e.detail.value;
        this.calcRes();
    }

    private handleSensitivityChange(e: CustomEvent)
    {
        this.sensitivity = e.detail; // number
        this.calcRes();
    }

    private calcRes()
    {
        // Filter the list for pros
        const proList: number[] = this.listProCon
            .filter((val) => val > 0)

        // Filter the list for cons
        const conList: number[] = this.listProCon
            .filter((val) => val < 0)

        const proSum: number = proList
            .reduce((acc, curr) => acc += curr, 0);

        const conSum: number = conList
            .reduce((acc, curr) => acc -= curr, 0);

        const sumProCon: number = proSum + conSum;

        const pro = Math.round( proSum / sumProCon * 100 );
        const con = Math.round( conSum / sumProCon * 100 );

        console.log(`Pro: ${ pro }, Con: ${ con }, Sens: ${ this.sensitivity }
        \n100 minus: ${ 100 - this.sensitivity }`);

        if (pro >= this.sensitivity)
            this.conclusion = "Do it 👍";
        else if (pro <= (100 - this.sensitivity) )
            this.conclusion = "Don't do it 👎";
        else
            this.conclusion = "Think more about it 🤔";

        this.state = new NewPageState(
            pro, con, this.conclusion
        );
    }
}
