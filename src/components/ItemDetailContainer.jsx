import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import '../css/ItemListContainer.css';
import CardDetail from './CardDetail.jsx';
import data from "../data/products.json";

export default function ItemDetailContainer() {

  const [productId, setProductId] = useState(null)
  const { id } = useParams()


  useEffect(() => {

    setProductId(data.find(product => product.id === Number(id)))
  }, [id])

  if (!productId) return <div>Loading...</div>
  return (

    <Container fluid >
      <CardDetail product={productId}></CardDetail>
    </Container>
  );
}
