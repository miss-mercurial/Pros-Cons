import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';

@customElement('app-header')
export class AppHeader extends LitElement {
    @property({ type: String }) title = 'Pros & Cons';

    @property({ type: Boolean}) enableBack: boolean = false;

    static styles = css`
        header {
            width: 100%;
            background: var(--app-color-primary);
            color: black;
        }

        .header-content {
            display: flex;
            justify-content: center;
            position: relative;
        }

        .header-text {
            text-align: center;
            margin: 0;
            padding-top: 10px;
            padding-bottom: 10px;
            font-size: 30px;
            font-weight: bold;
        }

        .back-button {
            position: absolute;
            right: 0;
            align-self: center;
        }

/*         @media(prefers-color-scheme: light) {
            header {
                background-color: #f5f5f5;
                color: black;
            }
        }

        @media(prefers-color-scheme: dark) {
            header {
                background-color: #181818;
                color: white;
            }
        } */
  `;

  render() {
        return html`
            <header>
                <div class="header-content">
                    <h1 class="header-text">${this.title}</h1>
                    ${this.enableBack ? html`<sl-button class="back-button" href="${resolveRouterPath()}">
                        Back
                    </sl-button>` : null}
                </div>
            </header>
        `;
      }
}
