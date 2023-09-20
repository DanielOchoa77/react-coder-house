import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function CartModalPayment(props) {
  const { items } = useContext(CartContext);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Datos de comprador
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FloatingLabel
          controlId="floatingNombre"
          label="Nombre"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="nombre" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingEmail"
          label="Correo electronico"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel 
          controlId="floatingCelphone" 
          label="Celular"
          className="mb-3">
          <Form.Control type="number" placeholder="Celular" />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}
