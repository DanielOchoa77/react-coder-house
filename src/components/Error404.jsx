import '../css/error.css';
import { Link } from "react-router-dom";

export const Error404 = () => {
	return (
		<div className='body-error'>
			<div className="section-error">
				<h1 className="error h1-error">404</h1>
				<div className="page">Ooops!!!</div>
				<div className="page">La pagina que estas buscando no se encontro</div>
				<Link to={`/home`}>
					<button type="button" className="btn btn-outline-dark mt-auto">
						Volver a incio
					</button>
				</Link>
			</div>
		</div>

	)
}