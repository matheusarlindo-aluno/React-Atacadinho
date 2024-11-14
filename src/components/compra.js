// import logo from './logo.svg';
import './compra.css';
import carrinho from './carrinho-de-compras-de-design-xadrez.png'
import { useState } from 'react';


function Compra() {

    const [quantidade, setQuantidade] = useState('')

    async function AdicionarCompras(productName) {

        let api = await fetch("http://localhost:8090/produto/adicionar", {
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
            alert("Adicionado ao carrinho!")

        }
        else {
            alert("Erro ao listar produto");
        }


    }

    return (
    <div>
        <nav className="cabecalho">
            <h1 className="titulo_link">Atacadinho</h1>
            <a href='/carrinho-compra' ><img className='img_link' src={carrinho} alt="Descrição da imagem"/></a>
        </nav>

    <div className='container'>
        <div className='carrossel'>
            <div className="item">
                <div className='info product-card'>
                    <h2>Arroz</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Arroz")}></input>
                </div>
                <div className='info product-card'>
                    <h2>Feijão</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Feijão")}></input>
                </div>
                <div className='info product-card'>
                    <h2>Macarrão</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Macarrão")}></input>
                </div>
                <div className='info product-card'>
                    <h2>Azeite</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Azeite")}></input>
                </div>
                <div className='info product-card'>
                    <h2>Vinagre</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                    {/* <input className='botao' type='button' value="Cadastrar" onClick={CadastroUser}/> */}
                </div>
            </div>
        </div>
    </div>      

    </div>
    );
}

export default Compra;


// import { useState } from 'react'
// import './FormUser.css'
// import { useParams } from 'react-router-dom'

// // function Onclick(){          
// //         window.location.href = "http://localhost:3000/atualizar?id="+id
// //     }

// function FormUser() {
//     const {id} = useParams();
//     const [name, setNome] = useState('');
//     const [email, setEmail] = useState('');
//     const [senha, setPassword] = useState('');
//     const [cpf_cnpj, setCpf_cnpj] = useState('');


//     async function CadastroUser() {
//         let api = await fetch(`http://localhost:8081/user/update/${id}`, {
//             method : "PUT",
//             body:JSON.stringify({
//                 "name":name,
//                 "email":email,
//                 "password":senha,
//                 "cpf_cnpj":cpf_cnpj,
//                 "is_active":1
//             }),
//             headers:{
//                 'Content-Type':'application/json'
//             }
//         })

//         if(api.ok){
//             alert("Cadastro com sucesso !")
//             window.location.href = "http://localhost:3000/listar-user"
//             return;
//         }
//         else {
//             alert("Erro ao cadastrar usuário");
//         }


//         alert(name)
//         alert(email)
//     }


//     return (
//         <div className='page'>
//             <div className='card'>
//                 <form className='form'>
//                     <h2>Cadastra-se</h2>

//                     <label htmlFor='name'>Nome:</label>
//                     <input className='campo' type='text' id='name' name='name' placeholder='Digite seu nome' onChange={(e)=> setNome(e.target.value)}></input>

//                     <label htmlFor='email'>E-mail:</label>
//                     <input className='campo' type='text' id='email' name='email' placeholder='Digite seu e-mail' onChange={(e)=> setEmail(e.target.value)}></input>

//                     <label htmlFor='password'>Senha:</label>
//                     <input className='campo' type='password' id='password' name='password' placeholder='Digite sua senha'  onChange={(e)=> setPassword(e.target.value)}></input>

//                     <label htmlFor='cpf_cnpf'>CPF/CNPJ:</label>
//                     <input className='campo' type='text' id='cpf_cnpf' name='cpf_cnpf' placeholder='Digite seu CPF/CNPJ' onChange={(e)=> setCpf_cnpj(e.target.value)}></input>

//                     <input className='botao' type='button' value="Cadastrar" onClick={CadastroUser}/>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default FormUser

