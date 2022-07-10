import React from 'react'
import { useForm } from 'react-hook-form'

const InputSearch = ({setProductSearch, typeList, setFilterType}) => {



    const changeInputText = data => {
        setProductSearch(data.target.value)
    }

    return (
        <form className='form-home'>
            <input className='search' onChange={changeInputText} type="text" 
            placeholder='Search products...'/>
        </form>
    )
}

export default InputSearch