import './Carrinho.css'
import { useEffect, useState } from 'react'
import botaoVoltar from './voltar.png'




function ListarItens(){     
    const [items, setItems] = useState([]);

    async function ComprarProduto(productName, quantidade) {

        let api = await fetch("http://localhost:8090/produto/comprar", {
            method : "POST",
            body:JSON.stringify({
                "name":productName,
                "quantidade":quantidade,      
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        if(api.ok){
            alert("Item Comprado!")

        }
        else {
            alert("Compra não efetuada.");
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



    useEffect(() => {
        listItems()
    }, []);


    return(
        <div className='carrinho'>

            <nav className='cabecalho_user'>
                <a href='/compra' ><img className='back_button' src={botaoVoltar} alt="Descrição da imagem"/></a>
            </nav>
            <h1>Carrinho de compras</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='table-titulo '>Name</th>
                        <th className='table-titulo'>Quantidade</th>
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

        </div>
    )
}

export default ListarItens;
