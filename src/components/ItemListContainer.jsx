import Container from 'react-bootstrap/Container';
import '../css/ItemListContainer.css';
import { CardProduct } from './CardProduct.jsx';
import Header from './Header.jsx';
export default function ItemListContainer() {
  return (

    <Container fluid >
      <Header msj1="Compra ahora"
        msj2="Aqui todo lo que buscas">
      </Header>
      <CardProduct></CardProduct>
    </Container>
  );
}
