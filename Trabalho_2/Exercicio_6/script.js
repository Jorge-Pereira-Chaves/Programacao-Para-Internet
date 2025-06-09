const precos = {
    100: 1.20, // Cachorro Quente
    101: 1.30, // Bauru Simples
    102: 1.50, // Bauru com Ovo
    103: 1.20, // Hamburguer
    104: 1.30, // Cheeseburguer
    105: 1.00, // Refrigerante
};

document.getElementById("calcular").addEventListener("click", () => {
    const codigo = Number(document.getElementById("codigo").value);
    const quantidade = Number(document.getElementById("quantidade").value);
    const resultado = document.getElementById("resultado");

    if (!precos[codigo]) {
        resultado.textContent = "Código inválido! Tente novamente.";
        return;
    }
    if (quantidade <= 0) {
        resultado.textContent = "Quantidade inválida! Deve ser maior que zero.";
        return;
    }

    const valor = precos[codigo] * quantidade;
    resultado.textContent = `Total a pagar: R$ ${valor.toFixed(2)}`;
});
