import { ProductProps } from "../types/Products";
import SizeSelect from "./SizeSelect"

const Product = (props:ProductProps) => {
    const NewLabel = ():JSX.Element => {
        if(!props.is_new_with_tag) return <></>
        return (
            <span className="uppercase text-orange-300">new with tag</span>
        )
    }

    return (
        <div className="flex flex-col text-center">
            <NewLabel />
            <img src={props.image} alt={props.name} />
            <h3 className="font-bold">{props.designer}</h3>
            <div>{props.name}</div>
            {props.size ? <div className="mb-4">{props.size}</div> : <div className="mb-4">More sizes avaible</div>}
            <div className="font-bold">€ {props.price}</div>
            {props.retail && <div className="text-sm">Est. Retail: € {props.retail}</div>}
            {props.sizes && <SizeSelect sizes={props.sizes} />}
            <div className="flex items-center justify-between text-center border-2 border-black mt-auto p-4">
                <span className="text-sm font-bold uppercase">Add to cart</span>
            </div>
        </div>
    )
}

export default Product;