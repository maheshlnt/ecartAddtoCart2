import { useReducer } from "react";
import CartContext  from "./cart-context";
const defaultCartState={
    items:[],
    totalAmount:0
};
const cartReducer=(state,action)=>{
    if(action.type="ADD"){
    const updatedItems= state.items.concat(action.item);
    const updatedTotalAmount=state.totalAmount+action.item.price*action.item.amount;
    return {
        items:updatedItems,
        totalAmount:updatedTotalAmount
    };
    }else if(action.type="REMOVE"){

    }
   return defaultCartState;
}
const CartProvider= props=>{
   const [cartstate, dispatchCartAction]= useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type:'ADD',item:item});
    }
    const removeItemFromCartHandler=(id)=>{
    dispatchCartAction({type:"REMOVE",id:id})
    }
    const cartContext={ // first add these below lines next write reducer code.
        // items:[],totalAmount:0, initially like this b4 adding reducer
        items:cartstate.items,
        totalAmount:cartstate.totalAmount,
        addItem:addItemToCartHandler,  // calling this from mealitem form
        removeItem:removeItemFromCartHandler
    }; 
    return <CartContext.Provider value={cartContext}>
       {props.children}
    </CartContext.Provider>
}

export default CartProvider;