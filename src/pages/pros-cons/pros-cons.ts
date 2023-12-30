import { LitElement, html} from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';

import '@shoelace-style/shoelace/dist/components/card/card';
import '@shoelace-style/shoelace/dist/components/menu/menu';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item';
import '@shoelace-style/shoelace/dist/components/input/input';
import '@shoelace-style/shoelace/dist/components/option/option';

import { styles as sharedStyles } from '../../styles/shared-styles';

import '../../components/importance/importance'
import '../../components/background-card/background-card'
import '../../components/sensitivity'
import '../../components/dilemma'
import { ProsConsState } from './model/pros-cons-state';

@customElement('pros-cons')
export class ProsCons extends LitElement {
    static styles = [
        sharedStyles
    ];

    // State ensures that the whole page is rerendered each time listProCon is changed through the button
    @state()
    private listProCon: number[] = Array.from({ length: 5 }, () => 0)

    @state()
    private state: ProsConsState | undefined = new ProsConsState(
        0, 0, "More information needed"
    );

    private sensitivity: number = 50;
    private conclusion: string = "";

    render()
    {
        return html`
            <div>
                <app-header ?enableBack="${false}"></app-header>
            </div>
            <main>
                <div class="center-container">
                    <background-card>
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

        const pro: number = sumProCon > 0 ? Math.round( proSum / sumProCon * 100 ) : 0;
        const con: number = sumProCon > 0 ? Math.round( conSum / sumProCon * 100 ) : 0;

        if (pro == 0 && con == 0)
        {
            // If no importance values are provided
            this.conclusion = "More information needed"
        }
        else
        {
            if (pro >= this.sensitivity)
                this.conclusion = "Do it 👍";
            else if (pro <= (100 - this.sensitivity) )
                this.conclusion = "Don't do it 👎";
            else
                this.conclusion = "Think more about it 🤔";
        }

        this.state = new ProsConsState(
            pro, con, this.conclusion
        );
    }
}
