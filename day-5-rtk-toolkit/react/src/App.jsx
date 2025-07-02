
import './App.css'
import Card from './component/Card'
import { useAllRecipeQuery, useProductPageQuery } from './reduxApi/redduxApi'

function App() {
  const {data:recipe, isLoading:recipeLoad, error:recipeError } =  useAllRecipeQuery("recipes")
  const {data:products, isLoading:productsLoad, error:productsError } =  useAllRecipeQuery("products")
  const {data:page } =  useProductPageQuery(8)
  console.log(recipe)
  console.log(products)
  console.log(page)
  


  return (
    <>
     <h2>🍽️ Recipes</h2>
     <div className='max-w-7xl mx-auto grid grid-cols-1  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6'>
          {recipe?.recipes?.map(ele=> (
        <Card key={ele.id} recipe={ele} />
      ))}
     </div>
  
      
    </>
  )
}

export default App
