import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext.jsx';

export default function CardCartLastUnit(selectProduct) {
	const { product} = selectProduct;
	const { removeItem } = useContext(CartContext);

	return (
		<div className="col mb-5">
			<div className="card h-100">
				<img className="card-img-top" src={product.img} alt="..." />
				<div className="card-body p-4">
					<div className="text-center">
						<h5 className="fw-bolder">{product.nombre}</h5>
						${product.precio}
					</div>
				</div>
				<div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
					<button onClick={() => removeItem(product)} type="button" className="btn btn-outline-dark mt-auto">
						Eliminar del carrito
					</button>
				</div>
			</div>
		</div>
	);
}
