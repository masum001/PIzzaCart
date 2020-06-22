export const cartReducer=( cartItems, action )=>{
    switch(action.type){
        case 'ADD_PIZZA':
            return [...cartItems, {
                id : new Date().getUTCMilliseconds(),
                name: action.pizza.name,
                price: action.pizza.price

            }]
        default:
            return cartItems;
    }
}