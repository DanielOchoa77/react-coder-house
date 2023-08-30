import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/logoB.svg';
import CartWidget from './CartWidget.jsx';
import ItemListContainer from './ItemListContainer.jsx';
import { Error404 } from './Error404.jsx';
import data from "../data/products.json";

import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from './ItemDetailContainer';

export default function MainNavBar() {
  const categories = data.map((producto) =>
    ({ "categoria": producto.categoria, "categoriaSearch": producto.categoriaSearch }));

  const listaCategorias = new Set(categories.map(JSON.stringify))
  const categoriesMenu = Array.from(listaCategorias).map(JSON.parse);

  return (
    <BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand as={NavLink} to={`/`}>
            <img src={logo} alt="logo" height='40' />
            Shopping Empire
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavLink className="nav-link" to={`/home`} key={"inicio"}>Inicio</NavLink>
              <NavDropdown title="Productos" id="navbarScrollingDropdown">
                {categoriesMenu.map(category => (
                  <NavDropdown.Item as={NavLink} key={"nv_" + category.categoria} className="nav-link dropdown-item" to={`/category/${category.categoriaSearch}`}>
                    {category.categoria}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route
          path="/home"
          element={<ItemListContainer />}
        />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="*" element={<Error404 />} />
      </Routes>

    </BrowserRouter>

  );
}
