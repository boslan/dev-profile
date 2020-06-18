import { css, CSSResult } from 'lit-element';

// language=CSS
export const animations: CSSResult = css`
    @keyframes show {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
