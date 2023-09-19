import CardLastUnit from './CardLastUnit.jsx';
import CardPromo from './CardPromo.jsx';
import CardPopular from './CardPopular.jsx';


export default function CardItem(props) {
	const { data } = props;

	return (
		<>
			{data.map(prod => (
				!prod.promo ?
					<CardLastUnit product={prod} key={"item1_" + prod.id}></CardLastUnit> : prod.promo && prod.recomendado ?
						<CardPopular product={prod} key={"item2_" + prod.id}></CardPopular> : prod.promo && !prod.recomendado ?
							<CardPromo product={prod} key={"item_3" + prod.id}></CardPromo> : ""
			))}
		</>
	);
}
