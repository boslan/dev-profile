import { css, CSSResult } from 'lit-element';

// language=CSS
export const listStyle: CSSResult = css`
    ul {
        display: flex;
        flex-flow: column;
        align-items: flex-start;

        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        display: flex;
        margin: 6px 0;
        padding: 4px;
    }

    li:hover {
        box-shadow: inset 0 0 0 1px var(--primary);
    }

    li:first-child,
    li:last-child {
        margin: 0;
    }

    li:before {
        content: '';
        box-shadow: inset 1px 0 0 0.5px var(--primary), inset 1px 1px 0 0.5px var(--primary),
            inset 1px -1px 0 0.5px var(--primary);
        width: 6px;
        margin: -4px 2px -4px -4px;
    }

    li:after {
        content: '';
        box-shadow: inset -1px 0 0 0.5px var(--primary), inset -1px 1px 0 0.5px var(--primary),
            inset -1px -1px 0 0.5px var(--primary);
        width: 6px;
        margin: -4px -4px -4px 2px;
    }
`;
