import React, {useState} from 'react';
import {addProduct} from '../../store/sliceProducts';
import './InputField.css'
import {useDispatch} from 'react-redux';

const InputField = ({showModal,setShowModal}) => {
    const [name,setName]= useState('')
    const [count,setCount]= useState('')
    const dispatch =useDispatch()

    const product = {
        name,
        count,
    }

    return (
        <>
            <label className='inputs-wrapper'>
                <input placeholder='Product name' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input placeholder='Count' type="number" value={count} onChange={(e)=>setCount(e.target.value)}/>
            </label>
            {!Object.values(product).includes('')
                &&
                <button className='button button-confirm' onClick={()=>dispatch(addProduct({product}))}>Confirm</button>}
            <button className='button button-cancel' onClick={()=>setShowModal(!showModal)}>Cancel</button>

        </>
    );
};

export default InputField;
