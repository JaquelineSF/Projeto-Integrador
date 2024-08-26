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
        }
        
        header img {
            margin-bottom: 10px;
            animation: pulsar 2s infinite;
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
    </style>
    <header>
        <img src="/assets/LOGO_COLOR_RGB.png" alt="logo pet id brasil" height="35" width="68">
        <h1>Pet id Brasil</h1>
        <slot name="info">
            <a href="./profile.html">Perfil do usuário</a>
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


//Definição da Classe do Web Component
class SiteHeader extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({mode: 'closed'});
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }
}

//Registro do Componente Customizado

customElements.define('site-header', SiteHeader);
