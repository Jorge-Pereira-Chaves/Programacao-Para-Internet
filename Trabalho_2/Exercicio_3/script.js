function calcularImposto() {
    const ano = parseInt(document.getElementById('ano').value);
    const valor = parseFloat(document.getElementById('valor').value);
    const taxa = ano < 1990 ? 0.01 : 0.015;
    const imposto = valor * taxa;

    document.getElementById('resultado').textContent = `Imposto: R$ ${imposto.toFixed(2)}`;
}
