function calcularCredito() {
    const saldo = parseFloat(document.getElementById('saldo').value);
    let credito = 0;

    if (saldo <= 200) {
        credito = 0;
    } else if (saldo <= 400) {
        credito = saldo * 0.2;
    } else if (saldo <= 600) {
        credito = saldo * 0.3;
    } else {
        credito = saldo * 0.4;
    }

    document.getElementById('resultado').textContent =
        `Saldo médio: R$ ${saldo.toFixed(2)} - Crédito: R$ ${credito.toFixed(2)}`;
}
