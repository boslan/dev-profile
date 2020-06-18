import { css, CSSResult, customElement, html, LitElement, query, TemplateResult } from 'lit-element';
import { TabComponent } from './tab-component';

@customElement('tablist-component')
export class TablistComponent extends LitElement {
    @query('slot') private slotElement!: HTMLSlotElement | null;
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'tablist');
    }

    get tabs(): TabComponent[] | undefined {
        return this.slotElement
            ?.assignedElements({ flatten: true })
            .reduce((tabs: TabComponent[], element: Element) => {
                if (element && element.tagName === 'TAB-COMPONENT') {
                    tabs.push(element as TabComponent);
                }
                return tabs;
            }, []);
    }
    protected render(): TemplateResult {
        return html`<slot @tab-change="${({ detail }: CustomEvent<string>) => this.tabChange(detail)}"></slot>`;
    }

    protected tabChange(name: string): void {
        this.tabs?.forEach((tab: TabComponent) => {
            if (tab.name !== name) {
                tab.active = false;
            }
        });
    }

    static get styles(): CSSResult {
        // language=CSS
        return css`
            :host {
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
            }
        `;
    }
}
