import './App.css';

function App() {

  function onclick(){
    window.location.href = "http://localhost:3000/create-user"
  }

  function onclicklogin(){
    window.location.href = "http://localhost:3000/user-login"
  }

  return (
    <div className="App">
      <h1>Bem vindo - App de vendas</h1>
      <input className='botao-cad' type='button' value="Se Cadastre" onClick={onclick}/>
      <input className='botao-cad' type='button' value="Entrar na conta" onClick={onclicklogin} />
    </div>
  );
}

export default App;
