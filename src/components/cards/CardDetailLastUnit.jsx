import ItemCount from '../ItemCount';

export default function CardDetailLastUnit(selectProduct) {
	const { product } = selectProduct;

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
					<ItemCount product={product} ></ItemCount>
				</div>
			</div>
		</div>
	);
}
