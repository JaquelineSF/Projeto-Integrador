/*Esse código define um Web Component para um cabeçalho 
(<site-header>) que inclui um logo animado, um título e 
um menu de navegação. O cabeçalho também suporta um slot 
nomeado info para permitir a inclusão de conteúdo adicional, 
como um link de perfil do usuário, quando o componente é usado. 
O uso de Shadow DOM garante que o estilo e o conteúdo do cabeçalho 
sejam encapsulados e não afetem o restante da página*/

//Criação do Template
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
            position: relative;
        }

        header img {
            max-width: 100%;
            height: auto;
            width: auto;
            height: 35px;
        }

        header h1 {
            margin-bottom: 20px;
        }

        header nav {
            display: none;
            flex-direction: column;
            background-color: #7073a9;
            text-align: center;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            z-index: 10;
        }

        header nav a {
            color: white;
            padding: 10px 0;
            text-decoration: none;
            border-top: 1px solid white;
        }

        header nav a:hover {
            background-color: #50527a;
        }

        .hamburger {
            cursor: pointer;
            display: inline-block;
            padding: 10px;
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 20;
        }

        .hamburger div {
            width: 25px;
            height: 3px;
            background-color: white;
            margin: 5px 0;
            transition: 0.4s;
        }

        .show {
            display: flex;
        }

        @keyframes pulsar {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.1);
                opacity: 0.8;
            }
            100% {
                transform: scale(1);
                opacity: 1;
            }
        }

        .hamburger.open div:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }

        .hamburger.open div:nth-child(2) {
            opacity: 0;
        }

        .hamburger.open div:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    </style>
    <header>
        <img src="/assets/LOGO_COLOR_RGB.png" alt="logo pet id brasil">
        <h1>Pet id Brasil</h1>
        <div class="hamburger">
            <div></div>
            <div></div>
            <div></div>
        </div>
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
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);

        const hamburger = shadowRoot.querySelector('.hamburger');
        const nav = shadowRoot.querySelector('nav');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            nav.classList.toggle('show');
        });
    }
}

customElements.define('site-header', SiteHeader);

