import { useEffect, useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "./models/product";



function App() {

  const [products,setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
    .then(res => res.json())
    .then(data => setProducts(data))
     
  },[]);

  function addProduct() {
    setProducts([
      ...products,
      {  
        id: products.length + 101,
        name: 'Prodoct No.' + (products.length + 1),
        description: 'description',
        price: (products.length *100) +100,
        pictureUrl: 'pictureUrl',
        brand: 'brand',
      }
    ])
  }

  return (
    <div>
      <Catalog products={products} addProduct={addProduct}/>
      
    </div>
  );
}

export default App;
