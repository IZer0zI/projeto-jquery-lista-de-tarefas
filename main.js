$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeDaTarefa = $('#nome-nova-tarefa').val().trim();
        if (nomeDaTarefa === '') {
            alert('Por favor, insira um nome para a tarefa.');
            return;
        }
        const listaTarefas = $('ul');
        const tarefaExistente = listaTarefas.find(`li:contains('${nomeDaTarefa}')`).length > 0;
        if (tarefaExistente) {
            alert('Esta tarefa já está na lista.');
            return;
        }
        const novaTarefa = $(`
            <li>${nomeDaTarefa}</li>
        `);

        novaTarefa.click(function() {
            $(this).toggleClass('tachado');
        })

        novaTarefa.appendTo(listaTarefas).hide().fadeIn(1000);
        $('#nome-nova-tarefa').val('');
    });

    $('form button[type="reset"]').click(function() {
        $('ul').empty();
    });
});
