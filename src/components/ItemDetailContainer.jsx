import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import '../css/ItemListContainer.css';
import CardDetail from './CardDetail.jsx';
import { getFirestore, getDoc, doc } from "firebase/firestore";

export default function ItemDetailContainer() {

  const [productId, setProductId] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();


  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "productos", id);

    getDoc(refDoc).then((snapshot) => {
      setProductId({ id: snapshot.id, ...snapshot.data() });
    }).finally(()=> setLoading(false));

  }, [id])

  if (loading) return <div>Loading...</div>
  return (

    <Container fluid >
      <CardDetail product={productId}></CardDetail>
    </Container>
  );
}
