
import './ListUser.css'
import { useState, useEffect } from 'react'

function ListUser() {

    const [users, setUsers] = useState([]);

    async function listUser() {
        const api = await fetch("http://localhost:8081/user/list")
        const resposta = await api.json()

        if (api.ok) {
            setUsers(resposta)
        } else {
            alert("Erro")
            return false
        }

    }

    useEffect(() => {
        listUser()
    }, []);


    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Atualizar</th>
                </tr>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <th>{user.id}</th>
                            <th>{user.name}</th>
                            <th>{user.cpf_cnpj}</th>
                            <input type='button' value="Atualizar"  />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListUser