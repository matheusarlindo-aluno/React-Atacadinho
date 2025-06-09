import './Carrinho.css'
import { useEffect, useState } from 'react'
import botaoVoltar from './voltar.png'


function ListarUsuario(){     
    const [items, setItems] = useState([]);

    async function listItems() {
        const api = await fetch("http://localhost:8090/usuario/admin/listarUsuarios")
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

            <h1>Listagem de Usuarios</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='table-titulo'>Nome</th>
                        <th className='table-titulo'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((Item) => (
                        <tr>
                            <td className='item-table'>{Item.name}</td>
                            <td className='item-table'>{Item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListarUsuario;