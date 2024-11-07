import { useEffect, useState } from 'react'
import './App.css'
import { getCategories, getItems } from './api'
import Grid from './components/Grid'
import { Search } from './components/Search'
import { Categories } from './components/Categories'

function App() {

  const [items, setItems] = useState<[] | null>(null)

  const [categories, setCategories] = useState<string[] | null>(null)

  const [currentCategory, setCurrentCategory] = useState<string | null>(null)

  async function getData() {

    try {
      // dont update categories when triggered by search 
      if(!categories) {
        const categoryData = await getCategories()

        const categoryList = Object.keys(categoryData)

        setCurrentCategory(categoryList[0])
        
        setCategories(categoryList)
      }
      
      const items = await getItems(currentCategory)

      items && setItems(items.results)
      
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  }, [currentCategory])

  return (
    <div className="py-8">
      <div className="w-full max-w-4xl my-0 mx-auto px-6 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-3/12">
          <Categories categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}/>
        </div>
        <div className="w-full md:w-9/12">
          <Search setItems={setItems} currentCategory={currentCategory} getData={getData} />
          <Grid items={items} />
        </div>
      </div>
    </div>
  )
}

export default App
