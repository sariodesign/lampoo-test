import { useState, useEffect, useRef } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";
import BannerPromo from "./components/BannerPromo";
import WishList from "./components/Whishlist";
import { ProductProps } from "./types/Products";

function App() {
  const [whishlistProduct, setWhishlistProduct] = useState<ProductProps[]>([]);
  const fetchData = useRef(true);
  const getWhishlistProducts = async () => {
    const products = await fetch(import.meta.env.VITE_BASE_URL).then((products) =>
      products.json()
    );

    // set state
    setWhishlistProduct(products.data.products);
  };

  useEffect(() => {
    if (fetchData.current) {
      fetchData.current = false;
      getWhishlistProducts();
    }
  }, []);

  return (
    <Layout>
      <Header />
      <BannerPromo
        intro="€100 off your first order of €400"
        code="Code: LAMPOONEW22"
      />
      <SectionTitle title="Whishlist" />
      <WishList productList={whishlistProduct} />
    </Layout>
  );
}

export default App;
