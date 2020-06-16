import { css, CSSResult, customElement, html, LitElement, property, TemplateResult } from 'lit-element';

@customElement('theme-switch')
export class ThemeSwitchComponent extends LitElement {
    @property() isDark = false;

    connectedCallback() {
        super.connectedCallback();
        this.detectTheme();
    }

    detectTheme(): void {
        const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isAppDark = localStorage.getItem('theme') === 'dark';
        const hasAppTheme = !!localStorage.getItem('theme');
        const theme = isAppDark || (isOsDark && !hasAppTheme) ? 'dark' : 'light';
        this.setTheme(theme);
    }

    setTheme(theme: 'dark' | 'light'): void {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        this.isDark = theme === 'dark';
    }
    protected render(): TemplateResult {
        return html` ${this.isDark
            ? html`<button @click="${() => this.setTheme('light')}">Return to the light side</button>`
            : html`<button @click="${() => this.setTheme('dark')}">Turn to the dark side</button>`}`;
    }

    static get styles(): CSSResult {
        // language=CSS
        return css`
            button {
                outline: 0;
                border: 0;
                line-height: 2;
                padding: 0 10px;
                background: var(--background);
                color: var(--primary);
                cursor: pointer;
            }
            button:hover {
                background: var(--primary);
                color: var(--background);
            }
            button:focus,
            button:active,
            button::-moz-focus-inner {
                outline: 0;
                border: 0;
                box-shadow: inset 0 1px 0 0 var(--primary);
            }
        `;
    }
}
