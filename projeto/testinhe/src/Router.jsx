import { Routes, Route } from "react-router-dom";
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Pag1 from './pages/Pagprincipal/PagPrincipal'
import Pag2000 from './pages/Pag2000/Pag2000';
import Pag2006 from './pages/Pag2006/Pag2006';
import Pag2011 from './pages/Pag2011/Pag2011';
import useAuth from "./hooks/useAuth";

const Private = ({ Item }) => {
  const { signed } = useAuth();
  return signed ? <Item /> : <Login />;
};

export function Router() {
  return (
    <Routes>
              <Route path="/pag1" element={<Pag1 />} />

        <Route path="/2000-2005" element={<Pag2000 />} />
        <Route path="/2006-2010" element={<Pag2006 />} />
        <Route path="/2011-2015" element={<Pag2011 />} />
      <Route path="/" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
