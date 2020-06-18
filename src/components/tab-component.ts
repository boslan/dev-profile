import { css, CSSResult, customElement, html, LitElement, property, query, TemplateResult } from 'lit-element';

@customElement('tab-component')
export class TabComponent extends LitElement {
    @property({ type: String }) name: string = '';
    @property({ type: Boolean, reflect: true, attribute: 'active' }) set active(value: boolean) {
        this.setAttribute('aria-selected', String(value));
        if (value) {
            this.focus();
        }
        this._active = value;
    }
    get active(): boolean {
        return this._active;
    }
    private _active: boolean = false;

    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'tab');
        this.setAttribute('tabindex', '0');
        this.addEventListener('click', () => this.onActive());
        this.addEventListener('keydown', ({ code }) => {
            if (code === 'Enter') {
                this.onActive();
            }
        });
    }

    protected render(): TemplateResult {
        return html` <slot></slot> `;
    }

    onActive() {
        this.active = true;
        this.dispatchEvent(
            new CustomEvent<string>('tab-change', {
                composed: true,
                bubbles: true,
                detail: this.name,
            }),
        );
    }

    static get styles(): CSSResult {
        // language=CSS
        return css`
            :host {
                margin: 0 5px;
                padding: 2px 5px;
                cursor: pointer;
                font-size: 20px;
                color: var(--primary);
                background: var(--background);
            }

            :host(:focus) {
                box-shadow: inset 0 1px 0 0 var(--primary);
                outline: 0;
            }

            :host([active]) {
                color: var(--background);
                background: var(--primary);
            }
        `;
    }
}
