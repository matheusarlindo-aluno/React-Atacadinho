import { useState } from 'react'
import './FormUser.css'
import botaoVoltar from './voltar.png'

function FormUser(){
    const [name, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function cadastroUser(){
        
        if(name=== "" || email==="" || senha === ""){
            alert("Preencha todos os campos")
            return
        }
        
        // integrar com a vossa API

        let api = await fetch("http://localhost:8090/usuario/cadastrar",{
            method:"POST",
            body:JSON.stringify({
                "name":name,
                "email":email,
                "senha": senha,
                "is_active":1
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        
        if(api.ok){
            alert("Cadastro done")
            window.location.href = "http://localhost:3000/compra"
            return
        }

        alert("Erro ao fazer o cadastro!!");

    }

    return(

        
        <div>
            <nav className='cabecalho_user'>
                <a href='/' ><img className='back_button' src={botaoVoltar} alt="Descrição da imagem"/></a>
            </nav>
            <div className='page'>
                <div className='card'>
                    <form className='form'>
                        <h2>Cadastra-se</h2>

                        <label htmlFor='name'>Nome:</label>
                        <input className='campo' type='text' id='name' name='name' placeholder='Digite seu nome' onChange={(e)=> setNome(e.target.value)}></input>

                        <label htmlFor='email'>E-mail:</label>
                        <input className='campo' type='text' id='email' name='email' placeholder='Digite seu e-mail' onChange={(e)=> setEmail(e.target.value)}></input>

                        <label htmlFor='password'>Senha:</label>
                        <input className='campo' type='password' id='senha' name='senha' placeholder='Digite sua senha'  onChange={(e)=> setSenha(e.target.value)}></input>

                        <input className='botao' type='button' value="Cadastrar" onClick={cadastroUser}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormUser