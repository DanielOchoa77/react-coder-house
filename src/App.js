import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainNavBar from './components/NavBar.jsx';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemListContainer from './components/ItemListContainer.jsx';
import { Error404 } from './components/Error404.jsx';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from "./contexts/CartContext";
import {Cart} from "./components/Cart.jsx"


function App() {
  return (<CartProvider>
    <BrowserRouter>
      <MainNavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/react-coder-house" element={<ItemListContainer />} />
        <Route
          path="/home"
          element={<ItemListContainer />}
        />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
  );
}

export default App;
