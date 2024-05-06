// Configurações do canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Definir tamanho do canvas
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;

// Variáveis para desenho
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0; // Cor inicial do desenho
let lineWidth = 5; // Espessura inicial da linha

// Função para desenhar
function draw(e) {
    if (!isDrawing) return; // Parar se não estiver desenhando
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // Cor do desenho (matiz)
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = lineWidth; // Espessura da linha
    ctx.beginPath();
    ctx.moveTo(lastX, lastY); // Começa do último ponto
    ctx.lineTo(e.offsetX, e.offsetY); // Move até a posição atual
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY]; // Atualiza a posição
    hue++; // Altera a cor gradualmente
}

// Event listeners para desenhar
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

// Adicionar funcionalidade de seleção de cor
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', () => {
    hue = parseInt(colorPicker.value); // Define a cor com base na seleção do colorPicker
});

// Adicionar funcionalidade de seleção de espessura de linha
const lineWidthInput = document.getElementById('lineWidth');
lineWidthInput.addEventListener('input', () => {
    lineWidth = parseInt(lineWidthInput.value); // Define a espessura da linha com base na entrada do usuário
});

// Adicionar funcionalidade de salvar desenho
const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click', () => {
    const nomeDesenho = prompt('Por favor, insira o nome do desenho:'); // Solicitar o nome do desenho ao usuário
    const dataURL = canvas.toDataURL(); // Converte o canvas para uma URL de dados
    // Enviar a imagem para a API
    enviarParaAPI(nomeDesenho, dataURL);
   
});

// Função para enviar imagem para a API
function enviarParaAPI(nomeDesenho, imagemBase64) {
    const dataApi = {nome: nomeDesenho,
                  imagem: imagemBase64 
                };
    // Aqui você faria uma solicitação HTTP para a sua API, enviando a imagemBase64 e o nome do desenho como dados
    // Por exemplo, usando fetch ou XMLHttpRequest
    // Substitua o URL_API pelo URL da sua API
     
    fetch('http://127.0.0.1:8000/V-1.00/desenhos/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
       
        body: JSON.stringify(dataApi) // Enviar o nome do desenho junto com a imagem
    })
    .then(response => {
        if (response.ok) {
            console.log('Desenho enviado com sucesso para a API.');
            // Faça algo com a resposta da API, se necessário
        } else {
            console.error('Erro ao enviar desenho para a API.');
        }
    })
    .catch(error => {
        console.error('Erro ao enviar desenho para a API:', error);
    });
    
}
