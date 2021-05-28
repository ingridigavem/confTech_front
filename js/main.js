$('a[href*=secao-palestrantes]').click(()=>{
    const posicao = $('#secao-palestrantes').offset().top;

    $('html').animate({
        scrollTop: posicao
    }, 1000);
});

$('a[href*=secao-form-inscricao]').click(()=>{
    const posicao = $('#secao-form-inscricao').offset().top;

    $('html').animate({
        scrollTop: posicao
    }, 1000);
});