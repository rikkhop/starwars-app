import { useState, useEffect } from "react"
import { searchItems } from '../api'

export function Search({
  setItems,
  currentCategory,
  getData
}:{
  setItems:React.Dispatch<React.SetStateAction<[] | null>>,
  currentCategory:string | null,
  getData:()=>void
}) {

  const [searchTerm, setSearchTerm] = useState<string | null>(null)

  async function getResults() {
    try {
      const results = await searchItems(currentCategory, searchTerm)

      setItems(results.results)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    if(searchTerm) {
      getResults()
    } else {
      getData()
    }
    
  }, [searchTerm])

  return (
    <div className="mb-4 w-full">
      <input className="py-2 px-3 border-gray-300 border rounded-md w-full" onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search items" />
    </div>
  )
}