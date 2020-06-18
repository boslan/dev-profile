import { css, CSSResultArray, customElement, html, LitElement, TemplateResult } from 'lit-element';
import { animations } from '../components/animations-style';
import { listStyle } from '../components/list-style';

@customElement('experience-component')
export class ExperienceComponent extends LitElement {
    protected render(): TemplateResult {
        return html`
            <ul>
                <li>Instinctools 2011 - 2014: Java Developer</li>
                <li>Instinctools 2014 - 2015: Frontend Developer</li>
                <li>Sam Solutions 2016 - 2017: Frontend Developer</li>
                <li>Razor Theory Projects 2017 - now: Frontend Developer</li>
            </ul>
        `;
    }

    static get styles(): CSSResultArray {
        // language=CSS
        return [
            css`
                :host {
                    display: flex;
                    align-items: center;
                    flex-flow: column;
                    animation: show ease 300ms;
                }

                .total {
                    margin-bottom: 5px;
                }
            `,
            animations,
            listStyle,
        ];
    }
}
