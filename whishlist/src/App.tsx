import { useState, useEffect, useRef } from 'react'
import Product from "./components/Product";
import { ProductProps } from "./types/Products"

function App() {
  const [whishlistProduct, setWhishlistProduct] = useState<ProductProps[]>([])
  const fetchData = useRef(true);
  const getWhishlistProducts = async() => {
    const products = await fetch('../db.json').then((products) => products.json())

    // set state
    setWhishlistProduct(products);
  }
  
  useEffect(() => {
    if(fetchData.current){

      fetchData.current = false 
      getWhishlistProducts();
    }
  }, []);

  return (
    <>
     <h1>Whishlist</h1>
     <div className="flex gap-x-9">{whishlistProduct.map((product,index) => <Product key={index} {...product} />)}</div>
    </>
  )
}

export default App
