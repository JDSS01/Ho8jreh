import React from 'react';

import CadastroHospede from './views/cadastro-hospede';
import CadastroFuncionario from './views/cadastro-funcionario';

import ListagemHospedes from './views/listagem-hospedes';
import ListagemFuncionarios from './views/listagem-funcionarios';

import Login from './views/login';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route
          path='/cadastro-hospedes/:idParam?'
          element={<CadastroHospede />}
        />

        <Route
          path='/cadastro-funcionarios/:idParam?'
          element={<CadastroFuncionario />}
        />

        <Route
          path='/listagem-hospedes'
          element={<ListagemHospedes />}
        />

        <Route
          path='/listagem-funcionarios'
          element={<ListagemFuncionarios />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Rotas;
