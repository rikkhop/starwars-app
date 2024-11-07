type Item = {
  name:string
}

export default function Grid({
  items
}:{
  items:[] | null
}) {

  return(
    <ul className="flex flex-wrap -mx-2">
      {
        items?.map((item:Item, index:number) =>(
          <li key={item.name + index} className="w-6/12 px-2 mb-4">
            <div className="bg-slate-300 p-4 rounded-lg h-full">
              <h4 className="text-xl">{item.name}</h4>
            </div>
          </li>
        ))
      }
    </ul>
  )
}