import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../img/logoB.svg';
import CartWidget from './CartWidget.jsx';
import { NavLink } from "react-router-dom";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export default function MainNavBar() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();

    const refCollection = collection(db, "productos");
    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size > 0) {
        setProducts(snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        }));
      } else {
        setProducts([]);
      }
    }).finally(() => setLoading(false));


  }, [products])

  if (loading) {
    return (
      <Container fluid >
        <Button variant="dark" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Cargando...
        </Button>
      </Container>
    )
  }

  const categories = products.map((producto) =>
    ({ "categoria": producto.categoria, "categoriaSearch": producto.categoriaSearch }));

  const listaCategorias = new Set(categories.map(JSON.stringify))
  const categoriesMenu = Array.from(listaCategorias).map(JSON.parse);

  if (loading) {
    return (
      <Container fluid >
        <Button variant="dark" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          Cargando...
        </Button>
      </Container>
    )
  }


  return (
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
          <NavLink className="nav-link" to={`/cart`} key={"cart"}><CartWidget /></NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
