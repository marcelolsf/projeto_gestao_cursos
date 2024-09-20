function filtrarRegistros() {
    var inputFiltro = document.getElementById('filtroCodigoRa');
    var filtro = inputFiltro.value.toUpperCase();
    var tabela = document.getElementById('tabelaRegistros');
    var linhas = tabela.getElementsByTagName('tr');

    for (var i = 0; i < linhas.length; i++) {
        var colunaCodigoRa = linhas[i].getElementsByTagName('td')[0];

        if (colunaCodigoRa) {
            var textoCodigoRa = colunaCodigoRa.textContent || colunaCodigoRa.innerText;

            if (textoCodigoRa.toUpperCase().indexOf(filtro) > -1) {
                linhas[i].style.display = '';
            } else {
                linhas[i].style.display = 'none';
            }
        }
    }
}


