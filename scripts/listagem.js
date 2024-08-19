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
