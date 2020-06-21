import { css, CSSResultArray, customElement, html, LitElement, TemplateResult } from 'lit-element';
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
                    <li>React</li>
                    <li>Polymer</li>
                    <li>Aurelia</li>
                    <li>Redux</li>
                    <li>RxJS</li>
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
                }
                article {
                    margin: 0 5px;
                }
            `,
            listStyle,
        ];
    }
}
