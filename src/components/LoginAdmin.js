import { useState } from 'react'
import './LoginUser.css'
import botaoVoltar from './voltar.png'


function LoginAdmin(){
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function adminDados(){

        if(email==="" || senha === ""){
            alert("Preencha todos os campos")
            return
        }

        // integrar com a vossa API

        let api = await fetch("http://localhost:8090/usuario/admin/login",{
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
            window.location.href = "http://localhost:3000/admin"
            return
        }

        alert("Erro ao Atualizar os dados!!");

    }

    return(
        <div>
            <nav className='cabecalho_user'>
                <a href='/' ><img className='back_button' src={botaoVoltar} alt="Descrição da imagem"/></a>
            </nav>
            <div className='page'>
                <div className='card'>
                    <form className='form'>
                        <h2>Login</h2>

                        <label htmlFor='email'>E-mail:</label>
                        <input className='campo' type='text' id='email' name='email' placeholder='Digite seu e-mail' onChange={(e)=> setEmail(e.target.value)}></input>

                        <label htmlFor='password'>Senha:</label>
                        <input className='campo' type='password' id='senha' name='senha' placeholder='Digite sua senha'  onChange={(e)=> setSenha(e.target.value)}></input>

                        <input className='botao' type='button' value="Entrar" onClick={adminDados}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginAdmin