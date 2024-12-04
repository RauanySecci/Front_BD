let btnInscrever = document.querySelector("#ba1");

// Arrays para armazenar os dados dos atletas
let atletas = [];

// Função para validar o ano de ingresso
function validarAno(ano) {
    const anoAtual = new Date().getFullYear();
    return ano > 1900 && ano <= anoAtual;
}

// Adicionar novo atleta ao clicar no botão "Inscrever"
btnInscrever.addEventListener("click", function () {
    // Capturando os valores dos campos do formulário
    let cpf = document.querySelector("#cpf").value.trim();
    let nome = document.querySelector("#nome").value.trim();
    let genero = document.querySelector("#genero").value.trim().toUpperCase();
    let rua = document.querySelector("#rua").value.trim();
    let bairro = document.querySelector("#bairro").value.trim();
    let numero = document.querySelector("#numero").value.trim();
    let cidade = document.querySelector("#cidade").value.trim();
    let uf = document.querySelector("#uf").value.trim().toUpperCase();
    let telefone = document.querySelector("#telefone").value.trim();
    let codigoMatricula = document.querySelector("#codigo_matricula").value.trim();
    let anoIngresso = document.querySelector("#ano_ingresso").value.trim();
    let universidade = document.querySelector("#universidade").value.trim();
    let curso = document.querySelector("#curso").value.trim();

    // Validações
    if (!cpf || cpf.length !== 11 || isNaN(cpf)) {
        alert("CPF inválido. Certifique-se de que tem 11 dígitos e não está vazio.");
        return;
    }

    if (!nome) {
        alert("O nome não pode estar vazio.");
        return;
    }

    if (genero !== "F" && genero !== "M") {
        alert("Gênero inválido. Use 'F' para feminino ou 'M' para masculino.");
        return;
    }

    if (!rua) {
        alert("A rua não pode estar vazia.");
        return;
    }

    if (!bairro) {
        alert("O bairro não pode estar vazio.");
        return;
    }

    if (!numero || isNaN(numero)) {
        alert("Número inválido. Certifique-se de que é um número válido.");
        return;
    }

    if (!cidade) {
        alert("A cidade não pode estar vazia.");
        return;
    }

    if (!uf || uf.length !== 2) {
        alert("UF inválido. Certifique-se de que é composto por 2 caracteres.");
        return;
    }

    if (!telefone || telefone.length < 10 || isNaN(telefone)) {
        alert("Telefone inválido. Certifique-se de que tem pelo menos 10 dígitos e é numérico.");
        return;
    }

    if (!codigoMatricula || isNaN(codigoMatricula)) {
        alert("O código de matrícula não pode estar vazio.");
        return;
    }

    if (!anoIngresso || !validarAno(parseInt(anoIngresso))) {
        alert("Ano de ingresso inválido. Certifique-se de que é um ano válido.");
        return;
    }

    if (!universidade) {
        alert("A universidade não pode estar vazia.");
        return;
    }

    if (!curso) {
        alert("O curso não pode estar vazio.");
        return;
    }

    // Criando um objeto para representar o atleta
    let atleta = {
        cpf,
        nome,
        genero,
        endereco: {
            rua,
            bairro,
            numero,
            cidade,
            uf,
        },
        telefone,
        codigoMatricula,
        anoIngresso,
        universidade,
        curso,
    };

    // Adicionando o atleta ao array
    atletas.push(atleta);

    // Limpando os campos do formulário
    document.querySelectorAll(".form-control").forEach((input) => {
        input.value = "";
    });

    // Exibindo uma mensagem de sucesso
    alert("Atleta inscrito com sucesso!");
    console.log("Atleta inscrito:", atleta);
});
