function calculaImc(peso, altura) {
    return peso / (altura ** 2);
}

function calculoEspecifico() {
    const pesoUsuario = document.getElementById('pesoUsuario').value;
    const alturaUsuario = document.getElementById('alturaUsuario').value;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "Seu IMC é: " + calculaImc(pesoUsuario, alturaUsuario).toFixed(2);
}