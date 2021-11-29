import './App.css';
import Inicio from './HomePage/paginaPrincipal';
import InicioDeSesion from './HomePage/IniciarSesion/iniciarSesion';
import AddNewAlbum from './HomePage/Users/adminView/nuevoAlbum/addNewAlbum';
import EditarAlbum from './HomePage/Users/adminView/editarAlbum/editarAlbum';
import NavbarUser from './HomePage/Users/mainUser/navbarUser/mainUser';
import AdminView from './HomePage/Users/adminView/adminView';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import RequireAuth from './HomePage/RequireAuth/RequireAuth';
import Redirect from './HomePage/Redirect/Redirect';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Inicio/>}/>
          <Route path="/home" element={<Inicio/>}/>
          <Route path="/login" element={<InicioDeSesion/>}/>
          <Route path="/redirect" element={<Redirect />} />
          <Route
          path="/user"
          element={
            <RequireAuth role="user">
              <NavbarUser />
            </RequireAuth>
          } />
          <Route
            path="/admin"
            element={
              <RequireAuth role="admin">
                <AdminView />
              </RequireAuth>
            } />
          <Route path="/add" element={<AddNewAlbum/>}/>
          <Route path="/edit/:idAlbum" element={<EditarAlbum/>}/>
          <Route path="/*" element={<h2>No se ha encontrado el recurso, error 404</h2>} />
        </Routes>
        {/* <AppRoute/> */}
      </div>
    </Router>
  );
}

export default App;