import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = ()=>{
    const dispatch = useDispatch();

    const cartItems=useSelector((store)=>{return(store.cart.items)
    })
    // const clearTheCart=()=>{
    //     dispatch(clearCart())
    // }
    return(
        <div className="text-center m-5 p-5">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div>
            
                <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={()=>{
                    dispatch(clearCart())
                }}>Clear Cart</button>
                {cartItems.length === 0 && <h1>Cart is empty</h1>}
               
                <ItemList items={cartItems} />
            </div>

        </div>
    )
};

export default Cart;