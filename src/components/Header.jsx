import '../css/HeaderStyle.css';
import Container from 'react-bootstrap/Container';

export default function Header(props) {
  const { msj1, msj2 } = props;
  return (
    <header className="bg-dark-header padding-header">
      <Container fluid className="padding-container margin-container container-header">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">{msj1}</h1>
          <p className="lead fw-normal text-white-50 mb-0">{msj2}</p>
        </div>
      </Container>
    </header>
  );
}
