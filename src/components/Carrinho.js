import './Carrinho.css'
import { useEffect, useState } from 'react'



function ListarItens(){     
    const [items, setItems] = useState([]);

    async function ComprarProduto(productName, quantidade) {

        let api = await fetch("http://localhost:8090/produto/comprar", {
            method : "POST",
            body:JSON.stringify({
                "name":productName,
                "quantidade":quantidade
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        if(api.ok){
            alert("Item Comprado!")

        }
        else {
            alert("Erro ao listar produto");
        }


    }

    async function Remover(productName, quantidade) {

        let api = await fetch("http://localhost:8090/produto/delete", {
            method : "POST",
            body:JSON.stringify({
                "name":productName,
                "quantidade":quantidade
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        if(api.ok){
            alert("Item Removido!")

        }
        else {
            alert("Erro ao listar produto");
        }


    }

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

    function VoltaCompra() {
        window.location.href = "http://localhost:3000/compra"
    }

    useEffect(() => {
        listItems()
    }, []);


    return(
        <div className='carrinho'>

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
                            <th><input className='table-button item-table' type='button' value="Remover" onClick={() => Remover(Item.name, Item.quantidade)}/></th>
                            <th><input className='table-button item-table' type='button' value="Comprar" onClick={() => ComprarProduto(Item.name, Item.quantidade)}/></th>
                        </tr>
                    ))}
                </tbody>
            </table>

            <input className="buy-button" type="button" value="Voltar a Comprar"  onClick={VoltaCompra}/>

        </div>
    )
}

export default ListarItens;
