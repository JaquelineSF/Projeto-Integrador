/*Esse código define um componente Web personalizado para um rodapé 
(<site-footer>) que inclui um menu de navegação, uma imagem de logo 
e informações de contato. O uso de Shadow DOM garante que os estilos 
e o conteúdo do rodapé sejam encapsulados, evitando conflitos com o 
restante do documento. Isso facilita a reutilização do rodapé em diferentes 
partes do site ou em diferentes projetos.*/

//Criação do Template
// Criação do template para o componente de footer
const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
    <style>
        footer {
            width: 100%;
            background-color: #7073a9;
            color: white;
            text-align: center;
            padding: 1rem;
            margin-top: 2rem;
            box-sizing: border-box; /* Garante que o padding não afete a largura total */
        }

        footer nav {
            margin-bottom: 1rem;
        }

        footer nav a {
            color: white;
            margin: 0 10px;
            text-decoration: none;
            display: inline-block;
            padding: 5px 10px;
            border-radius: 5px;
            background-color: transparent;
        }

        footer nav a:hover {
            background-color: rgba(255, 255, 255, 0.2); /* Adiciona um fundo ao hover */
        }

        footer section {
            margin-top: 1rem;
            padding: 0 10px; /* Adiciona algum preenchimento lateral */
        }

        footer section p {
            margin: 0;
        }

        footer ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }

        footer ul li {
            margin: 0;
            padding: 0; /* Remove padding para evitar barras brancas */
        }

        footer img {
            margin-top: 1rem; /* Espaçamento acima do logo */
        }
    </style>
    <footer>
        <nav>
            <a href="./cuidados.html">Cuidados com o PET</a>
            <a href="./listagem.html">Listagem de pets</a>
            <a href="./adocao.html">Adoção de pets</a>
            <a href="./eventos.html">Eventos Próximos</a>
            <a href="./denuncia.html">Canal de denúncias</a>
            <a href="./cadastro_pet.html">Cadastro do Pet</a>
        </nav>
        <p><img src="assets/LOGO_COLOR_RGB.png" alt="logo pet id brasil" height="35" width="68"></p>
        <section>
            <p>Contatos:</p>
            <ul>
                <li>Telefone: (99) 99999-9999</li>
                <li>E-mail: petid@brasil.com</li>
            </ul>
            <p>&copy; 2024 Cuidados com Pets. Todos os direitos reservados.</p>
        </section>
    </footer>
`;

// Definição da Classe do Web Component
class SiteFooter extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'closed' });
        let clone = footerTemplate.content.cloneNode(true);
        shadowRoot.append(clone);
    }
}

// Registro do Componente Customizado
customElements.define('site-footer', SiteFooter);
