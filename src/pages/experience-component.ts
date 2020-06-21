import { css, CSSResultArray, customElement, html, LitElement, TemplateResult } from 'lit-element';
import { listStyle } from '../components/list-style';
import { typographyStyle } from '../components/typography-style';

@customElement('experience-component')
export class ExperienceComponent extends LitElement {
    protected render(): TemplateResult {
        return html`
            <ul>
                <li>
                    <div class="control">
                        <label>Instinctools</label>
                        <div class="position">Java Developer</div>
                        <div>2011 - 2014</div>
                    </div>
                </li>
                <li>
                    <div class="control">
                        <label>Instinctools</label>
                        <div class="position">Frontend Developer</div>
                        <div>2014 - 2015</div>
                    </div>
                </li>
                <li>
                    <div class="control">
                        <label>Sam Solutions</label>
                        <div class="position">Frontend Developer</div>
                        <div>2016 - 2017</div>
                    </div>
                </li>
                <li>
                    <div class="control">
                        <label>Razor Theory Projects</label>
                        <div class="position">Frontend Developer</div>
                        <div>2017 - now</div>
                    </div>
                </li>
            </ul>
        `;
    }

    static get styles(): CSSResultArray {
        // language=CSS
        return [
            css`
                :host {
                    display: flex;
                }
                .position {
                    margin-right: 5px;
                    font-weight: bold;
                }
            `,
            listStyle,
            typographyStyle,
        ];
    }
}
