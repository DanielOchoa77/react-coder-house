import { Form } from "react-bootstrap";
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext.jsx';
import CardCartlLastUnit from './CardCartLastUnit.jsx';
import CardCartPopular from './CardCartPopular.jsx';
import CardCartPromo from './CardCartPromo.jsx';

export const Cart = () => {
    const { items, totalCart } = useContext(CartContext);

    if (totalCart > 0) {
        const monto = items.reduce(
            (acumulador, valorActual) =>
                acumulador + valorActual.quantity * valorActual.precioFinal, 0).toFixed(3);
        const procentajeIva = 18;
        const iva =parseFloat((monto * procentajeIva) / 100).toFixed(3);
        console.log(iva);
        console.log(monto);
        const valorTotal = (parseFloat(monto) + parseFloat(iva)).toFixed(3);

        return (<>

            <section className="py-5">
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
            <section style={{ textAlign: 'end' }}>
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
            <div className="modal-footer">
                <button type="button" className="btn btn-primary btn-close-color">Seguir
                    comprando</button>
                <button id="paymentButton" type="button" className="btn btn-success" disabled ><i className="bi bi-credit-card">
                </i>Pagar</button>
            </div>
        </>)
    }

    return (<div>no hay nada</div>)

}