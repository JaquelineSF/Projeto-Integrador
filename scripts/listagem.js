/*esse script permite ao usuário filtrar a lista de PETs
 conforme ele digita no campo de busca. Ao inserir um termo 
 de pesquisa, a lista é atualizada em tempo real, exibindo 
 apenas os PETs cujos nomes correspondem ao termo digitado. 
 Isso facilita a busca e localização de PETs específicos na lista.*/
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const petItems = document.querySelectorAll('.pet-item');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        petItems.forEach(item => {
            const petName = item.querySelector('p.name').textContent.toLowerCase();
            if (petName.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
