import React, { useState } from 'react'

import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'
import '../styles/custom-styles.css';
import { Product } from '../interfaces/interfaces';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';





export const ShoppingPage = () => {
  
    const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{ 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
         }}>
            {/* <ProductCard  
                product={ product }
                className='text-white bg-dark'
            >
                <ProductCard.Image className="custom-image" style={{
                    boxShadow: '10px, 10px, 10px, rgba(0,0,0,0.2)'
                }}/>
                <ProductCard.Title className='text-bold' activeClass='active'/>
                <ProductCard.Buttons className="custom-buttons" />
            </ProductCard> */}

            {
                products.map( product => (
                    <ProductCard
                        key={product.id} 
                        product={ product }
                        className='text-white bg-dark'
                        onChange={(evento) =>onProductCountChange(evento)}
                        value={ shoppingCart[product.id]?.count || 0 }
                    >
                        <ProductImage className="custom-image" style={{
                            boxShadow: '10px, 10px, 10px, rgba(0,0,0,0.2)'
                        }}/>
                        <ProductTitle className="text-bold"  activeClass='active'/>
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                ))
            }                        
        </div>

        <div className="shopping-cart">
            {
                Object.entries(shoppingCart).map(([key, product]) => (
                    <ProductCard 
                        product={ product }
                        className='text-white bg-dark'
                        style={{
                            width:'100px'
                        }}
                        onChange={(evento) =>onProductCountChange(evento)}
                        key={key}
                        value={ product.count }
                    >
                        <ProductImage className="custom-image" style={{
                            boxShadow: '10px, 10px, 10px, rgba(0,0,0,0.2)'
                        }}/>
                        <ProductButtons 
                            className="custom-buttons"
                            style={{
                                display: 'flex',
                                justifyContent:'center'
                            }}
                        />
                    </ProductCard>
                
                ))
            }            
        </div>
        <div>
            <code>
                {JSON.stringify(shoppingCart,null,5)}
            </code>
        </div>
    </div>
  )
}
