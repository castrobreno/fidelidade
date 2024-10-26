const form = document.querySelector('.main-login');
const username = document.querySelector('[name=username]');
const password = document.querySelector('[name=password]');
const visibility = document.querySelector('.main-login_field-icon');
const submit = document.querySelector('.main-login_submit');

form.addEventListener("input", (event) => {
    event.preventDefault();

    if(username.value != "" && password.value != "")
    {
        submit.removeAttribute("disabled");
    }
    else if(username.value == "" || password.value == "")
    {
        submit.setAttribute("disabled", true);
    }
});

visibility.addEventListener("click", () => {

    if(password.getAttribute("type") === "password")
    {
        password.setAttribute("type", "text");
        visibility.innerText = "visibility";
    }
    else if(password.getAttribute("type") === "text")
    {
        password.setAttribute("type", "password");
        visibility.innerText = "visibility_off";
    }

});

const main = document.querySelector('.main');
const main_header = document.querySelector('.main-header');
const system_info = document.querySelector('.system-info');

function moveToSystemInfo() {
    if (window.innerWidth < 765) {
        // Se o system_info não estiver no main, mova-o para lá
        if (main_header.contains(system_info)) {
            main.appendChild(system_info);  // Move para o Container main
        }
    } else {
        // Se o system_info não estiver no main_header, mova-o para lá
        if (main.contains(system_info)) {
            main_header.appendChild(system_info);  // Move para o Container main_header
        }
    }
}

// Verificar ao carregar a página
moveToSystemInfo();

// Adicionar listener para mudanças de tamanho da tela
window.addEventListener("resize", moveToSystemInfo);