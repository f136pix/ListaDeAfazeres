window.addEventListener('load', () => {
    const form = document.querySelector('#form-de-tarefas')
    const input = document.querySelector('#input-form')
    const listaElementos = document.querySelector('#tarefas')

    //Ao enviar o formulario
    form.addEventListener('submit', (e) => {
        //PreventDefault para que a página não seja recarregada automaticamente
        e.preventDefault();

        const tarefa = input.value

        //Caso a tarefa não esteja escrita
        if (!tarefa) {
            alert("Digite uma nova tarefa!")
            return
        }

        const elementoTarefa = document.createElement("div")
        elementoTarefa.classList.add("tarefa")

        const conteudoElementoTarefa = document.createElement("div")
        conteudoElementoTarefa.classList.add("conteudo")

        elementoTarefa.appendChild(conteudoElementoTarefa)

        const inputTarefa = document.createElement("input")
        inputTarefa.classList.add("texto")
        inputTarefa.type = "text";
        inputTarefa.value = tarefa
        inputTarefa.setAttribute("readonly", "readonly")

        conteudoElementoTarefa.appendChild(inputTarefa)



        const acoesTarefa = document.createElement("div")
        acoesTarefa.classList.add('acoes')


        const acoesEditar = document.createElement('button')
        acoesEditar.classList.add('editar')
        acoesEditar.innerHTML = "Editar"

        const acoesDeletar = document.createElement('button')
        acoesDeletar.classList.add('deletar')
        acoesDeletar.innerHTML = "Deletar"

        acoesTarefa.appendChild(acoesEditar)
        acoesTarefa.appendChild(acoesDeletar)

        listaElementos.appendChild(elementoTarefa)

        elementoTarefa.appendChild(acoesTarefa)

        input.value = ""

        acoesEditar.addEventListener('click', () => {
            if (acoesEditar.innerText.toLocaleLowerCase() == 'editar') {
                inputTarefa.removeAttribute('readonly')
                inputTarefa.focus()
                acoesEditar.innerText = 'Salvar'
            } else {
                inputTarefa.setAttribute('readonly', 'readonly')
                acoesEditar.innerText = 'Editar'
            }
        })

        acoesDeletar.addEventListener('click', () => {
            listaElementos.removeChild(elementoTarefa)
        })
    })
})