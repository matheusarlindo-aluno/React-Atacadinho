import './Carrinho.css'
import { useEffect, useState } from 'react'


function ListarItens(){     
    const [items, setItems] = useState([]);

    
    async function listItems() {
        const api = await fetch("http://localhost:8090/produto/listproduct")
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
        <div>

            <h1>Carrinho de compras</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='table-titulo '>Name</th>
                        <th className='table-titulo'>Quantidade</th>
                        <th className='table-titulo'></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((Item) => (
                        <tr>
                            <th className='item-table'>{Item.name}</th>
                            <th className='item-table'>{Item.quantidade}</th>
                            <th><input className='table-button item-table' type='button' value="Remover"/></th>
                        </tr>
                    ))}
                </tbody>
            </table>

            <input className="buy-button" type="button" value="Comprar" />

        </div>
    )
}

export default ListarItens;
