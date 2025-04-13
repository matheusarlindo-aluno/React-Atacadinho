import './App.css';

function App() {
    function onClickCadastro() {
        window.location.href = "http://localhost:3000/create-user";
    }

    function onClickLogin() {
        window.location.href = "http://localhost:3000/user-login";
    }

    function onClickAdmin() {
        window.location.href = "http://localhost:3000/admin-login";
    }

    return (
        <div className="App">
            <h1>Bem vindo - App de vendas</h1>
            <input className='botao-cad' type='button' value="Se Cadastre" onClick={onClickCadastro} />
            <input className='botao-cad' type='button' value="Entrar na conta" onClick={onClickLogin} />
            <input className='botao-cad' type='button' value="Acesso Admin" onClick={onClickAdmin} />
        </div>
    );
}

export default App;