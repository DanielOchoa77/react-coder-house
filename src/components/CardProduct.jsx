import { useParams } from "react-router-dom"
import CardItem from './CardItem';
import { useEffect, useState } from "react";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";

export const CardProduct = () => {
	const [products, setProducts] = useState([]);
	const { categoryId } = useParams();

	useEffect(() => {
		const db = getFirestore();

		const refCollection = collection(db, "productos");

		if (categoryId) {
			const productsByCategory = query(collection(db, "productos"),
				where("categoriaSearch", "==", categoryId));

			getDocs(productsByCategory).then((snapshot) => {
				if (snapshot.size > 0) {
					setProducts(snapshot.docs.map((doc) => {
						return { id: doc.id, ...doc.data() }
					}));
				} else {
					setProducts([]);
				}
			});
		} else {
			getDocs(refCollection).then((snapshot) => {
				if (snapshot.size > 0) {
					setProducts(snapshot.docs.map((doc) => {
						return { id: doc.id, ...doc.data() }
					}));
				} else {
					setProducts([]);
				}
			});
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
