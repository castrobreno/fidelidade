const btn_utilities = document.querySelectorAll('.btn-utilities'); // Botões de ação do utilities
const utilities_button = document.querySelectorAll('.btn-utilities_button'); // Botões de ação do utilities
const utilities_list = document.querySelectorAll('.btn-utilities_list'); //Listas gerais de itens
const utilities_close = document.querySelectorAll('.btn-utilities_close'); //Listas gerais de itens

let overlay;

for (let i = 0; i < utilities_button.length; i++)
{

    utilities_button[i].addEventListener('click', () => {
        if(!utilities_list[i].open){
            
            overlay = createOverlay(utilities_list[i].parentElement);
            utilities_list[i].show();

            overlay.addEventListener('click', (event) => {
                utilities_list[i].close();
                overlay.remove();
            });

        } else {
            utilities_list[i].close();
        }
    });

    utilities_close[i].addEventListener('click', () => {
        const current_list = String(getComputedStyle(utilities_list[i]).display);
        if(current_list === 'block'){
            utilities_list[i].close();
            overlay.remove();
        }
    });
}

function createOverlay(parente_fantasma)
{
    const overlay = Object.assign(document.createElement('div'), {
        className: 'overlay'
    });

    parente_fantasma.prepend(overlay);

    return overlay;
}