import { LitElement, html} from 'lit';
import { customElement } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/select/select';
import '@shoelace-style/shoelace/dist/components/option/option';

import { styles } from '../pages/app-about/about-styles';
import { styles as sharedStyles } from '../styles/shared-styles'

@customElement('importance-selector')
export class ImportanceSelector extends LitElement {
  static styles = [
    sharedStyles,
    styles
  ];

  render() {
    return html`
      <h1>test</h1>
    `;
  }
}
