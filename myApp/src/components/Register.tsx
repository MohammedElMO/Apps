import * as React from 'react';

const Register = () => {
    return (

        <form method='GET' className="absolute top-20 rounded-md  left-65 flex p-10  font-Poppin flex-col bg-slate-500 justify-center align-center gap-3 bg-">
            {/* marketing placement */}
            <label htmlFor="product1" className='font-bold text'>fullName</label>
            <input className='input_box ' id='product1' type="text" /> 
            
            <label htmlFor="product2" className='font-bold'>Email</label>
            <input className='input_box 'id='product2' type="text" />
            
            <label htmlFor="product3" className='font-bold'>Product</label>
            <input className='input_box ' id='product3' type="text" />
            
            <label htmlFor="product4"className='font-bold'>Quntity</label>
            <input className='input_box ' id='product4' maxLength={3} type="text" />
            <button type='submit' className=' p-2 rounded-md text-white bg-slate-400'>Submit</button>
        </form >
    );
};



export default Register