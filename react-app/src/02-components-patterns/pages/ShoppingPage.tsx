import React from 'react'

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import { products } from '../data/products';
import '../styles/custom-styles.css';


const product = products[0];

export const ShoppingPage = () => {

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{ 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
         }}>
                        
            <ProductCard
                key={product.id} 
                product={ product }
                className='text-white bg-dark'
                initialValues={{
                    count: 1,   
                    maxCount: 10
                }}
            >

                {
                    ({reset, increaseBy, isMaxCountReached,count, maxCount}) => (
                        <>
                            <ProductImage 
                                className="custom-image" style={{
                                    boxShadow: '10px, 10px, 10px, rgba(0,0,0,0.2)'
                                }}
                            />
                            <ProductTitle className="text-bold"  activeClass='active'/>
                            <ProductButtons className="custom-buttons" />

                            <button onClick={reset}>
                                Reset
                            </button>

                            <button onClick={ () => increaseBy(-2) }>
                                -2
                            </button>

                            {
                                (!isMaxCountReached && 
                                    <button onClick={ () => increaseBy(2) }>
                                        +2
                                    </button>
                                )
                            }
                            
                            <span>
                                { count } - { maxCount }
                            </span>

                            <code>
                                {JSON.stringify(isMaxCountReached)}
                                
                            </code>

                        </>
                        
                    )
                }                
            </ProductCard>                        
        </div>        
    </div>
  )
}
