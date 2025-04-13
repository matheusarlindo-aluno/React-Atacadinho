import './Admin.css';

function Admin() {
    function onClickCriarProduto() {
        window.location.href = "http://localhost:3000/criarProduto";
    }

    function onClickAtualizarProduto() {
        window.location.href = "http://localhost:3000/atualizarProduto";
    }

    return (
        <div className="App">
            <h1>Bem vindo - App de vendas</h1>
            <input className='botao-cad' type='button' value="Se Cadastre" onClick={onClickCriarProduto} />
            <input className='botao-cad' type='button' value="Entrar na conta" onClick={onClickAtualizarProduto} />
        </div>
    );
}

export default Admin;