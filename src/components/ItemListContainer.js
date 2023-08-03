import Container from 'react-bootstrap/Container';
import '../css/ItemListContainer.css';

export default function ItemListContainer(props) {
  return (
    <Container fluid className="padding-container margin-container container-ItemListContainer">
      <div class="text-center text-white">
        <h1 class="display-4 fw-bolder">{props.msj1}</h1>
        <p class="lead fw-normal text-white-50 mb-0">{props.msj2}</p>
      </div>
    </Container>
  );
}
