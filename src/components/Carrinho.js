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
            <table>
                <tr>
                    <th>Name</th>
                    <th>Quantidade</th>
                </tr>
                <tbody>
                    {items.map((Item) => (
                        <tr>
                            <th>{Item.name}</th>
                            <th>{Item.quantidade}</th>
                            <input className='table-button' type='button' value="Remover"/>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarItens;
