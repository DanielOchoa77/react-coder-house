import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


export default function CartModalPayment(props) {
  const { show, onHide, valorTotal } = props;
  const { items, clear } = useContext(CartContext);
  const SwalMsj = withReactContent(Swal);

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleChangeForm = ev => {
    setFormValues(prev => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }))
  }

  const sendOrder = () => {
    const order = {
      buyer: formValues,
      items,
      total: valorTotal,
    }
    const db = getFirestore()
    const orderColletion = collection(db, "orders")
    SwalMsj.fire({
      title: 'Estas seguro?',
      text: "Realizaras la compra de los productos del carrito!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, comprar!'
    }).then((result) => {
      if (result.isConfirmed) {
        addDoc(orderColletion, order).then(({ id }) => {
          if (id) {
            Swal.fire(
              'Pago Exitoso!',
              'Muchas gracias por tu compra, tu compra ha sido exitosa con N° de pedido ' + id,
              'success'
            )
            setFormValues({
              name: "",
              phone: "",
              email: ""
            });
            clear();
          }
        })
      }
    })

  }


  return (
    <Modal
      show={show}
      onHide={onHide}
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
          <Form.Control type="text" placeholder="nombre"
            onChange={handleChangeForm}
            value={formValues.name}
            name='name'
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingEmail"
          label="Correo electronico"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com"
            onChange={handleChangeForm}
            value={formValues.email}
            name='email'
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPhone"
          label="Telefono"
          className="mb-3">
          <Form.Control type="number" placeholder="Telefono"
            onChange={handleChangeForm}
            value={formValues.phone}
            name='phone'
          />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Cerrar</Button>
        <Button variant="success" onClick={sendOrder}>Comprar</Button>
      </Modal.Footer>
    </Modal>
  );
}
