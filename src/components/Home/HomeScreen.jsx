import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllproducts } from '../../store/slices/products.slice'
import InputSearch from './InputSearch'
import ProductCard from './ProductCard'
import './styles/homeScreen.css'

const HomeScreen = () => {
    
    const [typeList, setTypeList] = useState()
    const [productSearch, setProductSearch] = useState()
    const [filterProducts, setFilterProducts] = useState()

    const dispatch = useDispatch()

    const products = useSelector(state => state.products)

    console.log(products)

    useEffect(() => {
        dispatch(getAllproducts())
        setProductSearch('')
    }, [])

    useEffect(() => {
        setFilterProducts(products?.filter(e => e.title.toLowerCase().includes(productSearch?.toLowerCase())))
      }, [productSearch, products])

    

    return (
        <div className='home'>
            <InputSearch
            typeList={typeList}
            setProductSearch={setProductSearch}
             />
            <div className='products-container'>
                {
                    filterProducts ?
                    filterProducts?.map(product => (
                            <ProductCard 
                            key={product.id}
                            product={product}
                            />
                            ))
                            :
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default HomeScreen