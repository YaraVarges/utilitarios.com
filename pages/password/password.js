let input = document.querySelector('.content-password input');
let generate_btn = document.querySelector('.refresh-btn');
let copy_btn = document.querySelector('.btn-copy');
let password_length = document.querySelector('.password-length input');
let checkboxes = document.querySelectorAll('.settings .checkbox input');
let min_length = document.querySelector('.password-length h4')
let copyMessage = document.getElementById('copy_message');


const allCaracteres = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-="
};

let length = password_length.value;
let characters = '';

password_length.addEventListener('input', () => {
    length = password_length.value;
    min_length.textContent = `Tamanho da senha: ${length}`;
})

generate_btn.addEventListener('click', () => {
    if (characters) {
        let password = '';
        for (i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        input.value = password;
    }
})

let generatePassword = () => {
    let target = event.target;
    let character = allCaracteres[target.id];
    if (target.checked) {
        characters += character;
    } else if (characters.indexOf(character) > -1) {
        characters = characters.replace(character, "");
    }
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', generatePassword)
})

copy_btn.addEventListener('click', () => {
    navigator.clipboard.writeText(input.value)
    .then(() => {
        copyMessage.textContent = "Copiado com sucesso!";
        setTimeout(() => {
            copyMessage.textContent = "";
        }, 2000);
    })
    .catch(err => {
        console.error('Erro ao copiar: ', err);
        copyMessage.textContent = "Erro ao copiar senha!";
        setTimeout(() => {
            copyMessage.textContent = "";
        }, 2000);
    });
});

