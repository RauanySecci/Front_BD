let btnVerificar = document.querySelector("#ba2");

btnVerificar.addEventListener("click", function () {
    // Capturar o valor do campo CPF
    let cpf = document.querySelector("#cpf").value.trim();

    // Validação: CPF não pode ser vazio e deve ter exatamente 11 dígitos
    if (!cpf) {
        alert("O campo CPF não pode estar vazio.");
        return;
    }

    if (cpf.length !== 11 || isNaN(cpf)) {
        alert("CPF inválido. Certifique-se de que possui exatamente 11 dígitos numéricos.");
        return;
    }

    // CPF válido
    alert("CPF válido!");
    console.log("CPF valido:", cpf);
});
