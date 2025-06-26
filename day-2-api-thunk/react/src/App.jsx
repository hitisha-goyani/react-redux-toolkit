
import { useDispatch } from 'react-redux'
import './App.css'
import Counter from './component/counter/Counter'
import Movies from './component/movie/Movies'
import Todo from './component/todo/Todo'
import { useEffect } from 'react'
import { fetchMovies } from './reduxToolkit/movieToolkit/moviethunk'
import { moviesActions } from './reduxToolkit/movieToolkit/movieSlice'

function App() {
  
const baseUrl = "https://fakestoreapi.com/products"
const dispatch = useDispatch()

useEffect(()=>{

  fetchMovies("/products").then((res)=>{
    dispatch(moviesActions.allMovies(res))
  })

  fetchMovies("/users").then((res)=>{
    dispatch(moviesActions.allUSers(res))
  })
},[])



  return (
    <>
    <Counter/>
    <Todo/>
    <Movies/>
    
    
    </>
  )
}

export default App
