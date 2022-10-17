var nomeInput = document.querySelector(`#nome`)
var emailImput = document.querySelector(`#email`)
var senhaInput = document.querySelector(`#senha`)
var confirmarInput = document.querySelector(`#confirmar`)
var descricaoInput = document.querySelector(`#descricao`)
var mInput = document.querySelector(`#m`)
var fInput = document.querySelector(`#f`)
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


    if (nomeValue == '' || emailvalue == '' || senhaValue =='' || confirmarValue =='' || descricaoValue =='' || mValue == ''|| fValue =='' ){

        alert('Preencha os campos obrigatorios!!!')

    }

    else {

        alert('Enviado com sucesso')

    }

})



