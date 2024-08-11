const form = document.getElementById('formulario');
const nomes = [];
const numeros = [];

let linhas = ' ';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeNomes = document.getElementById('nome');
    const inputNumeroNumeros = document.getElementById('numero');

    if (nomes.includes(inputNomeNomes.value)) {
        alert(`O nome: ${inputNomeNomes.value} já foi adicionado`);
    } else {
        nomes.push(inputNomeNomes.value);
        numeros.push(parseFloat( inputNumeroNumeros.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeNomes.value}</td>`;
        linha += `<td>${inputNumeroNumeros.value}</td>`;
        linha += '</tr>';

        linhas += linha; 
    }

    inputNomeNomes.value = '';
    inputNumeroNumeros.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}