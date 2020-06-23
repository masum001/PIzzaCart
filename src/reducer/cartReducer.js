export const cartReducer=( cartItems, action )=>{
    switch(action.type){
        
        case 'ADD_PIZZA':
            // console.log(action.pizza.price)
            // console.log(action.pizza.Qty)
            return [...cartItems, {
                id : action.pizza.id,
                name: action.pizza.name,
                price: parseFloat(action.pizza.price),
                Qty: parseInt(action.pizza.Qty)

            }]

        case 'UPDATE_QTY':
            let newList = cartItems.map(cartItem=>{
                if(cartItem.id===action.id){
                    return {...cartItem, Qty: action.Qty}
                }
                return cartItem;
            })
            return newList


        default:
            return cartItems;
    }
}