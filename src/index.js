import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormUser from './components/FormUser';
import Carrinho from './components/Carrinho';
import Compra from './components/compra';
import AtualizarUser from './components/AtualizarUser';
import LoginUser from './components/LoginUser';
import LoginAdmin from "./components/LoginAdmin";
import AdminUser from "./components/AdminUser";
import FormProduto  from "./components/criarProduto";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/create-user' element={<FormUser/>}></Route>
          <Route path='/carrinho-compra' element={<Carrinho/>}></Route>
          <Route path='/compra' element={<Compra/>}></Route>
          <Route path='/atualizar-dados' element={<AtualizarUser/>}></Route>
          <Route path='/user-login' element={<LoginUser/>}></Route>
          <Route path='/admin-login' element={<LoginAdmin/>}></Route>
          <Route path='/admin' element={<AdminUser/>}></Route>
          <Route path='/criarProduto' element={<FormProduto/>}></Route>
        </Routes>
      </BrowserRouter>

    </React.StrictMode>
);

reportWebVitals();
