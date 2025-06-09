function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 25) classificacao = "Peso normal";
    else if (imc < 30) classificacao = "Sobrepeso";
    else if (imc < 35) classificacao = "Obesidade grau 1";
    else if (imc < 40) classificacao = "Obesidade grau 2";
    else classificacao = "Obesidade grau 3";

    document.getElementById('resultado').textContent = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
}
