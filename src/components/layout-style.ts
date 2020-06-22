import { css, CSSResult } from 'lit-element';

// language=CSS
export const layoutStyle: CSSResult = css`
    article {
        margin: 0 10px 20px;
    }
    article:last-of-type {
        margin-bottom: 0;
    }
    
    h4 {
        margin: 0 0 10px;
    }
`;
