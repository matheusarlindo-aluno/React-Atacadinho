import './Carrinho.css'
import { useEffect, useState } from 'react'



function ListarItens(){     
    const [items, setItems] = useState([]);

    async function listItems() {
        const api = await fetch("http://localhost:8090/produto/listbestproducts")
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

    function VoltaMenu() {
        window.location.href = "http://localhost:3000/admin"
    }


    return(
        <div className='carrinho'>

            <h1>Carrinho de compras</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='table-titulo'>Name</th>
                        <th className='table-titulo'>Quantidade</th>
                        <th className='table-titulo'>Categoria</th>
                        <th className='table-titulo'>Valor</th>
                        <th className='table-titulo'></th>
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

            <input className="buy-button" type="button" value="Voltar ao menu"  onClick={VoltaMenu}/>

        </div>
    )
}

export default ListarItens;
