import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterPizzas } from '../actions/pizzaActions';

const Filter = () => {
    const dispatch = useDispatch();
    const [searchKey,setSearchKey]= useState("");
    const [category,setCategory]= useState("");
    return (
        <>
        <div className="row justify-content-center shadow-lg p-4 mb-5 bg-body rounded">
            <div className="col-md-3">
                <input type="text" placeholder='Search Items' className='form-control w-100' value={searchKey} onChange={e=>setSearchKey(e.target.value)}/>
            </div>
            <div className="col-md-3">
                <select className='form-control w-100' value={category} onChange={e=>setCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="veg">veg</option>
                    <option value="nonveg">Non-veg</option>
                </select>
            </div>
            <div className="col-md-3">
                <button className='w-100 filterBtn' onClick={()=>dispatch(filterPizzas(searchKey,category))}>FILTER</button>
            </div>
        </div>
            
        </>
    );
};

export default Filter;