const template = document.createElement('template');
template.innerHTML = `
    <header>
        <img src="/assets/LOGO_COLOR_RGB.png" alt="logo pet id brasil" height="35" width="68">
        <h1>Pet id Brasil</h1>
        <slot name="info">
            <a href="./profile.html">
                Perfil do usuário
            </a>
        </slot>
    </header>
`

class SiteHeader extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone)
    }
}

customElements.define('site-header', SiteHeader);