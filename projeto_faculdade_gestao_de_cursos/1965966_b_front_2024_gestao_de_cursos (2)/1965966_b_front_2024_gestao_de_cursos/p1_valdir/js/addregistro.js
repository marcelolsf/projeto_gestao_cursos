function validarFormulario() {
    var codigoRa = document.getElementById('codigoRa').value;
    var curso = document.getElementById('curso').value;
    var coordenador = document.getElementById('coordenador').value;
    var duracao = document.getElementById('duracao').value;
    var areaCurso = document.getElementById('areaCurso').value;
    var nivel = document.getElementById('nivel').value;

    if (codigoRa === '' || curso === '' || coordenador === '' || duracao === '' || areaCurso === '' || nivel === '') {
        alert('Preencha todos os campos!');
    } else {
        alert('Registro Concluido! Redirecionando para a página inicial.');
        window.location.href = "index.html";
    }
}
