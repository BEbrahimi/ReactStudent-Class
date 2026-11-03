import React, {useState} from "react";
import "../css/ProductCartItem.css";

const defaultProduct ={
    id: 1,
    name:"Apple iPhone 18 Pro (128GB)",
    color:"Silver",
    storage:"128GB",
    price:599.9,
    image:"https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?auto=format&fit=crop&w=500&q=90"
};

const currency = (amount)=>
    new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD",
    }).format(amount);


export default function ProductCartItem({
    product = defaultProduct,
    onRemove = ()=>{},
    onQuantityChange = ()=>{}
}){
    const [quantity, setQuantity] = useState(1);

    const updateQuantity = (nextQuantity)=>{
        const safeQuantity = Math.max(1, Number(nextQuantity) || 1);
        setQuantity(safeQuantity);
        onQuantityChange(product.id, safeQuantity);
    };


    
}
