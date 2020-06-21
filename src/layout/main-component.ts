import { LitElement, html, TemplateResult, CSSResult, css, customElement, property } from 'lit-element';
import '../components/route-view';
import '../components/tabs/tab-component';
import '../components/tabs/tablist-component';
import '../pages/about-component';
import '../pages/skills-component';
import '../pages/experience-component';
import { installRouter, navigate } from '../core/router';

enum TAB {
    about = 'about',
    skills = 'skills',
    experience = 'experience',
}
const TABS_LIST: TAB[] = [TAB.about, TAB.skills, TAB.experience];

@customElement('main-component')
export class MainComponent extends LitElement {
    @property() private activeTab: TAB = TAB.about;
    @property() showHelp: boolean = true;

    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('keydown', this.keysListener);
        installRouter((location) => {
            const tab = location.pathname.slice(1) as TAB;
            if (TABS_LIST.includes(tab)) {
                this.activeTab = tab;
            } else {
                this.changeTab(TAB.about);
            }
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('keydown', this.keysListener);
    }

    renderRouteView(tab: TAB, view: TemplateResult): TemplateResult | '' {
        return this.isActiveTab(tab) ? view : '';
    }

    protected render(): TemplateResult {
        return html`
            <tablist-component @tab-change="${({ detail }: CustomEvent<string>) => this.changeTab(detail)}">
                <tab-component ?active="${this.isActiveTab(TAB.about)}" .name="${TAB.about}"> About Me </tab-component>
                <tab-component ?active="${this.isActiveTab(TAB.skills)}" .name="${TAB.skills}"> Skills </tab-component>
                <tab-component ?active="${this.isActiveTab(TAB.experience)}" .name="${TAB.experience}">
                    Experience
                </tab-component>
            </tablist-component>
            <div class="content">
                ${this.renderRouteView(TAB.about, this.aboutTemplate)}
                ${this.renderRouteView(TAB.skills, this.skillsTemplate)}
                ${this.renderRouteView(TAB.experience, this.experienceTemplate)}
            </div>
            ${this.showHelp ? this.renderHelp() : ''}
        `;
    }

    get aboutTemplate(): TemplateResult {
        return html`<route-view>
            <about-component></about-component>
        </route-view>`;
    }
    get skillsTemplate(): TemplateResult {
        return html`<route-view>
            <skills-component></skills-component>
        </route-view>`;
    }
    get experienceTemplate(): TemplateResult {
        return html`<route-view>
            <experience-component></experience-component>
        </route-view>`;
    }

    renderHelp(): TemplateResult {
        return html`
            <div class="help">
                To navigate tabs use keyboard arrow keys
            </div>
        `;
    }

    protected changeTab(name: string): void {
        this.activeTab = name as TAB;
        navigate(name);
    }

    protected isActiveTab(tab: TAB): boolean {
        return this.activeTab === tab;
    }

    static get styles(): CSSResult {
        // language=CSS
        return css`
            :host {
                display: flex;
                flex-flow: column;
                position: relative;
            }

            .content {
                padding: 10px 0;
                font-size: 18px;
                margin: 0 40px;
            }

            .help {
                display: flex;
                color: var(--base);
                animation: ease show 300ms;
            }

            @media (max-width: 564px) {
                .help {
                    display: none;
                }
            }
        `;
    }

    private keysListener: (event: KeyboardEvent) => void = ({ code }: KeyboardEvent) => {
        const tabIndex: number = TABS_LIST.indexOf(this.activeTab);
        if (code === 'ArrowRight' && tabIndex + 1 < TABS_LIST.length) {
            this.changeTab(TABS_LIST[tabIndex + 1]);
        } else if (code === 'ArrowLeft' && tabIndex > 0) {
            this.changeTab(TABS_LIST[tabIndex - 1]);
        }
        this.showHelp = false;
    };
}
