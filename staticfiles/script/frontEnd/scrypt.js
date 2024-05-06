// Função para chamar o endpoint da API e renderizar os dados
function obterDadosDaAPI() {
    fetch('https://sua-api.com/dados') // Substitua 'https://sua-api.com/dados' pela URL do seu endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error('Não foi possível obter os dados da API');
        }
        return response.json();
      })
      .then(data => {
        // Renderiza os dados no navegador
        const container = document.getElementById('dados-container');
        container.innerHTML = ''; // Limpa o conteúdo anterior
        data.forEach(item => {
          const elemento = document.createElement('div');
          elemento.textContent = `Nome: ${item.nome}, Descrição: ${item.descricao}`;
          container.appendChild(elemento);
        });
      })
      .catch(error => {
        console.error('Erro ao obter os dados da API:', error);
      });
  }
  
  // Chama a função para obter os dados da API quando a página carrega
  window.onload = obterDadosDaAPI;
  