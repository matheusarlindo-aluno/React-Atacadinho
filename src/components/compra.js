// import logo from './logo.svg';
import './compra.css';
import carrinho from './carrinho-de-compras-de-design-xadrez.png'
import { useState } from 'react';


function Compra() {

    const [name, setNome] = useState('')
    const [quantidade, setQuantidade] = useState('')

    async function AdicionarCompras() {
        if(name === "" || quantidade === "") {
            return
        }

        let api = await fetch("http://localhost:8090/produto/adiconar", {
            method : "POST",
            body:JSON.stringify({
                "name":name,
                "quantidade":quantidade
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })

        if(api.ok){
            alert("Cadastro com sucesso !")
            window.location.href = "http://localhost:3000/carrinho-compra"
            return;
        }
        else {
            alert("Erro ao listar produto");
        }


        alert(name)
        alert(quantidade)
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
                    <h2 onChange={(e)=> setNome(e.target.value)}>Arroz</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <button className="add-button" onClick={AdicionarCompras} >Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    </div>      

    </div>
    );
}

export default Compra;