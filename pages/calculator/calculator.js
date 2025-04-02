// Funções de cálculo
function calcularSalarioBase (salarioBase) {
    if (!salarioBase || isNaN(salarioBase)) {
        return 0;
    }
    return salarioBase;
}

function calcularFeriasComTerco(salarioBase, mesesFerias) {
    if (!salarioBase || !mesesFerias || isNaN(salarioBase) || isNaN(mesesFerias)) {
        return 0;
    }
    const ferias = (salarioBase / 12) * mesesFerias;
    const tercoFerias = ferias / 3;
    return ferias + tercoFerias;
}

function calcularAvisoPrevio (salarioBase, diasAvisoPrevio) {
    if (!salarioBase || !diasAvisoPrevio || isNaN(salarioBase) || isNaN(diasAvisoPrevio)) {
        return 0;
    }
    return ((salarioBase / 30) * diasAvisoPrevio);
}

function calcularDecimoTerceiro(salarioBase, mesespDecimo) {
    if (!salarioBase || !mesespDecimo || isNaN(salarioBase) || isNaN(mesespDecimo)) {
        return 0;
    }
    return (salarioBase / 12) * mesespDecimo;
}

function calcularFGTS(salarioBase, mesesTrabalhados) {
    if (!salarioBase || !mesesTrabalhados || isNaN(salarioBase) || isNaN(mesesTrabalhados)) {
        return 0;
    }
    const vlrFGTS = salarioBase * 0.08 * mesesTrabalhados;
    const multaFGTS = vlrFGTS * 0.4;
    return vlrFGTS + multaFGTS;
}

function calcularMultaFGTS(salarioBase, mesesTrabalhados) {
    if (!salarioBase || !mesesTrabalhados || isNaN(salarioBase) || isNaN(mesesTrabalhados)) {
        return 0;
    }
    return salarioBase * 0.08 * mesesTrabalhados * 0.4;
}

function calcularSalarioMaternidade(salarioBase) {
    if (!salarioBase || isNaN(salarioBase)) {
        return 0;
    }
    return salarioBase * 4;
}

function calcularMulta467(salarioBase, vlrFeriasComTerco, vlrDecimoTerceiro, vlrMultaFGTS) {
    if (!salarioBase || !vlrFeriasComTerco || !vlrDecimoTerceiro || !vlrMultaFGTS ||
        isNaN(salarioBase) || isNaN(vlrFeriasComTerco) || isNaN(vlrDecimoTerceiro) || isNaN(vlrMultaFGTS)) {
        return 0;
    }
    return (salarioBase + vlrFeriasComTerco + vlrDecimoTerceiro + vlrMultaFGTS) / 2;
}

function calcularMulta477(salarioBase) {
    if (!salarioBase || isNaN(salarioBase)) {
        return 0;
    }
    return salarioBase;
}

function calcularValorHoraTrabalhada (salarioBase, jornadaMensalHora) {
    if (!salarioBase || !jornadaMensalHora || isNaN(salarioBase) || isNaN(jornadaMensalHora)) {
        return 0;
    }
    return salarioBase / jornadaMensalHora;
}

function calcularHorasExtras(vlrHoraHoraTrabalhada, totalHorasExtras) {
    if (!vlrHoraHoraTrabalhada || !totalHorasExtras || isNaN(vlrHoraHoraTrabalhada) || isNaN(totalHorasExtras)) {
        return 0;
    }
    return vlrHoraHoraTrabalhada * 1.5 * totalHorasExtras;
}

function calcularDSR(totalHoraDSR, vlrHoraHoraTrabalhada){
    if (!totalHoraDSR || !vlrHoraHoraTrabalhada || isNaN(totalHoraDSR) || isNaN(vlrHoraHoraTrabalhada)) {
        return 0;
    }
    return totalHoraDSR * vlrHoraHoraTrabalhada * 2;
}

function calcularSeguroDesemprego (salarioBase) {
    if (!salarioBase || isNaN(salarioBase)) {
        return 0;
    }
    return salarioBase * 5;
}

function calcularValeTransporte (valorValeTransp, qtdDiaTransp, diasTrabalhadosMes, salarioBase, mesesTrabalhados) {
    if (!valorValeTransp || !qtdDiaTransp || !diasTrabalhadosMes || !salarioBase || !mesesTrabalhados || isNaN(valorValeTransp) || isNaN(qtdDiaTransp) || isNaN(diasTrabalhadosMes) || isNaN(salarioBase) || isNaN(mesesTrabalhados)) {
        return 0;
    }
    return (((valorValeTransp * qtdDiaTransp * diasTrabalhadosMes) - (salarioBase * 0.06)) * mesesTrabalhados);
}

function calcularAcumuloFuncao (salarioBase, mesesTrabalhados, ) {
    if (!salarioBase || !mesesTrabalhados || isNaN(salarioBase) || isNaN(mesesTrabalhados)) {
        return 0;
    }
    return ((salarioBase * mesesTrabalhados) * 0.2 );
}

function calcularPericulosidade30p (salarioBase, mesesTrabalhados, vlrFeriasComTerco, vlrDecimoTerceiro, vlrFGTS) {
    if (!salarioBase || !mesesTrabalhados || !vlrFeriasComTerco || !vlrDecimoTerceiro || !vlrFGTS || isNaN(salarioBase) || isNaN(mesesTrabalhados) || isNaN(vlrFeriasComTerco) || isNaN(vlrDecimoTerceiro) || isNaN(vlrFGTS)) {
        return 0;
    }
    return ((salarioBase * 0.3 * mesesTrabalhados) + (vlrFeriasComTerco * 0.3) + (vlrDecimoTerceiro * 0.3) + (vlrFGTS * 0.3));
}

function calcularInsalubridade40p (salarioBase, mesesTrabalhados, vlrFeriasComTerco, vlrDecimoTerceiro, vlrMultaFGTS) {
    if (!salarioBase || !mesesTrabalhados || !vlrFeriasComTerco || !vlrDecimoTerceiro || !vlrMultaFGTS || isNaN(salarioBase) || isNaN(mesesTrabalhados) || isNaN(vlrFeriasComTerco) || isNaN(vlrDecimoTerceiro) || isNaN(vlrMultaFGTS)) {
        return 0;
    }
    return ((salarioBase * 0.4 * mesesTrabalhados) + (vlrFeriasComTerco * 0.4) + (vlrDecimoTerceiro * 0.4) + (vlrMultaFGTS * 0.4));
}

function calcularDanoMoral (salarioBase) {
    if (!salarioBase || isNaN(salarioBase)) {
        return 0;
    }
    return salarioBase * 5 ;
}

function calcularHonorarios (vlrAvisoPrevio, vlrFeriasComTerco, vlrDecimoTerceiro, vlrFGTS, vlrMultaFGTS, vlrSalarioMaternidade, vlrMulta467, vlrMulta477, vlrHorasExtras, vlrDSR, vlrSeguroDesemprego, vlrValeTransporte, vlrAcumuloFuncao, vlrPericulosidade30p, vlrInsalubridade40p, vlrDanoMoral) {
    return ((vlrAvisoPrevio + vlrFeriasComTerco + vlrDecimoTerceiro + vlrFGTS + vlrMultaFGTS + vlrSalarioMaternidade + vlrMulta467 + vlrMulta477 + vlrHorasExtras + vlrDSR + vlrSeguroDesemprego + vlrValeTransporte + vlrAcumuloFuncao + vlrPericulosidade30p + vlrInsalubridade40p + vlrDanoMoral) * 0.15);
}

function calcularValorCausa (vlrAvisoPrevio, vlrFeriasComTerco, vlrDecimoTerceiro, vlrFGTS, vlrMultaFGTS, vlrSalarioMaternidade, vlrMulta467, vlrMulta477, vlrHorasExtras, vlrDSR, vlrSeguroDesemprego, vlrValeTransporte, vlrAcumuloFuncao, vlrPericulosidade30p, vlrInsalubridade40p, vlrDanoMoral, vlrHonorarios) {
    return (vlrAvisoPrevio + vlrFeriasComTerco + vlrDecimoTerceiro + vlrFGTS + vlrMultaFGTS + vlrSalarioMaternidade + vlrMulta467 + vlrMulta477 + vlrHorasExtras + vlrDSR + vlrSeguroDesemprego + vlrValeTransporte + vlrAcumuloFuncao + vlrPericulosidade30p + vlrInsalubridade40p + vlrDanoMoral + vlrHonorarios);
}



function pegarDados() {
    
    // Função para pegar e processar dados
    const salarioBase = parseFloat(document.getElementById("salarioBase").value);
    const diasAvisoPrevio = parseFloat(document.getElementById("diasAvisoPrevio").value);
    const mesesTrabalhados = parseFloat(document.getElementById("mesesTrabalhados").value);
    const mesesFerias = parseFloat(document.getElementById("mesespFerias").value);
    const mesespDecimo = parseFloat(document.getElementById("mesespDecimo").value);
    const totalHorasExtras = parseFloat(document.getElementById("totalHoraExtra").value);
    const jornadaMensalHora = parseFloat(document.getElementById("jornadaMensalHora").value);
    const totalHoraDSR = parseFloat(document.getElementById("totalHoraDSR").value);
    const valorValeTransp = parseFloat(document.getElementById("valorValeTransp").value);
    const qtdDiaTransp = parseFloat(document.getElementById("qtdDiaTransp").value);
    const diasTrabalhadosMes = parseFloat(document.getElementById("diasTrabalhadosMes").value);


    // Calcula os valores
    const vlrSalarioBase = calcularSalarioBase(salarioBase);
    const vlrFeriasComTerco = calcularFeriasComTerco(salarioBase, mesesFerias);
    const vlrAvisoPrevio = calcularAvisoPrevio(salarioBase, diasAvisoPrevio);
    const vlrDecimoTerceiro = calcularDecimoTerceiro(salarioBase, mesespDecimo);
    const vlrFGTS = calcularFGTS(salarioBase, mesesTrabalhados);
    const vlrMultaFGTS = calcularMultaFGTS(salarioBase, mesesTrabalhados);
    const vlrSalarioMaternidade = calcularSalarioMaternidade(salarioBase);
    const vlrMulta467 = calcularMulta467(salarioBase, vlrFeriasComTerco, vlrDecimoTerceiro, vlrMultaFGTS);
    //const vlrMulta477 = calcularMulta477(salarioBase);
    const vlrMulta477 = document.getElementById('include-multa').checked ? calcularMulta477(salarioBase) || 0 : 0;
    const vlrHoraHoraTrabalhada = calcularValorHoraTrabalhada(salarioBase, jornadaMensalHora);
    const vlrHorasExtras = calcularHorasExtras(vlrHoraHoraTrabalhada, totalHorasExtras);
    const vlrDSR = calcularDSR(totalHoraDSR, vlrHoraHoraTrabalhada);
    const vlrSeguroDesemprego = calcularSeguroDesemprego(salarioBase);
    const vlrValeTransporte = calcularValeTransporte(valorValeTransp, qtdDiaTransp, diasTrabalhadosMes, salarioBase, mesesTrabalhados);
    const vlrAcumuloFuncao = calcularAcumuloFuncao(salarioBase, mesesTrabalhados);
    const vlrPericulosidade30p = calcularPericulosidade30p(salarioBase, mesesTrabalhados, vlrFeriasComTerco, vlrDecimoTerceiro, vlrFGTS);
    const vlrInsalubridade40p = calcularInsalubridade40p(salarioBase, mesesTrabalhados, vlrFeriasComTerco, vlrDecimoTerceiro, vlrMultaFGTS);
    const vlrDanoMoral = calcularDanoMoral(salarioBase);
    const vlrHonorarios = calcularHonorarios(vlrAvisoPrevio, vlrFeriasComTerco, vlrDecimoTerceiro, vlrFGTS, vlrMultaFGTS, vlrSalarioMaternidade, vlrMulta467, vlrMulta477, vlrHorasExtras, vlrDSR, vlrSeguroDesemprego, vlrValeTransporte, vlrAcumuloFuncao, vlrPericulosidade30p, vlrInsalubridade40p, vlrDanoMoral);
    const vlrValorCausa = calcularValorCausa(vlrAvisoPrevio, vlrFeriasComTerco, vlrDecimoTerceiro, vlrFGTS, vlrMultaFGTS, vlrSalarioMaternidade, vlrMulta467, vlrMulta477, vlrHorasExtras, vlrDSR, vlrSeguroDesemprego, vlrValeTransporte, vlrAcumuloFuncao, vlrPericulosidade30p, vlrInsalubridade40p, vlrDanoMoral, vlrHonorarios);

    const linhasResultado = document.querySelectorAll(".linha-table");
    linhasResultado.forEach(linha => {
        linha.style.display = "table-row";
    });

    // Exibe os resultados formatados
    document.getElementById("resulSalarioBase").textContent = `Salário Base: R$ ${vlrSalarioBase.toFixed(2)}`;

    document.getElementById("resulAvisoPrevio").textContent = `Aviso Prévio: R$ ${vlrAvisoPrevio.toFixed(2)}`;
    
    document.getElementById("resulFeriasTerc").textContent = `Férias + 1/3: R$ ${vlrFeriasComTerco.toFixed(2)}`;
    
    document.getElementById("resulDecimoTerc").textContent = `Décimo Terceiro: R$ ${vlrDecimoTerceiro.toFixed(2)}`;
    
    document.getElementById("resulFGTS").textContent = `FGTS: R$ ${vlrFGTS.toFixed(2)}`;
    
    document.getElementById("resulMultaFGTS").textContent = `Multa FGTS: R$ ${vlrMultaFGTS.toFixed(2)}`;
    
    document.getElementById("resulSalarMatern").textContent = `Salário Maternidade: R$ ${vlrSalarioMaternidade.toFixed(2)}`;
    
    document.getElementById("resulMulta467").textContent = `Multa 467: R$ ${vlrMulta467.toFixed(2)}`;
    
    document.getElementById("resulMulta477").textContent = `Multa 477: R$ ${vlrMulta477.toFixed(2)}`;
    
    document.getElementById("resulHoraExtra").textContent = `Horas Extras: R$ ${vlrHorasExtras.toFixed(2)}`;

    document.getElementById("resulDSR").textContent = `DSR: R$ ${vlrDSR.toFixed(2)}`;

    document.getElementById("resulSeguroDesemprego").textContent = `Seguro Desemprego: R$ ${vlrSeguroDesemprego.toFixed(2)}`;

    document.getElementById("resulValeTransporte").textContent = `Vale Transporte: R$ ${vlrValeTransporte.toFixed(2)}`;

    document.getElementById("resulAcumuloFuncao").textContent = `Acúmulo de Função: R$ ${vlrAcumuloFuncao.toFixed(2)}`;

    document.getElementById("resulPericulosidade").textContent = `Periculosidade 30%: R$ ${vlrPericulosidade30p.toFixed(2)}`;

    document.getElementById("resulInsalubridade").textContent = `Insalubridade 40%: R$ ${vlrInsalubridade40p.toFixed(2)}`;
    
    document.getElementById("resulDanoMoral").textContent = `Dano Moral: R$ ${vlrDanoMoral.toFixed(2)}`;

    document.getElementById("resulHonorarios").textContent = `Honorários 15%: R$ ${vlrHonorarios.toFixed(2)}`;

    document.getElementById("resulValorCausa").textContent = `Valor da Causa: R$ ${vlrValorCausa.toFixed(2)}`;
}
