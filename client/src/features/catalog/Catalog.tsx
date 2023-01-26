import { randomUUID } from "crypto";
import { MouseEventHandler, useState } from "react";
import { Product } from "../../app/layout/models/product";
interface Props {
    products : Product[];
    addProduct : () => void // or any;
}

export default function Catalog({products,addProduct}: Props) {

    return (
        <>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - {product.price}</li>
                ))}
            </ul>
            <button onClick={addProduct}>add</button>
        </>
    )
}