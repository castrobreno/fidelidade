const navbar = document.querySelector('.nav');
const navmenu = document.querySelector('.nav-menu');

const navbar_collapse = document.querySelector('.nav-header_collapse');

const link_buttons = document.querySelectorAll('.group-link_button'); //Botão de expandir submenus 1º camada
const group_lists = document.querySelectorAll('.nav-menu_group-list'); //Lista de submenus internos 1º camada

const link_drop = document.querySelectorAll('.drop-link_button'); //Botão de expandir submenus internos 2º camada
const list_submenu = document.querySelectorAll('.nav-menu_group-list_submenu'); //Lista de submenus internos 2º camada

//Interações referentee ao Search bar
const search_bar = document.querySelector('.search-bar');
const header_utilitiesbar = document.querySelector('.header-utilitiesbar');

// Início das verificações e mode do navbar
function tablet_mode(){
    if(window.innerWidth > 800){
        if(window.innerWidth < 1025){ navbar.classList.add('tablet-mode'); }
        header_utilitiesbar.prepend(search_bar); // Move o search_bar para o header
    }else{
        if (search_bar.parentElement !== navmenu) { // Verifica se o search_bar não está no navmenu
            navmenu.prepend(search_bar);
        }
    }

}
window.addEventListener('resize', () => {
    tablet_mode();
});

document.addEventListener('DOMContentLoaded', () => {
    tablet_mode();
});

navbar_collapse.addEventListener('click', () => {
    navbar.classList.toggle('tablet-mode');
});
// Fim das interações do navbar

//Percorre todos os botões citados 1º camada
for (let i = 0; i < link_buttons.length; i++) {
    link_buttons[i].addEventListener('click', () => {

        //INÍCIO: VERIFICA SE O ITEM CLICADO ATUAL PARA SER FECHADO, SE SIM, SÓ FECHA O ITEM E ENCERRA O LOOP.
        const current_list = String(getComputedStyle(group_lists[i]).display);
        if(current_list === 'block')
        {
            group_lists[i].style.display = 'none';
            return;
        }

        group_lists.forEach(list => {
            list.style.display = 'none';
            group_lists[i].style.display = 'block';
        });
        
    });
}


//Percorre todos os botões citados 2º camada
for (let i = 0; i < link_drop.length; i++) {
    link_drop[i].addEventListener('click', () => {

        //INÍCIO: VERIFICA SE O ITEM CLICADO ATUAL PARA SER FECHADO, SE SIM, SÓ FECHA O ITEM E ENCERRA O LOOP.
        const current_list = String(getComputedStyle(list_submenu[i]).display);

        const drop_arrow = document.querySelectorAll('.group-link_drop'); //Setas de dropdown do submenu interno
        drop_arrow[i].classList.toggle('deg180');

        if(current_list === 'block')
        {
            list_submenu[i].style.display = 'none';
            return;
        }

        list_submenu.forEach(list => {
            list.style.display = 'none';
            list_submenu[i].style.display = 'block';
        });
        
    });
}

const menu_mobile_button = document.querySelector('.nav-menu_mobile'); //Botão de menu no modo mobile

menu_mobile_button.addEventListener('click', () => {

    const navmenu_close = Object.assign(document.createElement('div'), {
        className: 'nav-menu_close',
        textContent: 'x'
    });

    if(!(navmenu.className === 'opened'))
    {
        navmenu.append(navmenu_close);
        navmenu.classList.add('opened');
    }

    navmenu_close.addEventListener('click', () => {
        navmenu.classList.remove('opened');
        navmenu_close.remove();
    })
});