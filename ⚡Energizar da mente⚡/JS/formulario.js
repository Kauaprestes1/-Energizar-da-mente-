const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    mainPasswordValidate();
    comparePassword();
});

function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
    }
    else {
        removeError(0);
    }
}

function emailValidate() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
    }
    else {
        removeError(1);
    }
}

function mainPasswordValidate() {
    if (campos[2].value.length < 8) {
        setError(2);
    }
    else {
        removeError(2);
        comparePassword();
    }
}

function comparePassword() {
    if (campos[2].value == campos[3].value && campos[3].value.length >= 8) {
        removeError(3);
    }
    else {
        setError(3);
    }
}

var nomeInput = document.querySelector(`#nome`)
var emailImput = document.querySelector(`#email`)
var senhaInput = document.querySelector(`#senha`)
var confirmarInput = document.querySelector(`#confirmar`)
var descricaoInput = document.querySelector(`#descricao`)
var mInput = document.querySelector(`#m`)
var fInput = document.querySelector(`#f`)
var oInput = document.querySelector(`#o`)
var button = document.querySelector(`button`)



button.addEventListener(`click`, (e) => {

    e.preventDefault()
    const nomeValue = nomeInput.Value
    const emailvalue = emailImput.value
    const senhaValue = senhaInput.Value
    const confirmarValue = confirmarInput.value
    const descricaoValue = descricaoInput.value
    const mValue = mInput.value
    const fValue = fInput.value
    const oValue = oInput.value


    if (nomeValue == '' || emailvalue == '' || senhaValue == '' || confirmarValue == '' || descricaoValue == '' || mValue == '' || fValue == '' || oValue == '') {

        alert('Preencha os campos obrigatorios!!!')

    }

    else {

        alert('Enviado com sucesso')

    }

})


