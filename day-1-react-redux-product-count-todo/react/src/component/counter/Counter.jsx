import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decCount, incCount } from '../../reduxToolkit/reducers/counterSlice';


const Counter = () => {

    let count = useSelector((state)=> state.counter.count)
    const dispatch = useDispatch()



    return (
        <>
         <h3 className='font-bold text-2xl my-2 text-center'>Counter</h3>
        <div className='max-w-sm p-6 mx-auto my-5 text-center border border-blue-700 rounded-2xl shadow-2xl'>
           
            <div className="inline-flex rounded-md shadow-xs border" role="group">
              
                <button onClick={() => dispatch(incCount()) } className='bg-blue-700 p-3 text-white' >+</button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700  ">
                    {count}
                </button>
                 <button onClick={() => dispatch(decCount())} className='bg-blue-700 p-3 text-white' >-</button>
            </div>

        </div>
        </>
    );
}

export default Counter;