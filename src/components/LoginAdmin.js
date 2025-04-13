import { useState } from 'react'
import './FormUser.css'

function FormProduto(){
    const [name, setName] = useState('')
    const [categoria, setCategoria] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [valor, setValor] = useState('')

    async function criarProduto(){
        if(name === "" || categoria === "" || quantidade === "" || valor === ""){
            alert("Preencha todos os campos")
            return
        }

        // Converter para números
        const qtd = parseInt(quantidade)
        const valorNum = parseFloat(valor)

        if(isNaN(qtd) || isNaN(valorNum)){
            alert("Quantidade e valor devem ser números válidos")
            return
        }

        let api = await fetch("http://localhost:8090/produto/criarProduto",{
            method:"POST",
            body:JSON.stringify({
                "name": name,
                "categoria": categoria,
                "quantidade": qtd,
                "valor": valorNum
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        if(api.ok){
            alert("Produto cadastrado com sucesso!")
            window.location.href = "http://localhost:3000/compra"
            return
        }

        alert("Erro ao cadastrar o produto!");
    }

    return(
        <div className='page'>
            <div className='card'>
                <form className='form'>
                    <h2>Cadastrar Produto</h2>

                    <label htmlFor='name'>Nome do Produto:</label>
                    <input className='campo' type='text' id='name' name='name'
                           placeholder='Digite o nome do produto'
                           onChange={(e)=> setName(e.target.value)} />

                    <label htmlFor='categoria'>Categoria:</label>
                    <input className='campo' type='text' id='categoria' name='categoria'
                           placeholder='Digite a categoria'
                           onChange={(e)=> setCategoria(e.target.value)} />

                    <label htmlFor='quantidade'>Quantidade:</label>
                    <input className='campo' type='number' id='quantidade' name='quantidade'
                           placeholder='Digite a quantidade em estoque'
                           onChange={(e)=> setQuantidade(e.target.value)}
                           min="0" />

                    <label htmlFor='valor'>Valor Unitário:</label>
                    <input className='campo' type='number' id='valor' name='valor'
                           placeholder='Digite o valor unitário'
                           onChange={(e)=> setValor(e.target.value)}
                           step="0.01" min="0" />

                    <input className='botao' type='button' value="Cadastrar Produto" onClick={criarProduto}/>
                </form>
            </div>
        </div>
    )
}

export default FormProduto