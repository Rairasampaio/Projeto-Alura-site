function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Loga a seção no console para verificação

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa)

    //se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
      section.innerHTML = "Não localizado"
          return
    }
  
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase

      //se titulo includes campoPesquisa
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa))
      if (tags.includes(campoPesquisa))
        {
        // Cria um novo elemento
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="blank">Wikipedia</a>
      </div>
    `;
      }
    }
    
    if(!resultados){
      section.innerHTML = <p>"Não Localizado. Você precisa pesquisar algo"</p>
      return
    }

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }

// console.log(dados);

