import { Link } from "react-router-dom";

export default function CardLastUnit(selectProduct) {
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
					<Link to={`/item/${product.id}`}>
						<button type="button" className="btn btn-outline-dark mt-auto">
							Detalle
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
