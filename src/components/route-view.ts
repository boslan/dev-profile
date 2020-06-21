import { css, CSSResult, customElement, html, LitElement, TemplateResult } from 'lit-element';

@customElement('route-view')
export class RouteView extends LitElement {
    protected render(): TemplateResult {
        return html`<slot></slot>`;
    }

    static get styles(): CSSResult {
        // language=CSS
        return css`
            :host {
                display: flex;
                animation: show ease 300ms;
            }
            @keyframes show {
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
        `;
    }
}
