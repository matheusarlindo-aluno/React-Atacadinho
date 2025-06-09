import './Admin.css';
import botaoVoltar from './voltar.png'


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

    function onClickListarUsuario() {
        window.location.href = "http://localhost:3000/listarUsuario";
    }

    return (

        <div className="App">
            <nav className='cabecalho_user'>
                <a href='/admin-login' ><img className='back_button' src={botaoVoltar} alt="Descrição da imagem"/></a>
            </nav>
            <h1>Bem vindo ao Atacadinho Brasil </h1>
            <input className='botao-cad' type='button' value="Criar Produto" onClick={onClickCriarProduto} />
            <input className='botao-cad' type='button' value="Atualizar Produto" onClick={onClickAtualizarProduto} />
            <input className='botao-cad' type='button' value="Historico de Vendas" onClick={onClickHistoricoProduto} />
            <input className='botao-cad' type='button' value="Estoque" onClick={onClickAdminEstoque} />
            <input className='botao-cad' type='button' value="ListarUsuario" onClick={onClickListarUsuario} />
        </div>
    );
}

export default Admin;