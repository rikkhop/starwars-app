export async function getCategories() {
  try {
    const res = await fetch('https://swapi.dev/api/')

    if(!res.ok) {
      throw new Error()
    }

    const data = res.json()

    return data
  } catch(error) {
    console.log(error)
    return []
  }
}

export async function getItems(category:string | null) {
  if(category) {
    try {
      const res = await fetch(`https://swapi.dev/api/${category}/`)

      if(!res.ok) {
        throw new Error()
      }

      const data = res.json()

      return data
    } catch(error) {
      console.log(error)
      return []
    }
  }
}

export async function searchItems(category:string | null, searchTerm:string | null) {
  try {
    const res = await fetch(`https://swapi.dev/api/${category}/?search=${searchTerm}`)

    if(!res.ok) {
      throw new Error()
    }

    const data = res.json()

    return data
  } catch(error) {
    console.log(error)
    return []
  }
}