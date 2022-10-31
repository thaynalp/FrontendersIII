// pág Login
$(function(){
    $('.form-login').submit(function(){
        var er = new RegExp(/^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/);
        var email = $('#exampleInputPassword1').val();
        var senha = $('#senha').val();

        if( email == '' || !er.test(email) ) { alert('Preencha o campo email corretamente'); return false; }
        if( senha == '' ) { alert('Preencha o campo nome'); return false; }

        // Se passou por essas validações exibe um alert
        alert( 'ok' );
    });
});

