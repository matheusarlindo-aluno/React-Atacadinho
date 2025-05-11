import './Admin.css';

function Admin() {
    function onClickCriarProduto() {
        window.location.href = "http://localhost:3000/criarProduto";
    }

    function onClickAtualizarProduto() {
        window.location.href = "http://localhost:3000/atualizarProduto";
    }
    function onClickHistoricoProduto() {
        window.location.href = "http://localhost:3000/historico-produtos";
    }

    return (
        <div className="App">
            <h1>Bem vindo ao Atacadinho</h1>
            <input className='botao-cad' type='button' value="Criar Produto" onClick={onClickCriarProduto} />
            <input className='botao-cad' type='button' value="Atualizar Produto" onClick={onClickAtualizarProduto} />
            <input className='botao-cad' type='button' value="Historico de Vendas" onClick={onClickHistoricoProduto} />
        </div>
    );
}

export default Admin;