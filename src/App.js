import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainNavBar from './components/NavBar.js';
import Header from './components/Header.js';


function App() {
  return (
    <>
      <MainNavBar />
      <Header msj1="Compra ahora"
        msj2="Aqui todo lo que buscas">
      </Header>
    </>
  );
}

export default App;
