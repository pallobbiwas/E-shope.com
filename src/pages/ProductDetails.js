import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const navigate = useNavigate()
    const {id} = useParams();
    console.log(id);

    const goHome = () => {
        navigate('/home')
    }
    return (
        <div>
            <h1>This is products details page : {id}</h1>
            <button className='btn btn-active px-10 btn-sm' onClick={goHome}>Home</button>
        </div>
    );
};

export default ProductDetails;