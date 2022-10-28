// pág recuperção-de-senha
$(function(){
    $('#form_contato').submit(function(){
        var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
        var nome = $('#txt_nome').val();
        var email = $('#txt_email').val();

        if( nome == '' ) { alert('Preencha o campo nome'); return false; }
        if( email == '' || !er.test(email) ) { alert('Preencha o campo email corretamente'); return false; }

        // Se passou por essas validações exibe um alert
        alert( 'Uma nova senha foi gerada e enviada para seu e-mail cadastrado!' );
    });
});

// pág Login
$(function(){
    $('.form-login').submit(function(){
        var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
        var nome = $('#exampleInputEmail1').val();
        var email = $('#exampleInputPassword1').val();

        if( senha == '' ) { alert('Preencha o campo nome'); return false; }
        if( email == '' || !er.test(email) ) { alert('Preencha o campo email corretamente'); return false; }

        // Se passou por essas validações exibe um alert
        alert( 'Uma nova senha foi gerada e enviada para seu e-mail cadastrado!' );
    });
});