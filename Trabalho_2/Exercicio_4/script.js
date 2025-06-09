function calcularSalario() {
    const salario = parseFloat(document.getElementById('salario').value);
    const cargo = document.getElementById('cargo').value.toLowerCase();
    let aumento = 0;

    switch(cargo) {
        case "gerente": aumento = 0.1; break;
        case "engenheiro": aumento = 0.2; break;
        case "tecnico": aumento = 0.3; break;
        default: aumento = 0.4;
    }

    const novoSalario = salario * (1 + aumento);
    const diferenca = novoSalario - salario;

    document.getElementById('resultado').innerHTML =
        `Salário antigo: R$ ${salario.toFixed(2)}<br>
         Novo salário: R$ ${novoSalario.toFixed(2)}<br>
         Diferença: R$ ${diferenca.toFixed(2)}`;
}
