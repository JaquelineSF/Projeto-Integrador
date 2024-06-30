const template = document.createElement('template');
template.innerHTML = `
    <footer>
        <nav>
            <a href="./listagem.html">Listagem de pets</a>
            <a href="./adocao.html">Adoção de pets</a>
            <a href="./eventos.html">Eventos Próximos</a>
            <a href="./denuncia.html">Canal de denúncias</a>
        </nav>
        <p>LOGO</p>
        <section>
            <p>Contatos: </p>
            <ul>
                <li>Telefone: (99) 99999-9999</li>
                <li>E-mail: petid@brasil.com</li>
            </ul>
        </section>
    </footer>
`

class SiteFooter extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone)
    }
}

customElements.define('site-footer', SiteFooter);