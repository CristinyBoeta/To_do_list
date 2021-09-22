import { useState } from 'react';
import Formulario from './components/Formulario'
import Tarefa from './components/Tarefa'
import Item from './components/Item'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
   const [tarefas, setTarefas] = useState([])

  const obterTarefas = () => {
    axios.get('http://localhost:8000/tarefas').then(response => {
      setTarefas(response.data)
    })
      .catch(erro => {
        console.log(erro);
      })
    }

   useEffect(() => {
    obterTarefas()
   }, [])


   const adicionaTarefa = (tarefa) => {
    axios.post('http://localhost:8000/tarefas', tarefa).then(response =>{
      const novaTarefa = response.data;
      setTarefas([
        novaTarefa,
        ...tarefas
      ])
    })
    .catch(erro => {
      console.log(erro);
    })
   }

   const removerTarefa = (id) => {
     axios.delete('http://localhost:8000/tarefas/' + id).then(response => {
      obterTarefas()
      })
      .catch(erro => {
        console.log(erro);
     }) .catch(erro => {
       console.log(erro)
     })

  }

  const editarTarefa = (item) => {
    props.editar({
    })
  }


  return (
    <div>
      <Formulario aoSalvar={adicionaTarefa}/>
      <Tarefa>
        {tarefas.map((item) => <Item key={item.id} editar={editarTarefa}  excluir={removerTarefa} id={item.id} item={item.tarefa}/>)}
      </Tarefa>
    </div>

  );
}

export default App;
