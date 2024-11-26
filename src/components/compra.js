// import logo from './logo.svg';
import './compra.css';
import carrinho from './carrinho-de-compras-de-design-xadrez.png'
import { useState } from 'react';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';



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

        <>
        


        
    <div>
        <nav className="cabecalho">
            <h1 className="titulo_cabecalho">Atacadinho</h1>
            <a href='/carrinho-compra' ><img className='img_link' src={carrinho} alt="Descrição da imagem"/></a>   
        </nav>

        <h2 className="categoria-produto">Hortifruti</h2>

        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            
            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Maça</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Arroz")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Banana</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Feijão")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Laranja</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Macarrão")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Tomate</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Azeite")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Alface</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Cenoura</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Batata</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide> 
                <div className='info product-card'>
                    <h2>Cebola</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Abobrinha</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Pimentão</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>
        </Swiper>

        <h2 className='categoria-produto'>Carnes e Frios</h2>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            
            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Carne bovina</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Arroz")}></input>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Carne suína</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Feijão")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Frango</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Macarrão")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Linguiça</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Azeite")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Bacon</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Presunto</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Queijo</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide> 
                <div className='info product-card'>
                    <h2>Salame</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Ovo (dúzia)</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Peixe</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>
        </Swiper>

        <h2 className='categoria-produto'>Mercearia (Produtos Secos e Não Perecíveis)</h2>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            
            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Arroz</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Arroz")}></input>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Feijão</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Feijão")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Macarrão</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Macarrão")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Farinha</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Azeite")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Óleo de soja</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Açúcar</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Café</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide> 
                <div className='info product-card'>
                    <h2>Leite em pó</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Chá</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Achocolatado</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>
        </Swiper>

        <h2 className='categoria-produto'> Alimentos Perecíveis/Embalados</h2>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            
            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Sabão em pó</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Arroz")}></input>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Detergente</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Feijão")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Creme dental</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Macarrão")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Desinfetante</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Azeite")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Esponja</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Desodorante</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Shampoo</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide> 
                <div className='info product-card'>
                    <h2>Condicionador</h2> className="categoria-produto"
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Fio dental</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Sabonete</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>
        </Swiper>

        <h2 className="categoria-produto">Bebidas</h2>
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            
            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Água miner</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Arroz")}></input>
                </div>
            </SwiperSlide>
            
            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Refrigerante</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Feijão")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Sucos</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Macarrão")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Leite</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Azeite")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Vinho</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Cerveja</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Chá gelado</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide> 
                <div className='info product-card'>
                    <h2>Água de coco</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Energético</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='info product-card'>
                    <h2>Whisky</h2>
                    <p className="price">R$ 25,00</p>
                    <p>Quantidade:</p>
                    <input type="number"  min="1" max='1231231' id="quantity"  onChange={(e)=> setQuantidade(e.target.value)}/>
                    <input className="add-button" type='button' value='adicionar' onClick={() => AdicionarCompras("Vinagre")}></input>
                </div>
            </SwiperSlide>
        </Swiper>

        


    </div>
    </>
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

