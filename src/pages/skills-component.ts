import { css, CSSResult, CSSResultArray, customElement, html, LitElement, TemplateResult } from 'lit-element';
import { animations } from '../components/animations-style';
import { listStyle } from '../components/list-style';

@customElement('skills-component')
export class SkillsComponent extends LitElement {
    protected render(): TemplateResult {
        return html`
            <article>
                <h4>Base</h4>
                <ul>
                    <li>JS/CSS/HTML</li>
                    <li>WebComponents</li>
                    <li>Node.js</li>
                    <li>NoSQL/SQL databases</li>
                </ul>
            </article>

            <article>
                <h4>Frameworks/Libs</h4>
                <ul>
                    <li>AngularJS/Angular</li>
                    <li>LitElement</li>
                    <li>Polymer</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>RxJS</li>
                    <li>Aurelia</li>
                </ul>
            </article>
        `;
    }

    static get styles(): CSSResultArray {
        // language=CSS
        return [
            css`
                :host {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    animation: show ease 300ms;
                }
                article {
                    margin: 0 5px;
                }
            `,
            animations,
            listStyle,
        ];
    }
}
