function soma() {
    const primeiraNota = document.getElementById("nota1").value;
    const segundaNota = document.getElementById("nota2").value;
    const terceiraNota = document.getElementById("nota3").value;
    const quartaNota = document.getElementById("nota4").value;
    const resultado = document.getElementById("res");
    const situacao = document.getElementById("situacao");
    // resultado.innerHTML = `A sua média final é: ${parseFloat(primeiraNota) + parseFloat(segundaNota) + parseFloat(terceiraNota) + parseFloat(quartaNota) / 4}`;

    const media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) / 4;
    // const numeroFormatado = media.toFixed(1)
    resultado.innerHTML = `A sua média final é: ${media.toFixed(1)}`; 

    if (media >= 8) {
        return situacao.innerHTML = "Parabéns, você foi aprovado!";
    } else {
        return situacao.innerHTML = "Infelizmente você foi reprovado!";
    }

}

soma()