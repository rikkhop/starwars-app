export function Categories({
  categories,
  setCurrentCategory,
  currentCategory
}:{
  categories:string[] | null,
  setCurrentCategory:React.Dispatch<React.SetStateAction<string | null>>,
  currentCategory:string | null
}) {

  function setCategory(category:string) {
    setCurrentCategory(category)
  }

  return (
    <>
      <h4 className="text-lg font-bold mb-2">Categories</h4>
      <ul>
        {
          categories
          ?.filter((category) => category !== 'films')  // Filter out 'film' category as it has no name field
          .map((category:string, index:number) => (
            <li className="mb-2" key={category + index} onClick={() => setCategory(category)}>
              <button className={`${category === currentCategory ? 'bg-slate-200' : ''} w-full capitalize`}>{category}</button>
            </li>
          )) 
        }
      </ul>
    </>
      
  )
}