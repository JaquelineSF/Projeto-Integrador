const template = document.createElement('template');
template.innerHTML = `
    <style>
        header {
            width: 100%;
            background-color: #7073a9;
            color: white;
            padding: 1rem 0;
            text-align: center;
            margin-bottom: 20px;
        }
        
        header img {
            margin-bottom: 10px;
        }
        
        header h1 {
            margin-bottom: 20px;
        }
        
        header nav a {
            color: white;
            margin: 0 10px;
            text-decoration: none;
            display: inline-block;
            padding: 5px 10px;
            border-radius: 5px;
        }
        
        header nav a:hover {
            background-color: #7073a9;
        }
    </style>
    <header>
        <img src="/assets/LOGO_COLOR_RGB.png" alt="logo pet id brasil" height="35" width="68">
        <h1>Pet id Brasil</h1>
        <slot name="info">
            <a href="./profile.html">
                Perfil do usuário
            </a>
        </slot>
        <nav>
            <a href="./listagem.html">Listagem de pets</a>
            <a href="./adocao.html">Adoção de pets</a>
            <a href="./eventos.html">Eventos Próximos</a>
            <a href="./denuncia.html">Canal de denúncias</a>
            <a href="./cadastro_pet.html">Cadastro do Pet</a>
        </nav>
    </header>
`;

class SiteHeader extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }
}

customElements.define('site-header', SiteHeader);
