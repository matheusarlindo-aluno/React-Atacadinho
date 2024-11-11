
import './Carrinho.css';
import { useState, useEffect } from 'react'

function Carrinho() {

    async function Pagamento() {
        document.addEventListener ('DOMContentLoaded', () => {
            const buyButtons = document.querySelectorAll('.buy-button');

            buyButtons.forEach(button => {
                button.addEventListener('click', async (event) => {
                    const productCard = event.target.closest('.product-card');
                    const productName = productCard.querySelector('.productName').innerText;
                    const quantityInput = productCard.querySelector('input[type="number"]');
                    const quantity = quantityInput.value;

                    const productRequestDto = {
                        name: productName,
                        quantidade: parseInt(quantity)
                    };

                    try {
                        const response = await fetch('http://localhost:8090/produto/comprar', {
                            method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(productRequestDto)
                    });
                
                    if (response.ok) {
                        alert(`Produto ${productRequestDto.name} Compra com sucesso! Quantidade: ${productRequestDto.quantidade}`);
                    } else {
                        alert('Erro ao cadastrar produto');
                    }
                } catch (error) {
                    console.error('Erro ao fazer requisição:', error);
                    alert(`Erro ao conectar com o servidor: ${error.message}`);
                    }
                })
            })


        })

    
    }



    
    const [items, setItem] = useState([]);
    
    useEffect(() => {
        Pagamento(setItem)
    }, []);


    return (
        <div>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>Quantidade</th>
                    <th>Pagamento</th>
                </tr>
                <tbody className='product-card'>
                    {items.map((item) => (
                        <tr>
                            <th className='productName'>{item.name}</th>
                            <th className='productQuantidade'>{item.quantidade}</th>
                            <input className='buy-button' type='button' value="comprar" onClick={Pagamento}  />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Carrinho