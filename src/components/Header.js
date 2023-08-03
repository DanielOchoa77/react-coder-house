import '../css/HeaderStyle.css';
import ItemListContainer from './ItemListContainer.js';

export default function Header(props) {
  return (
    <header class="bg-dark-header padding-header">
      <ItemListContainer msj1={props.msj1} msj2={props.msj2}></ItemListContainer>
    </header>
  );
}
