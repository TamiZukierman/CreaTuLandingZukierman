import { useContext, useState } from "react"
import './ItemCount.css'
import { CartContext } from "../../Context/CartContext";

const ItemCount = ({stock, initial, onAdd, item}) => {
    const [quantity, setQuantity] = useState (initial)
    const { addItem } = useContext(CartContext);

    const increment = () => {
        if (quantity < stock ) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddToCart = () => {
        addItem(item, quantity); 
        onAdd(quantity); 
        console.log("Producto agregado:", item); 
    };

    return (
    <div className="Counter">
        <div className="Controls">
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="Button" onClick={increment}>+</button>
        </div>
        <div>
        <button className="Button" onClick={handleAddToCart} disabled={!stock}>Agregar al carrito</button>
        </div>

    </div>
    )
}

export default ItemCount;