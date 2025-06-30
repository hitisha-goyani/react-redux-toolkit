
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import { getAllProduct } from './redux/productReducer/productAction'
import { fetchUsers } from './redux/userReducer/userSlice'

function App() {

  const prod = useSelector((state)=>state.prod)
  const users = useSelector((state) => state.users)
  const dispatch  = useDispatch()

  useEffect(()=>{

    dispatch(getAllProduct())

  },[])
    console.log(users)

if(users.loading)
{
  return (
    <div className="p-10 text-lg text-red">
      loading....
    </div>
  )
}

  // console.log(users)
  return (
    <>
<div className='max-w-7xl mx-auto mt-5'>
       <button onClick={() => dispatch(fetchUsers())} className=" p-2   bg-blue shadow-2xl  bg-gray-700 rounded-lg text-white me-4">all users</button>

    <button onClick={() => dispatch(fetchUsers(1))} className=" p-2   bg-blue shadow-2xl bg-gray-700  rounded-lg text-white">single users</button>
</div>

    
    
    </>
  )
}

export default App
