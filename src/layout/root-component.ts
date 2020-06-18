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
            <footer>
                <theme-switch></theme-switch>
            </footer>
        `;
    }

    static get styles(): CSSResult {
        // language=CSS
        return css`
            :host {
                display: flex;
                flex-flow: column;
                padding: 0 15px;
                color: var(--primary);
                background: var(--background);
            }

            footer {
                display: flex;
                justify-content: center;
            }

            header-component {
                margin: 20px 0;
            }

            header-component,
            main-component {
                flex: 1;
            }

            @media (max-width: 564px) {
                header-component,
                main-component {
                    flex: none;
                }
                header-component {
                    margin: 0 0 20px;
                }
                main-component {
                    align-items: center;
                }
            }
        `;
    }
}
