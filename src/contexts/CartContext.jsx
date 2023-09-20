import { createContext, useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    const SwalCart = withReactContent(Swal)


    const addItem = (product, quantity) => {
        const alreadyExists = items.some(item => item.id === product.id);

        if (!alreadyExists) {
            setItems(prev => [...prev, { ...product, quantity }])
        } else {
            const actualizarProductos = items.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + quantity,
                    }
                } else {
                    return item;
                }
            })
            setItems(actualizarProductos);
        }

        SwalCart.fire({
            position: 'center',
            icon: 'success',
            title: 'Se agrego al carrito el producto ' + product.nombre,
            showConfirmButton: true,
            confirmButtonText: 'Ok',
            timer: 3000
        })

    }
    const totalCart = items.reduce((acum, val) => acum + val.quantity, 0);

    const removeItem = (product) => {
        const itemsFiltered = items.filter(item => item.id !== product.id)

        SwalCart.fire({
            title: 'Estas seguro?',
            text: "Se eliminara el producto "  + product.nombre + " del carrito!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {
                SwalCart.fire(
                    'Eliminado!',
                    'El producto ha sido eliminado.',
                    'success'
                )
                setItems(itemsFiltered);
            }
        })
    }

    const clear = () => {
        setItems([]);
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, clear, totalCart, items }}>
            {children}
        </CartContext.Provider>
    )
}