import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions } from '../../reduxtoolkit/reducers/toSlice';


const Todo = () => {

    const [todo, setTodo]  = useState("")

    const todoList = useSelector((state) => state.todo)
    const dispatch  =useDispatch()

    console.log(todoList)

    return (
        <>
              <h3 className='font-bold text-2xl text-center '>Todo</h3>
         <div className='max-w-7xl mx-auto my-10 text-center border p-6 shadow-2xl rounded-2xl'>

                 <div className="flex gap-2">
                        <input className='border  rounded-2xl p-2' onChange={(e) => setTodo(e.target.value)} type="text" />
                        <button onClick={() => dispatch(todoActions.addTodo(todo))} className='bg-blue-500 px-5 py-3 rounded-2xl text-white' >Add</button>
                    </div> 
       
            </div>
            </>
    );
}

export default Todo;