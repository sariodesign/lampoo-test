import Product from "./Product";

const WishList = (props) => {
  return (
    <div className="flex flex-start flex-col items-center gap-y-12 md:flex-row md:items-stretch md:gap-x-9">
      {props.productList.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
};

export default WishList;
