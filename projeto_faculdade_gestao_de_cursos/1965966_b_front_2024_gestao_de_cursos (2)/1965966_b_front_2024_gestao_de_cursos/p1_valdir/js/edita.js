document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button[type="submit"]').addEventListener('click', function (event) {
        event.preventDefault();

        var codigoRa = document.getElementById('codigoRa').value;
        var curso = document.getElementById('curso').value;
        var coordenador = document.getElementById('coordenador').value;
        var duracao = document.getElementById('duracao').value;
        var areaCurso = document.getElementById('areaCurso').value;
        var nivel = document.getElementById('nivel').value;

        if (codigoRa === '' && curso === '' && coordenador === '' && duracao === '' && areaCurso === '' && nivel === '') {
            alert('Edite pelo menos um campo.');
        } else {
            window.location.href = "index.html";
        }
    });
});


