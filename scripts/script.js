const eventos = {
    '13': [
        { titulo: 'Feira de Adoção', data: '13/07' },
        { titulo: 'Palestra sobre Adoção Responsável', data: '13/07' }
    ],
    '20': [
        { titulo: 'Arrecadação de Alimentos', data: '20/07' },
        { titulo: 'Distribuição de Roupas para Pets', data: '20/07' }
    ],
    '27': [
        { titulo: 'Campanha de Vacinação', data: '27/07' }
    ],
};

const calendarioElemento = document.getElementById('calendario');
const detalhesEventoElemento = document.getElementById('detalhes-evento');
const monthYearElement = document.getElementById('month-year');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function criarCalendario(month, year) {
    calendarioElemento.innerHTML = '';
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();
    const monthNames = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    monthYearElement.textContent = `${monthNames[month]} ${year}`;

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        calendarioElemento.appendChild(emptyCell);
    }

    for (let dia = 1; dia <= daysInMonth; dia++) {
        const diaElemento = document.createElement('div');
        diaElemento.className = 'dia';
        diaElemento.textContent = dia;

        if (eventos[dia]) {
            diaElemento.classList.add('destaque');
            diaElemento.onclick = () => mostrarDetalhesEvento(eventos[dia]);
        }

        calendarioElemento.appendChild(diaElemento);
    }
}

function mostrarDetalhesEvento(listaEventos) {
    detalhesEventoElemento.style.display = 'block';
    detalhesEventoElemento.innerHTML = '<h3>Eventos:</h3>';
    listaEventos.forEach(evento => {
        detalhesEventoElemento.innerHTML += `<p><strong>${evento.titulo}</strong><br>Data: ${evento.data}</p>`;
    });
}

prevMonthButton.onclick = () => {
    currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    currentYear = currentMonth === 11 ? currentYear - 1 : currentYear;
    criarCalendario(currentMonth, currentYear);
};

nextMonthButton.onclick = () => {
    currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    currentYear = currentMonth === 0 ? currentYear + 1 : currentYear;
    criarCalendario(currentMonth, currentYear);
};

document.addEventListener('DOMContentLoaded', () => {
    criarCalendario(currentMonth, currentYear);
});


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav a, footer nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
