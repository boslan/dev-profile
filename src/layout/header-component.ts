import { css, CSSResult, customElement, html, LitElement, query, TemplateResult } from 'lit-element';

@customElement('header-component')
export class HeaderComponent extends LitElement {
    @query('.name') nameEl!: HTMLElement;
    protected render(): TemplateResult {
        return html` <header class="header">
            <div class="profile">
                <figure class="photo-container">
                    <img class="photo-image" src="/images/photo.jpg" alt="Photo" />
                </figure>
                <div class="about">
                    <div class="position">Frontend Software Engineer</div>
                    <div class="name">Bogdan Poslovsky</div>

                    <div class="social">
                        <a target="_blank" href="https://www.facebook.com/bogdan.poslovsky">
                            <i class="social-icon facebook"></i>
                        </a>
                        <a target="_blank" href="https://github.com/boslan">
                            <i class="social-icon github"></i>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/bogdan-poslovsky-769199b7">
                            <i class="social-icon linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>`;
    }

    static get styles(): CSSResult {
        // language=CSS
        return css`
            :host {
                display: flex;
            }

            .header {
                display: flex;
                align-items: flex-end;
                flex: 1;
            }

            .profile {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .about {
                display: flex;
                flex-flow: column;
            }

            .position {
                font-size: 24px;
            }

            .name {
                font-size: 48px;
            }

            .photo-container {
                margin: 20px 40px;
                height: 104px;
                width: 104px;
                border-radius: 50%;
                box-shadow: 0 0 15px -5px var(--primary);
                display: flex;
                align-items: center;
                justify-content: center;
                transition: transform ease 300ms;
                background: var(--light-100);
            }

            .photo-image {
                border-radius: 50%;
                width: 100px;
                height: 100px;
            }

            .photo-container:hover {
                transform: scale(1.4);
            }

            .social {
                display: flex;
                margin: 10px 0;
            }

            .social a:not(:last-of-type) {
                margin-right: 5px;
            }

            .social a {
                border-radius: 50%;
                padding: 2px;
            }

            .social a:focus {
                outline: 0;
                box-shadow: inset 0 0 0 1px var(--primary);
            }

            .social a:active .social-icon {
                background-color: var(--ocean-base);
            }

            .social-icon {
                display: block;
                width: 48px;
                height: 48px;
                background-color: var(--primary);
                background-size: 48px 48px;
                mask-repeat: no-repeat;
                mask-size: 48px;
                mask-position: center;
                -webkit-mask-repeat: no-repeat;
                -webkit-mask-size: 48px;
                -webkit-mask-position: center;
            }

            .social-icon.facebook {
                mask-image: url(/images/social/facebook.svg);
                -webkit-mask-image: url(/images/social/facebook.svg);
            }

            .social-icon.github {
                mask-image: url(/images/social/github.svg);
                -webkit-mask-image: url(/images/social/github.svg);
            }

            .social-icon.linkedin {
                mask-image: url(/images/social/linkedin.svg);
                -webkit-mask-image: url(/images/social/linkedin.svg);
            }

            .social-icon:hover {
                background-color: var(--ocean-base);
            }

            @media (max-width: 564px) {
                .header {
                    justify-content: center;
                }

                .profile {
                    flex-flow: column;
                }

                .name,
                .position {
                    text-align: center;
                }

                .position {
                    font-size: 20px;
                }

                .name {
                    font-size: 30px;
                }
                .social {
                    justify-content: center;
                }
            }
        `;
    }
}
