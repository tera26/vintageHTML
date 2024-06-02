function showDescription(description) {
    // Remove a descrição anterior, se existir
    const existingDescription = document.querySelector('.description.active');
    if (existingDescription) {
        existingDescription.remove();
    }

    // Cria um novo elemento de descrição
    const descElement = document.createElement('div');
    descElement.className = 'description active';
    descElement.innerText = description;

    // Define uma posição aleatória na página
    const body = document.body;
    const maxX = body.clientWidth - 300; // 300 é a largura da descrição
    const maxY = body.clientHeight - 50; // 50 é a altura aproximada da descrição

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    descElement.style.left = `${randomX}px`;
    descElement.style.top = `${randomY}px`;
    descElement.style.display = 'block';

    // Adiciona o elemento ao body
    body.appendChild(descElement);
}

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todas as imagens
    const images = document.querySelectorAll('.primeiralinha img');
    // Seleciona a lista de histórico de ações
    const actionsList = document.getElementById('actions-list');
    // Seleciona o botão de limpar histórico
    const clearButton = document.getElementById('clear-button');

    // Define as mensagens personalizadas para cada imagem
    const messages = {
        img1: '68',
        img2: '26',
        img3: '100',
        img4: '2',
        img5:'19',
        img6: '33',
        img7: '21',
        img8:'18',
        img9:'91',
        img10:'84',
        img11:'53',
        img12:'66',
        img13:'13',
        img14:'42',
        img15:'70',
        img16:'8',
        img17:'67',
        img18:'82',
        img19:'24',
        img20:'3',
        img21:'49',
        img22:'28',
        img23:'30',
        img24:'22',
        img25:'10',
        img26:'51',
        img27:'34',
        img28:'56',
        img29:'6',
        img30:'0',
        img31:'20',
        img32:'101',
        img33:'1',
        img34:'23',
        img35:'87',
        img36:'80',
        img37:'45',
        img38:'38',
        img39:'55',
        img40:'32',
        img41:'88',
        img42:'93',
        img43:'46',
        img44:'3',
        img45:'59',
        img46:'71',
        img47:'73',
        img48:'85',
        img49:'25',
        img50:'39',
        img51:'57',
        img52:'5',
        img53:'89',
        img54:'12',
        
        // Adicione mais mensagens conforme necessário
    };

    // Adiciona um ouvinte de evento de clique a cada imagem
    images.forEach(function (image) {
        image.addEventListener('click', function () {
            // Obtém o ID da imagem clicada
        const imageId = this.getAttribute('id');
        // Obtém a mensagem associada ao ID da imagem
        const message = messages[imageId];

        // Cria um novo item de lista
        const listItem = document.createElement('li');
        // Define o texto do item de lista como a mensagem associada à imagem clicada
        listItem.textContent = message;
        // Adiciona o item de lista ao início da lista de ações
        actionsList.prepend(listItem);

        // Verifica se o número de itens no histórico é maior que 10
        if (actionsList.children.length > 10) {
            // Se for, remove o último item (o mais antigo)
            actionsList.removeChild(actionsList.lastChild);
        }
    });
});

    // Adiciona um ouvinte de evento de clique ao botão de limpar histórico
    clearButton.addEventListener('click', function () {
        // Remove todos os itens da lista de histórico de ações
        actionsList.innerHTML = '';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todas as imagens
    const images = document.querySelectorAll('.primeiralinha img');

    // Caminho do arquivo de áudio (exemplo com caminho relativo)
    const audioFilePath = 'alheio2.mp3'; // Substitua pelo caminho do seu arquivo de áudio

    // Cria o objeto de áudio
    const audio = new Audio(audioFilePath);

    // Adiciona um ouvinte de evento de clique a cada imagem
    images.forEach(function (image) {
        image.addEventListener('click', function () {
            // Reproduz o som
            audio.play();
        });
    });
});

