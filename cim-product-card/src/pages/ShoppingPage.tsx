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
                initialValues={{
                    count: 1,   
                    maxCount: 10
                }}
            >

                {
                    ({reset, increaseBy, isMaxCountReached,count, maxCount}) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />
                        </>
                        
                    )
                }                
            </ProductCard>                        
        </div>        
    </div>
  )
}
