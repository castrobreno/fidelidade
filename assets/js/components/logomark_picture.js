const logomark_picture = document.querySelectorAll('.header-logomark_picture'); //Captura todas as logomarcas que precisam ter a interação de troca

//Observa mudanças da viewport para substituir a logo deovita pelo padrão adequado ao tamanho
function logomarkToogle()
{
    if(window.innerWidth <= 420)
    {
        logomarkList('assets/img/svg/logo_symbol_deovita_colors.svg');
    }
    else
    {
        logomarkList('assets/img/svg/logo_deovita_colors.svg');
    }
}

//Percorre todas as logomarcas com a class .header-logomark_picture e seta o src inserido na chamada
function logomarkList(src)
{
    for(let i = 0; i < logomark_picture.length; i++)
    {
        logomark_picture[i].setAttribute('src', src);
    }
}

//Inicia a logomarca padrão
window.onload = () => { logomarkToogle(); };
window.onresize = () => { logomarkToogle(); };