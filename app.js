// Função para realizar a pesquisa e exibir os resultados na página.
function pesquisar() {
    // Mensagem de log para indicar que a função foi chamada.
    console.log("clicou");

    // Obtém a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. <br> Digite um estados Válido da Região Sudeste Brasileira.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    
    // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento 'dado' da lista 'dados'.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `;
        }
        // Concatena o HTML de cada resultado à string 'resultados'.
    }

    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui o conteúdo HTML gerado à seção de resultados.
    section.innerHTML = resultados;
}