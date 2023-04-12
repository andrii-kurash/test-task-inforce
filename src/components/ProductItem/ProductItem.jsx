import React, {useState} from 'react';
import './ProductItem.css'
import {removeProduct} from "../../store/sliceProducts";
import {useDispatch} from "react-redux";

const ProductItem = ({el}) => {
    const [showButtons,setShowButtons] = useState(false)
    const [showModal,setShowModal] = useState(false)
    const dispatch = useDispatch()

    return (
        <div className='product'>
            <h2>ID: {el.id.slice(0,10)}</h2>
            <h2>Name: {el.name}</h2>
            <h2>Count: {el.count}</h2>
            {showButtons?
                <div className='modal'>
                    <button className='button-confirm' onClick={()=>dispatch(removeProduct({el}))}>Confirm</button>
                    <button className='button-cancel' onClick={()=>setShowButtons(!showButtons)}>Cancel</button>
                </div>
                :
                <button className='button button-delete' onClick={()=>setShowButtons(!showButtons)}>Delete</button>}
            <button className='button button-edit' onClick={()=>setShowModal(!showModal)}>Edit</button>
        </div>
    );
};

export default ProductItem;
