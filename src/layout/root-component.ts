import { customElement, LitElement, TemplateResult, html, CSSResult, css } from 'lit-element';
import './header-component';
import './main-component';
import '../components/theme-switch-component';

@customElement('root-component')
export class RootComponent extends LitElement {
    protected render(): TemplateResult {
        return html`
            <header-component role="header"></header-component>
            <main-component role="main"></main-component>
            <aside class="toolbar">
                <theme-switch></theme-switch>
            </aside>
        `;
    }

    static get styles(): CSSResult {
        // language=CSS
        return css`
            :host {
                display: flex;
                flex-basis: 100%;
                flex-flow: column;
                padding: 0 15px;
                color: var(--primary);
                background: var(--background);
                position: relative;
            }

            .toolbar {
                display: flex;
                justify-content: center;
                position: absolute;
                top: 0;
                right: 0;
            }

            header-component {
                margin: 20px 0;
            }

            header-component,
            main-component {
                flex: 1;
            }

            main-component {
                margin-bottom: 30px;
            }

            @media (max-width: 564px) {
                header-component,
                main-component {
                    flex: none;
                }
                header-component {
                    margin: 0 0 20px;
                }
            }

            @media (min-width: 564px) {
                main-component {
                    align-items: center;
                }
            }
        `;
    }
}
