console.log("displayListControl.js carregado");
function semHistorico(){
              const itemDiv = document.createElement('div');
              itemDiv.classList.add('item-box');

              itemDiv.innerHTML = `
                <strong>Não há links para exibir</strong>
              `;

              lista.appendChild(itemDiv);
}

document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById('lista');
  const listaContainer = document.getElementById('listaContainer');
  const LIMITE_SCROLL = 5;

  fetch('js/links/links.json')
    .then(res => res.json())
    .then(data => {
    if (!data.itens || data.itens.length === 0) {
      semHistorico()
      return;
    }

      data.itens.forEach(obj => {
        const chave = Object.keys(obj)[0];
        const partes = obj[chave];

        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item-box');

        itemDiv.innerHTML = `
          <p>Link: <a href="${partes[0]}"> ${partes[0]}</a> </br>
          <p>Link encurtado: <a href="${partes[0]}"> ${partes[0]}</a> </br>
          Quantidade de cliques: ${partes[1]}
          </br>
        `;

        lista.appendChild(itemDiv);
      });


      if (data.itens.length >= LIMITE_SCROLL) {
        listaContainer.classList.add('scroll');
      }
    })
    .catch(err => alert('Ocorreu um erro ao carregar os itens') );
});

console.log("Dados recebidos:", data);