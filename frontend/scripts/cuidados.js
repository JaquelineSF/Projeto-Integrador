document.addEventListener("DOMContentLoaded", function () {
    // Objeto com informações dos cuidados
    const cuidadosData = {
        "cuidados-cachorros": {
            title: "Cuidados com Cachorros",
            content: "<p>Cachorros precisam de alimentação balanceada, exercícios regulares, visitas ao veterinário e muito carinho. A higiene também é essencial, incluindo banhos e escovação.</p>",
            image: "assets/cuidados-cachorros.jpg"
        },
        "cuidados-gatos": {
            title: "Cuidados com Gatos",
            content: "<p>Gatos são animais independentes, mas precisam de cuidados especiais, como alimentação adequada, brincadeiras e higiene, como a limpeza da caixa de areia.</p>",
            image: "assets/cuidados-gatos.jpg"
        },
        "cuidados-aves": {
            title: "Cuidados com Aves",
            content: "<p>Aves precisam de uma gaiola espaçosa, alimentação adequada e cuidados com as penas. Permitir que voem fora da gaiola em segurança também é importante.</p>",
            image: "assets/cuidados-aves.jpg"
        },
        "cuidados-coelhos": {
            title: "Cuidados com Coelhos",
            content: "<p>Coelhos necessitam de uma alimentação rica em fibras, um espaço seguro para se exercitar e cuidados com a higiene da gaiola.</p>",
            image: "assets/cuidados-coelhos.jpg"
        },
        "cuidados-outros": {
            title: "Cuidados com Outros Pets",
            content: "<p>Outros pets, como roedores e répteis, precisam de cuidados específicos. Verifique as necessidades de cada espécie, como alimentação e limpeza do habitat.</p>",
            image: "assets/cuidados-outros.jpg"
        }
    };

    // Função para atualizar o conteúdo da página
    function updateContent(sectionId) {
        const sectionData = cuidadosData[sectionId];
        if (sectionData) {
            // Atualiza o título, conteúdo e imagem da seção
            document.querySelector("#cuidados-title").innerText = sectionData.title;
            document.querySelector("#cuidados-content").innerHTML = sectionData.content;
            document.querySelector("#cuidados-image").src = sectionData.image;
            document.querySelector("#cuidados-image").alt = sectionData.title;
        }
    }

    // Adiciona evento de clique aos links de navegação
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            const sectionId = this.getAttribute("href").substring(1); // Obtém o ID da seção
            updateContent(sectionId); // Atualiza o conteúdo da seção
        });
    });

    // Carrega conteúdo inicial (por exemplo, cuidados com cachorros)
    updateContent("cuidados-cachorros");
});

