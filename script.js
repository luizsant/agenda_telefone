const form = document.getElementById('form-contato');
const contatos = [];

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  adicionaContato();
  atualizaTabela();
  
});

function adicionaContato(){
  const inputNomeContato = document.getElementById('nome-contato');
  const inputTelefoneContato = document.getElementById('telefone-contato');

  if (contatos.some(contato => contato.nome === inputNomeContato.value)){
    alert(`O contato ${inputNomeContato.value} já foi cadastrado`)
  }
  else {
    contatos.push({nome: inputNomeContato.value, telefone: inputTelefoneContato.value});
  }
  
  inputNomeContato.value = '';
  inputTelefoneContato.value = '';
};

function atualizaTabela() {
  const corpoTabela = document.querySelector ('tbody');
  corpoTabela.innerHTML = '';
  
  contatos.forEach(contato => {
    let linha = '<tr>';
    linha += `<td>${contato.nome}</td>`;
    linha += `<td>${contato.telefone}</td>`;
    linha += '</td>';
  
    corpoTabela.innerHTML += linha;
  });
}
