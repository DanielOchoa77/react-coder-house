import { Form } from "react-bootstrap";
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext.jsx';
import CardCartlLastUnit from './CardCartLastUnit.jsx';
import CardCartPopular from './CardCartPopular.jsx';
import CardCartPromo from './CardCartPromo.jsx';
import CartModalPayment from './CartModalPayment.jsx';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { useState } from "react";


export const Cart = () => {
    const { items, totalCart } = useContext(CartContext);
    const [modalShow, setModalShow] = useState(false);

    if (totalCart > 0) {
        const monto = items.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity * valorActual.precioFinal, 0).toFixed(3);
        const procentajeIva = 18;
        const iva = parseFloat((monto * procentajeIva) / 100).toFixed(3);
        const valorTotal = (parseFloat(monto) + parseFloat(iva)).toFixed(3);

        return (<>
            <Container fluid className="padding-container-cart">
                <section>
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {items.map(prod => (
                                !prod.promo ?
                                    <CardCartlLastUnit product={prod} key={"item1_" + prod.id}></CardCartlLastUnit> : prod.promo && prod.recomendado ?
                                        <CardCartPopular product={prod} key={"item2_" + prod.id}></CardCartPopular> : prod.promo && !prod.recomendado ?
                                            <CardCartPromo product={prod} key={"item_3" + prod.id}></CardCartPromo> : ""
                            ))}
                        </div>
                    </div>
                </section>
                <div>
                    <section className="py-4" style={{ textAlign: 'end' }}>
                        <div className="form-group row">
                            <Form.Label className="col-sm-8 col-form-label" htmlFor="cantArt">Cantidad de articulos:</Form.Label>
                            <div className="col-sm-4">
                                <Form.Control type="number" readOnly className="form-control-plaintext"
                                    id="cantArt" placeholder="Cantidad de articulos"
                                    value={totalCart}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <Form.Label className="col-sm-8 col-form-label" htmlFor="cantArt">Subtotal:</Form.Label>
                            <div className="col-sm-4">
                                <Form.Control type="number" readOnly className="form-control-plaintext"
                                    id="cantArt" placeholder="subtotal"
                                    value={monto}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <Form.Label className="col-sm-8 col-form-label" htmlFor="iva">Iva:</Form.Label>
                            <div className="col-sm-4">
                                <Form.Control type="number" readOnly className="form-control-plaintext"
                                    id="cantArt" placeholder="iva"
                                    value={iva}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <Form.Label className="col-sm-8 col-form-label" htmlFor="total">Total:</Form.Label>
                            <div className="col-sm-4">
                                <Form.Control type="number" readOnly className="form-control-plaintext"
                                    id="total" placeholder="valorTotal"
                                    value={valorTotal}
                                />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="modal-footer text-cart-button ">
                    <Link to={`/home`}>
                        <button type="button" className="btn btn-primary btn-close-color">Seguir
                            comprando</button>
                    </Link>

                    <button id="paymentButton" type="button" className="btn btn-success" onClick={() => setModalShow(true)}><i className="bi bi-credit-card">
                    </i>Pagar</button>
                </div>
            </Container>

            <CartModalPayment
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </>)
    }

    return (
        <Container fluid className="padding-container margin-container container-header">
            <div className="text-center lead fw-normal text-black-50">
                <span className="text-cart-empty ">¡Tu carrito esta vacío!</span>
                <div className="img-cart-empty">
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" fill="currentColor" className="bi bi-cart-x-fill" viewBox="0 0 16 16">
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z" />
                    </svg>
                </div>
            </div>
        </Container>
    )

}