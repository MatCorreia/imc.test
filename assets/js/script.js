const form = document.querySelector('#form')

//Capturando evento
form.addEventListener('submit', function (e) {
    e.preventDefault();

    //Capturando valor dos inputs
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    //Verificação se o peso preenchido é válido!
    if (!peso) {
        setResultado('Peso inválido!', false);
        return;
    }

    //Verificação se a altura preenchida é válida!
    if (!altura) {
        setResultado('Altura inválido!', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
   
    const msg = `Seu IMC é ${imc} (${nivelImc}).`
    setResultado(msg, true);
});

//Verificação do nível de IMC!!
function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];

    if (imc >= 39.9) return nivel[5];
      
    if (imc >= 34.9) return nivel[4];
    
    if (imc >= 29.9) return nivel[3]
    
    if (imc >= 24.9) return nivel[2];
 
    if (imc >= 18.5) return nivel[1];
   
    if (imc < 18.5) return nivel[0];
}

//Calculando o IMC!!
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

//Criando parágrafo para ser colocado no id 'res'
function criarParagrafo() {
    const p = document.createElement('p');
    return p
}

//Colocando o resultado no paragráfo id 'res'
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#res');
    //Zerando o resultado
    resultado.innerHTML = '';

    const p = criarParagrafo();

    if(isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('incorreta');
    }

    p.innerHTML = msg;
    resultado.appendChild(p) 
}