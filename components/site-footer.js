/*Esse código define um componente Web personalizado para um rodapé 
(<site-footer>) que inclui um menu de navegação, uma imagem de logo 
e informações de contato. O uso de Shadow DOM garante que os estilos 
e o conteúdo do rodapé sejam encapsulados, evitando conflitos com o 
restante do documento. Isso facilita a reutilização do rodapé em diferentes 
partes do site ou em diferentes projetos.*/

//Criação do Template
const template = document.createElement('template');
template.innerHTML = `
    <style>
        footer {
            width: 100%;
            background-color: #7073a9;
            color: white;
            text-align: center;
            padding: 1rem 0;
            margin-top: 2rem;
        }

        footer img {
            max-width: 100%;
            height: auto;
            width: auto;
            height: 35px;
        }

        footer nav a {
            color: white;
            margin: 0 10px;
            text-decoration: none;
            display: inline-block;
            padding: 5px 10px;
            border-radius: 5px;
        }

        footer nav a:hover {
            background-color: #7073a9;
        }

        footer section {
            margin-top: 20px;
        }

        footer ul {
            list-style-type: none;
            padding: 0;
        }

        footer ul li {
            margin-bottom: 5px;
        }
    </style>
    <footer>
        <nav>
            <a href="./listagem.html">Listagem de pets</a>
            <a href="./adocao.html">Adoção de pets</a>
            <a href="./eventos.html">Eventos Próximos</a>
            <a href="./denuncia.html">Canal de denúncias</a>
            <a href="./cadastro_pet.html">Cadastro do Pet</a>
        </nav>
        <p><img src="/assets/LOGO_COLOR_RGB.png" alt="logo pet id brasil"></p>
        <section>
            <p>Contatos: </p>
            <ul>
                <li>Telefone: (99) 99999-9999</li>
                <li>E-mail: petid@brasil.com</li>
            </ul>
        </section>
    </footer>
`;

class SiteFooter extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        let clone = template.content.cloneNode(true);
        shadowRoot.append(clone);
    }
}

customElements.define('site-footer', SiteFooter);

