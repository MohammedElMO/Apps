import * as React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
<main className='flex h-[100vh]  items-start  justify-center'>
            
        <form method='GET'noValidate className=" rounded-md bg-violet-700 flex  p-10  self-center font-Poppin flex-col   justify-center align-center gap-3 bg-">
            {/* marketing placement */}
            <div>
                <label htmlFor="product1" className='label_input'>fullName</label>
                <input className='input_box ' id='product1' type="text" />
            </div>
            
            <div>
                <label htmlFor="product2" className='label_input'>Email</label>
                <input className='input_box 'id='product2' type="text" />
                
            </div>
            <div>
                <label htmlFor="product3" className='label_input'>Product</label>
                <input className='input_box ' id='product3' type="text" />
            </div>
            
            <div>
                <label htmlFor="product4"className='label_input'>Quntity</label>
                <input className='input_box ' id='product4' maxLength={3} type="text" />
            </div>
                <button type='button' className='p-2 rounded-md hover:shadow bg-violet-500 shadow-lg text-white  font-semibold'>
                    <Link to="/ThankYou">Submit</Link>
                </button>
        </form >
</main>
    );
};



export default Register