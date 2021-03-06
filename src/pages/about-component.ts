import { css, CSSResultArray, customElement, html, LitElement, TemplateResult } from 'lit-element';
import { typographyStyle } from '../components/typography-style';
import { layoutStyle } from '../components/layout-style';

@customElement('about-component')
export class AboutComponent extends LitElement {
    protected render(): TemplateResult {
        return html`
            <article>
                <div class="control">
                    <label for="location">Current location</label>
                    <span id="location" class="text">Minsk</span>
                </div>
                <div class="control">
                    <label for="born">Born</label>
                    <span id="born" class="text">1992</span>
                </div>
            </article>
        `;
    }

    static get styles(): CSSResultArray {
        // language=CSS
        return [
            typographyStyle,
            layoutStyle,
            css`
                :host {
                    display: flex;
                }
            `,
        ];
    }
}
