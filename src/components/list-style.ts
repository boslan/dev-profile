import { css, CSSResult } from 'lit-element';

// language=CSS
export const listStyle: CSSResult = css`
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 6px 0;
    }
    li:first-child,
    li:last-child {
        margin: 0;
    }

    li:before {
        content: '[';
    }
    li:after {
        content: ']';
    }
`;
