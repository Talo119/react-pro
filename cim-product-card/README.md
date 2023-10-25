# CIM-Product-Card

Este es un paquete de prueba de despliegue de NPM

### Carlos Motiño

## Ejemplo
```
import {} from 'cim-product-card'
```
```
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
```