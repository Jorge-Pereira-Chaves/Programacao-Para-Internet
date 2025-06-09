document.getElementById("calcular").addEventListener("click", () => {
    const preco = Number(document.getElementById("preco").value);
    const condicao = document.getElementById("condicao").value;
    const resultado = document.getElementById("resultado");

    if (preco <= 0) {
        resultado.textContent = "Preço inválido! Deve ser maior que zero.";
        return;
    }

    let valorFinal = preco;

    switch (condicao) {
        case "a":
            valorFinal = preco * 0.9; 
            break;
        case "b":
            valorFinal = preco * 0.85; 
            break;
        case "c":
            break;
        case "d":
            valorFinal = preco * 1.10; 
            break;
        default:
            resultado.textContent = "Condição inválida!";
            return;
    }

    resultado.textContent = `Valor a pagar: R$ ${valorFinal.toFixed(2)}`;
});
