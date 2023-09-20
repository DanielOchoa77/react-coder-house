import ItemCount from '../ItemCount';

export default function CardDetailPromo(selectProduct) {
	const { product } = selectProduct;
	return (
		<div className="card h-100">
			<div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Promo
			</div>
			<img className="card-img-top" src={product.img} alt="..." />

			<div className="card-body p-4">
				<div className="text-center">
					<h5 className="fw-bolder">{product.nombre}</h5>
					<span className="text-muted text-decoration-line-through">${product.precio}</span>
					-${product.precioPromo}
				</div>
			</div>
			<div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
				<ItemCount product={product} ></ItemCount>
			</div>
		</div>
	);
}
