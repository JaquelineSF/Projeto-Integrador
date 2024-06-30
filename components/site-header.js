const template = document.createElement('template');
template.innerHTML = `
    <header>
        <p>LOGO</p>
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