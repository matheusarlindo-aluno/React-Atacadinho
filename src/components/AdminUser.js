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

    function onClickAdminEstoque() {
        window.location.href = "http://localhost:3000/adminEstoque";
    }

    return (
        <div className="App">
            <h1>Bem vindo ao Atacadinho Brasil </h1>
            <input className='botao-cad' type='button' value="Criar Produto" onClick={onClickCriarProduto} />
            <input className='botao-cad' type='button' value="Atualizar Produto" onClick={onClickAtualizarProduto} />
            <input className='botao-cad' type='button' value="Historico de Vendas" onClick={onClickHistoricoProduto} />
            <input className='botao-cad' type='button' value="Estoque" onClick={onClickAdminEstoque} />
        </div>
    );
}

export default Admin;