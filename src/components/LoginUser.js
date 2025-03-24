import { useState } from 'react'
import './LoginUser.css'

function LoginUser(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function userDados(){
        
        if(email==="" || senha === ""){
            alert("Preencha todos os campos")
            return
        }
        
        // integrar com a vossa API

        let api = await fetch("http://localhost:8090/usuario/login",{
            method:"POST",
            body:JSON.stringify({
                "email": email,
                "senha": senha,
                "is_active":1
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        
        if(api.ok){
            alert("Atualização done")
            window.location.href = "http://localhost:3000/compra"
            return
        }

        alert("Erro ao Atualizar os dados!!");

    }

    return(
        <div className='page'>
            <div className='card'>
                <form className='form'>
                    <h2>Login</h2>

                    <label htmlFor='email'>E-mail:</label>
                    <input className='campo' type='text' id='email' name='email' placeholder='Digite seu e-mail' onChange={(e)=> setEmail(e.target.value)}></input>

                    <label htmlFor='password'>Senha:</label>
                    <input className='campo' type='password' id='senha' name='senha' placeholder='Digite sua senha'  onChange={(e)=> setSenha(e.target.value)}></input>

                    <input className='botao' type='button' value="Entrar" onClick={userDados}/>
                </form>
            </div>
        </div>
    )
}

export default LoginUser