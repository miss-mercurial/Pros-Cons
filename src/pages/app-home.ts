import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button';
import '@shoelace-style/shoelace/dist/components/card/card';
import '@shoelace-style/shoelace/dist/components/select/select';
import '@shoelace-style/shoelace/dist/components/option/option';
import '@shoelace-style/shoelace/dist/components/divider/divider';
import '@shoelace-style/shoelace/dist/components/icon/icon';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {

  // For more information on using properties and state in lit
  // check out this link https://lit.dev/docs/components/properties/
  @property() message = 'Hello World!🦄';

  static styles = [
    styles,
    css`
    #welcomeBar {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    #welcomeCard,
    #infoCard {
      padding: 18px;
      padding-top: 0px;
    }

    sl-card::part(footer) {
      display: flex;
      justify-content: flex-end;
    }

    @media(min-width: 750px) {
      sl-card {
        width: 70vw;
      }
    }

    @media (horizontal-viewport-segments: 2) {
      #welcomeBar {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }

      #welcomeCard {
        margin-right: 64px;
      }
    }
  `];

  async firstUpdated() {
    // this method is a lifecycle even in lit
    // for more info check out the lit docs https://lit.dev/docs/components/lifecycle/
    console.log('This is your home page');
  }

  share() {
    if ((navigator as any).share) {
      (navigator as any).share({
        title: 'PWABuilder pwa-starter ??',
        text: 'Check out the PWABuilder pwa-starter!',
        url: 'https://github.com/pwa-builder/pwa-starter',
      });
    }
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
              Using the PWABuilder pwa-starter I will make my first PWA.
            </p>

            <p>
              The purpose of it is to help people make difficult decisions,
              by listing the pros and cons and assigningen importance to each entry. The Pros & Cons tool, will then calcualte the weight
              of the pros aginst the cons, and help decide which choice to make.
            </p>

            <sl-select>
              <small>Section 1</small>
              <sl-option value="option-1">Option 1</sl-option>
              <sl-option value="option-2">Option 2</sl-option>
              <sl-option value="option-3">Option 3</sl-option>
              <sl-divider></sl-divider>
              <small>Section 2</small>
              <sl-option value="option-4">Option 4</sl-option>
              <sl-option value="option-5">Option 5</sl-option>
              <sl-option value="option-6">Option 6</sl-option>
            </sl-select>

            <sl-icon name="house"></sl-icon>

            <sl-select placeholder="Small" size="small" clearable>
              <sl-icon name="house" slot="prefix"></sl-icon>
              <sl-option value="option-1">Option 1</sl-option>
              <sl-option value="option-2">Option 2</sl-option>
              <sl-option value="option-3">Option 3</sl-option>
            </sl-select>



            ${'share' in navigator
              ? html`<sl-button slot="footer" variant="primary" @click="${this.share}">Share this Starter??</sl-button>`
              : null}
          </sl-card>

          <sl-card id="infoCard">
            <h2>Technology Used - Delete later??</h2>

            <ul>
              <li>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </li>

              <li>
                <a href="https://lit.dev">lit</a>
              </li>

              <li>
                <a href="https://shoelace.style/">Shoelace</a>
              </li>

              <li>
                <a href="https://github.com/thepassle/app-tools/blob/master/router/README.md"
                  >App Tools Router</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${resolveRouterPath('about')}" variant="primary">Navigate to About</sl-button>
          <sl-button href="${resolveRouterPath('new-page')}" variant="primary">Navigate to New Page</sl-button>

          </div>
      </main>
    `;
  }
}
