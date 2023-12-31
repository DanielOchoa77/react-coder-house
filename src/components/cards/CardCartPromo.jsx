import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext.jsx';

export default function CardCartPromo(selectProduct) {
	const { product } = selectProduct;
	const { removeItem } = useContext(CartContext);

	return (
		<div className="card h-100">
			<div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Promo
			</div>
			<img className="card-img-top" src={product.img} alt="..." />

			<div className="card-body p-4">
				<div className="text-center">
					<h5 className="fw-bolder">{product.nombre}</h5>
				</div>
				<div className="text-center">
					<span className="text-muted text-decoration-line-through"> ${product.precio}</span>
					-${product.precioPromo}
				</div>
				<div className="text-center">
					Cantidad: <span>{product.quantity}</span>
				</div>
			</div>
			<div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
				<button onClick={() => removeItem(product)} type="button" className="btn btn-outline-dark mt-auto">
					Eliminar del carrito
				</button>
			</div>
		</div>
	);
}
