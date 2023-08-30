import { Link } from "react-router-dom";
import ItemCount from './ItemCount';

export default function CardDetail(props) {
	const { product } = props;

	return (
		<section className="py-5">
			<div className="container px-4 px-lg-5 mt-5">
				<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
					{
						!product.promo ?
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
										<ItemCount stock={product.stock}></ItemCount>
									</div>

									<div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
										<Link to={`/home`}>
											<button type="button" className="btn btn-outline-dark mt-auto">
												Volver
											</button>
										</Link>
									</div>
								</div>
							</div> : product.promo && product.recomendado ?
								<div className="col mb-5">
									<div className="card h-100">
										<div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Promo
										</div>
										<img className="card-img-top" src={product.img} alt="..." />
										<div className="card-body p-4">
											<div className="text-center">
												<h5 className="fw-bolder">{product.nombre}</h5>
												<div className="d-flex justify-content-center small text-warning mb-2">
													<div>
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
															<path fill="currentColor" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
														</svg>
													</div>
													<div>
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
															<path fill="currentColor" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
														</svg>
													</div>
													<div>
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
															<path fill="currentColor" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
														</svg>
													</div>
													<div>
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
															<path fill="currentColor" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
														</svg>
													</div>
													<div>
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
															<path fill="currentColor" d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
														</svg>
													</div>
												</div>

												<span className="text-muted text-decoration-line-through">${product.precio}</span>
												-${product.precioPromo}
											</div>
										</div>
										<div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
											<ItemCount stock={product.stock}></ItemCount>
										</div>
										<div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
											<Link to={`/home`}>
												<button type="button" className="btn btn-outline-dark mt-auto">
													Volver
												</button>
											</Link>
										</div>
									</div>
								</div> : product.promo && !product.recomendado ?
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
											<ItemCount stock={product.stock}></ItemCount>
										</div>
										<div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
											<Link to={`/home`}>
												<button type="button" className="btn btn-outline-dark mt-auto">
													Volver
												</button>
											</Link>
										</div>
									</div> : ""
					}</div>
			</div>
		</section>
	);
}
