// Função para chamar o endpoint da API e renderizar os dados
function obterDadosDaAPI() {
  fetch('https://pi-univesp-69on.onrender.com/V-1.00/api/') // Substitua 'https://sua-api.com/dados' pela URL do seu endpoint
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
        // Cria um elemento de div para cada item
        const elemento = document.createElement('div');
        elemento.innerHTML = `
        <p class="pi_univesp_obj"> 

        <span class="nome-span">Nome:
        <span class="nome-item ">${item.nome}</span></span>

        </p>
          
          <img  src=" ${item.imagem}" alt="Imagem" />
        `;

        // Adiciona o elemento ao contêiner
        container.appendChild(elemento);
      });
      
    })
    .catch(error => {
      console.error('Erro ao obter os dados da API:', error);
    });
}

// Chama a função para obter os dados da API quando a página carrega
window.onload = obterDadosDaAPI;
