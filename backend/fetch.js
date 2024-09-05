fetch('http://localhost:3001/api/pets')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Dados recebidos do backend:', data);
        // Aqui você pode usar os dados para renderizar no frontend
    })
    .catch(error => {
        console.error('Houve um problema com a requisição:', error);
    });
