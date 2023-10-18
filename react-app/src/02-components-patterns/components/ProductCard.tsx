import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { ReactElement, createContext } from 'react';
import { InitialValues, Product, ProductCartHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    //children?: ReactElement | ReactElement[];
    children: (args: ProductCartHandlers) => JSX.Element,
    className?: string;
    style?: React.CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number
    initialValues?: InitialValues
}

interface ProductButtonsProps {
    counter: number;
    increaseBy: (value:number) =>void;
}


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }:Props) => {
    
    const {counter, increaseBy, maxCount, isMaxCountReached, reset }  
        = useProduct( {onChange, product, value, initialValues} );

  return (
    <Provider value={{
        counter,
        increaseBy,
        product,
        maxCount              
    }}>
        <div className={ `${styles.productCard} ${className}` }
            style={ style }
        >
            { 
                children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount,
                    product,

                    increaseBy,
                    reset
                }) 
            }
            {/* <ProductImage img={product.img}/>

            <ProductTitle title={product.title}/>

            <ProductButtons counter={counter} increaseBy={increaseBy}/>
            */}        
        </div>
    </Provider>
    
  )
}
