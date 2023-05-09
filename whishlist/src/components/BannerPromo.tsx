import {BannerPromoProps} from "../types/Promo";

const BannerPromo = (props:BannerPromoProps) => {
    return (
        <div className="bg-slate-50 text-center font-bold py-2 mb-12">
            <p className="uppercase text-red-700">{props.intro}</p>
            <p className="text-red-700">{props.code}</p>
        </div>
    )
}

export default BannerPromo