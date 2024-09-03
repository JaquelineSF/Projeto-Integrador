// Estrutura de dados para os eventos, permitindo múltiplos eventos por dia
const eventos = {
    '13': [
        { titulo: 'Feira de Adoção', data: '13/07' },
        { titulo: 'Palestra sobre Adoção Responsável', data: '13/07' }
    ],
    '20': [
        { titulo: 'Arrecadação de Alimentos', data: '20/07' },
        { titulo: 'Distribuição de Roupas para Pets', data: '20/07' }
    ],
    '30': [
        { titulo: 'Campanha de Vacinação', data: '30/07' }
    ],
};

// Referências aos elementos do DOM
const calendarioElemento = document.getElementById('calendario');
const detalhesEventoElemento = document.getElementById('detalhes-evento');

// Função para criar o calendário
function criarCalendario() {
    for (let dia = 1; dia <= 31; dia++) {
        const diaElemento = document.createElement('div'); // Cria um elemento para o dia
        diaElemento.className = 'dia'; // Adiciona a classe 'dia'
        diaElemento.textContent = dia; // Define o texto do dia

        // Verifica se há eventos para o dia
        if (eventos[dia]) {
            diaElemento.classList.add('destaque'); // Destaca o dia
            // Adiciona um evento de clique para mostrar os detalhes do evento
            diaElemento.onclick = () => mostrarDetalhesEvento(eventos[dia]);
        }

        calendarioElemento.appendChild(diaElemento); // Adiciona o dia ao calendário
    }
}

// Função para mostrar os detalhes dos eventos ao clicar no dia
function mostrarDetalhesEvento(listaEventos) {
    detalhesEventoElemento.style.display = 'block'; // Exibe a div de detalhes
    detalhesEventoElemento.innerHTML = '<h3>Eventos:</h3>'; // Define o título da seção de eventos

    // Itera sobre a lista de eventos e adiciona à div de detalhes
    listaEventos.forEach(evento => {
        detalhesEventoElemento.innerHTML += `
            <p><strong>${evento.titulo}</strong><br>Data: ${evento.data}</p>
        `;
    });
}

// Chama a função para criar o calendário ao carregar a página
criarCalendario();

