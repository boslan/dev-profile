import { css, CSSResult, CSSResultArray, customElement, html, LitElement, TemplateResult } from 'lit-element';
import { animations } from '../components/animations-style';

@customElement('skills-component')
export class SkillsComponent extends LitElement {
    protected render(): TemplateResult {
        return html`<div>
            <ul>
                <li>ECMAScript</li>
                <li>TypeScript</li>
                <li>WebComponents</li>
                <li>CSS</li>
                <li>HTML</li>
            </ul>
        </div>`;
    }

    static get styles(): CSSResultArray {
        // language=CSS
        return [
            css`
                :host {
                    display: flex;
                    justify-content: center;
                    animation: show ease 300ms;
                }

                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                li:before {
                    content: '[';
                }
                li:after {
                    content: ']';
                }
            `,
            animations,
        ];
    }
}
