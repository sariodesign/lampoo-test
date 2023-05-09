export type Size = {
    id: number,
    name: string,
    qty: number
}

export interface ProductProps {
    is_new_with_tag: boolean;
    designer: string;
    name: string;
    size?: string;
    sizes?: Size[];
    price: number;
    retail?: number;
    image: string
}