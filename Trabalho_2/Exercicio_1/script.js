function verificarTriangulo() {
    const x = parseFloat(document.getElementById('ladoX').value);
    const y = parseFloat(document.getElementById('ladoY').value);
    const z = parseFloat(document.getElementById('ladoZ').value);
    const resultado = document.getElementById('resultado');

    if (x < y + z && y < x + z && z < x + y) {
        if (x === y && y === z) {
            resultado.textContent = "Triângulo Equilátero";
        } else if (x === y || y === z || x === z) {
            resultado.textContent = "Triângulo Isósceles";
        } else {
            resultado.textContent = "Triângulo Escaleno";
        }
    } else {
        resultado.textContent = "Os valores não formam um triângulo.";
    }
}
