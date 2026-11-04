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

    const decreaseQuantity = ()=> updateQuantity(quantity - 1);
    const increaseQuantity = ()=> updateQuantity(quantity + 1);

    const removeItem = () => onRemove(product.id);

    return(

        <article className="product-cart-card">
            <div className="product-cart-card__media">
                <img
                 className="product-cart-card__image"
                 src= {product.image}
                 alt= {product.name}
                />
                <span className="product-cart-card__image-label">Product</span>
            </div>
            {/* Product title, short description */}
            <div className="product-cart-card__details">
                <div className="product-cart-card__eyebrow">IN YOUR SHOPPING BAG</div>
                <h3 className="product-cart-card__title">{product.name}</h3>

                <div className="product-cart-card__meta">
                    {product.color &&(
                        <span className="product-cart-card__meta-item">
                            <span className="product-cart-card__meta-label">Color</span>
                            <span className="product-cart-card__meta-value">{product.color}</span>
                        </span>
                    )}

                    {product.storage &&(
                        <span className="product-cart-card__meta-item">
                            <span className="product-cart-card__meta-label">Storage</span>
                            <span className="product-cart-card__meta-value">{product.storage}</span>
                        </span>
                    )}

                    {product.price &&(
                        <span className="product-cart-card__meta-item">
                            <span className="product-cart-card__meta-label">Price</span>
                            <span className="product-cart-card__meta-value">{product.price}</span>
                        </span>
                    )}
                </div>
                <span className="product-cart-card__availability">
                    <span className="product-cart-card__availability-dot" />
                    In Stock
                </span>
            </div>
        </article>




    )



}
