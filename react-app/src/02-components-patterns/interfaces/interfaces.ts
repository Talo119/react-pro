
import { Props as ProductCardProps} from "../components/ProductCard";
import { Props  as ProductTitleProps} from "../components/ProductTitle"
import { Props  as ProductImageProps} from "../components/ProductImage"


export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    counter: number;
    increaseBy: (value:number) =>void;
    product: Product;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Buttons: (Props: ProductImageProps) => JSX.Element
}

export interface onChangeArgs {
    product: Product,
    count:  number,
    value?: number
}

export interface ProductInCart extends Product {
    count:number;
}