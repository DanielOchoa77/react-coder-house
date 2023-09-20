import '../css/ItemCount.css';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext.jsx';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemCount(datos) {
  const { product } = datos;
  const { addItem } = useContext(CartContext);

  const stock = product.stock;

  const [count, setCount] = useState(1);

  const handelDecreaseCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handelIncreaseCount = () => {
    if (stock > count) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="container--itemCount--buttons">
        <button onClick={handelDecreaseCount} className="itemCount--button">-</button>
        <div className="itemCount--count">{count}</div>
        <button onClick={handelIncreaseCount} className="itemCount--button">+</button>
      </div>

      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
        <button onClick={() => addItem(product, count)} type="button" className="btn btn-outline-dark mt-auto">
          Agregar al carrito
        </button>
      </div>

      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
        <Link to={`/home`}>
          <button type="button" className="btn btn-outline-dark mt-auto">
            Volver
          </button>
        </Link>
      </div>
    </>

  );
}
