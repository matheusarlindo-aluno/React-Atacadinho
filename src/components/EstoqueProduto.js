import './Carrinho.css'
import { useEffect, useState } from 'react'
import botaoVoltar from './voltar.png'




function ListarItens(){     
    const [items, setItems] = useState([]);

    async function listItems() {
        const api = await fetch("http://localhost:8090/produto/listarstoque")
        const resposta = await api.json()

        if (api.ok) {
            setItems(resposta)
        } else {
            alert("Erro")
            return false
        }

    }

    useEffect(() => {
        listItems()
    }, []);

    


    return(
        <div className='carrinho'>

            <nav className='cabecalho_user'>
                <a href='/admin' ><img className='back_button' src={botaoVoltar} alt="Descrição da imagem"/></a>
            </nav>

            <h1>Carrinho de compras</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='table-titulo'>Name</th>
                        <th className='table-titulo'>Quantidade</th>
                        <th className='table-titulo'>Categoria</th>
                        <th className='table-titulo'>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((Item) => (
                        <tr>
                            <th className='item-table'>{Item.name}</th>
                            <th className='item-table'>{Item.quantidade}</th>
                            <th className='item-table'>{Item.categoria}</th>
                            <th className='item-table'>{Item.valor}</th>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )
}

export default ListarItens;