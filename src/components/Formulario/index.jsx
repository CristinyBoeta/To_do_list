import { useState } from 'react';
import './estilos.css'
const Formulario = (props) =>{

    const[tarefa, setTarefa] = useState('')

    const manipuladorTarefa = (evento) => {
        setTarefa(evento.target.value)
    }

    const salvar = (evento) => {
        evento.preventDefault()
        props.aoSalvar({
            tarefa: tarefa
        })
        setTarefa('')
    }

    return (
        <form onSubmit={salvar}>
            <div>
                <label>Tarefa</label>
                <input required value={tarefa} onChange={manipuladorTarefa} type="text" />
            </div>
            <button>Enviar</button>
        </form>
    )
}

export default Formulario;