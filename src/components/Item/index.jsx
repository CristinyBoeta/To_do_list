import Card from '../Card'
const Item = (props) => {

    const solicitarExclusao = () => {
        props.excluir(props.id)
    }

    const solicitarEdicao = () => {
        props.editar({
            id : props.id,
            tarefa : props.tarefa
        })
    }

    return<Card>
        <li>
            {props.item} - [<a href="/#" onClick={solicitarEdicao}>Editar</a>] - [<a href="/#" onClick={solicitarExclusao}>Excluir</a>]
        </li>
        </Card>
}

export default Item;