const form = document.getElementById('form-contato');
const tabela = document.getElementById('tabela-contatos');
const tbody = tabela.querySelector('tbody');
const contatos = []; // Array para armazenar os contatos já cadastrados

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = form.querySelector('#nome').value;
    const telefone = form.querySelector('#telefone').value;

    if (!validarNome(nome)) {
        alert('Por favor, insira um nome válido (sem números).');
        return;
    }

    if (!validarTelefone(telefone)) {
        alert('Por favor, insira um telefone válido (somente números).');
        return;
    }

    if (contatos.some(contato => contato.telefone === telefone)) {
        alert('Este telefone já está cadastrado.');
        return;
    }

    adicionarContato(nome, telefone);
    limparFormulario();
});

function adicionarContato(nome, telefone) {
    const contato = { nome, telefone };
    contatos.push(contato);

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${nome}</td>
        <td>${telefone}</td>
    `;
    tbody.appendChild(newRow);
}

function limparFormulario() {
    form.reset();
}

function validarNome(nome) {
    return /^[a-zA-Z\s]*$/.test(nome);
}

function validarTelefone(telefone) {
    return /^[0-9]*$/.test(telefone);
}
