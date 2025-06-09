document.getElementById("calcular").addEventListener("click", () => {
    const nivel = Number(document.getElementById("nivel").value);
    const horas = Number(document.getElementById("horas").value);
    const resultado = document.getElementById("resultado");

    if (horas <= 0) {
        resultado.textContent = "Horas inválidas! Deve ser maior que zero.";
        return;
    }

    let valorHora = 0;

    switch (nivel) {
        case 1:
            valorHora = 12;
            break;
        case 2:
            valorHora = 17;
            break;
        case 3:
            valorHora = 25;
            break;
        default:
            resultado.textContent = "Nível inválido!";
            return;
    }

    const salario = valorHora * horas * 4.5;
    resultado.textContent = `Salário mensal: R$ ${salario.toFixed(2)}`;
});
