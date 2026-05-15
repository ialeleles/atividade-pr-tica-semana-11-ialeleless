const manobras = [
    {
        "id": 1,
        "nome": "Ollie",
        "categoria": "Iniciante",
        "descricao": "O salto básico do skate.",
        "conteudo": "O Ollie é a manobra fundamental onde o skatista e o skate saltam para o ar sem o uso das mãos.",
        "imagem": "https://images.unsplash.com/photo-1617034840325-b10d81550042?q=80&w=1470"
    },
    {
        "id": 2,
        "nome": "Kickflip",
        "categoria": "Intermediário",
        "descricao": "O skate gira 360 graus no eixo longitudinal.",
        "conteudo": "No Kickflip, o skatista chuta a borda do skate para que ele gire por baixo dos pés antes de aterrisar.",
        "imagem": "https://images.unsplash.com/photo-1573054022697-3af201441528?w=600"
    },
    {
        "id": 3,
        "nome": "Heelflip",
        "categoria": "Difícil",
        "descricao": "Similar ao Kickflip, mas girado com o calcanhar.",
        "conteudo": "Diferente do Kickflip, o Heelflip usa o calcanhar para girar o skate na direção oposta.",
        "imagem": "https://images.unsplash.com/photo-1649281610716-94e4ee026d91?q=80&w=1470"
    }
];

function carregarHome() {
    const container = document.getElementById('container-manobras');
    if (!container) return;

    let htmlCards = "";
    manobras.forEach(item => {
        htmlCards += `
            <div class="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                <div class="card h-100 w-100">
                    <img src="${item.imagem}" alt="${item.nome}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="fw-bold mb-3">${item.nome}</h5>
                        <p class="tag fw-semibold">${item.categoria}</p>
                        <br>
                        <a href="detalhes.html?id=${item.id}" class="btn btn-outline-light btn-sm mt-2">Ver detalhes</a>
                    </div>
                </div>
            </div>
        `;   
    });
    container.innerHTML = htmlCards;
}

function carregarDetalhes() {
    const urlParams = new URLSearchParams(window.location.search);
    const idDaManobra = urlParams.get('id');
    const container = document.getElementById('detalhe-manobra');

    if (!container || !idDaManobra) return;

    const manobra = manobras.find(m => m.id == idDaManobra);

    if (manobra) {
        container.innerHTML = `
            <div class="row align-items-center text-light">
                <div class="col-md-6">
                    <img src="${manobra.imagem}" class="img-fluid rounded shadow" alt="${manobra.nome}">
                </div>
                <div class="col-md-6">
                    <h1 class="display-4 fw-bold">${manobra.nome}</h1>
                    <span class="badge bg-danger mb-3 p-2">${manobra.categoria}</span>
                    <p class="lead mt-3">${manobra.descricao}</p>
                    <hr class="bg-light">
                    <h5 class="fw-bold">Tutorial:</h5>
                    <p>${manobra.conteudo}</p>
                    <a href="index.html" class="btn btn-light mt-3">Voltar para Home</a>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = "<h2 class='text-white text-center'>Manobra não encontrada!</h2>";
    }
}

carregarHome();
carregarDetalhes();