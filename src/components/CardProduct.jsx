import { useParams } from "react-router-dom"
import CardItem from './CardItem';
import data from "../data/products.json"
import { useEffect, useState } from "react";

export const CardProduct = () => {
	const [products, setProducts] = useState([]);
	const { categoryId } = useParams();

	useEffect(() => {
		if (categoryId) {
			const productsFilteredByCategory = data.filter(
				product => product.categoriaSearch === categoryId
			)
			setProducts(productsFilteredByCategory)
		} else {
			setProducts(data)
		}
	}, [categoryId])

	return (

		<section className="py-5">
			<div className="container px-4 px-lg-5 mt-5">
				<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
					<CardItem data={products}>
					</CardItem>
				</div>
			</div>
		</section>

	)
}
