import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Image from 'react-bootstrap/Image';
import carrito from '../img/cart-fill.svg';

export default function CartWidget() {
  return (
    <Form className="d-flex">
      <Button variant="outline-secondary text-black">
        <Image src={carrito} height={20}
          className="me-1" style={{ marginBottom: '5%' }} />Carrito
        <span className="badge bg-dark bg-gradient text-white ms-1 rounded-pill">
          0
        </span>
      </Button>
    </Form>
  );
}
