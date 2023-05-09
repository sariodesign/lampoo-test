import { useState } from "react";
import { ProductProps } from "../types/Products";
import Button from "./Button";
import SizeSelect from "./SizeSelect";

const Product = (props: ProductProps) => {
  // Setting state
  const sizeProps = props.size ? false : true;
  const [disabledButton, setDisabledButton] = useState(sizeProps);
  const [value, setValue] = useState("Select size");
  const [active, setActive] = useState(false);

  // Created handler
  const handlerOpener = () => {
    setActive((current) => !current);
  };

  const handleValue = (e: any) => {
    setValue(e.target.textContent);
    setActive((current) => !current);
    setDisabledButton(false);
  };

  // Head of product render
  const Head = (): JSX.Element => {
    return (
      <div className="h-8 relative flex justify-center">
        {props.is_new_with_tag && (
          <span className="uppercase text-sm text-amber-300">new with tag</span>
        )}
        <svg
          className="absolute top-0 right-0 cursor-pointer"
          height="20"
          width="20"
          viewBox="0 0 32 32"
        >
          <path d="M25.313 8.563l-7.438 7.438 7.438 7.438-1.875 1.875-7.438-7.438-7.438 7.438-1.875-1.875 7.438-7.438-7.438-7.438 1.875-1.875 7.438 7.438 7.438-7.438z"></path>
        </svg>
      </div>
    );
  };

  return (
    <div className="flex flex-col text-center relative md:max-w-[20%]">
      <Head />
      <img src={props.image} alt={props.name} />
      <h3 className="font-bold">{props.designer}</h3>
      <div>{props.name}</div>
      {props.size ? (
        <div className="mb-4">{props.size}</div>
      ) : (
        <div className="mb-4">More sizes avaible</div>
      )}
      <div className="font-bold">€ {props.price}</div>
      {props.retail && (
        <div className="mb-4 text-sm">Est. Retail: € {props.retail}</div>
      )}
      {props.sizes && (
        <SizeSelect
          active={active}
          value={value}
          sizes={props.sizes}
          handlerOpener={handlerOpener}
          handleValue={handleValue}
        />
      )}
      <Button text="Add to cart" disabled={disabledButton} />
    </div>
  );
};

export default Product;
