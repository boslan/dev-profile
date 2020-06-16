import { css, CSSResultArray, customElement, html, LitElement, TemplateResult } from 'lit-element';
import { animations } from '../core/animations-style';

@customElement('about-component')
export class AboutComponent extends LitElement {
    protected render(): TemplateResult {
        return html`
            <div>Current location: Minsk</div>
            <div>Born: 1992</div>
        `;
    }

    static get styles(): CSSResultArray {
        // language=CSS
        return [
            css`
                :host {
                    display: flex;
                    flex-flow: column;
                    align-items: center;
                    animation: show ease 300ms;
                }
            `,
            animations,
        ];
    }
}
