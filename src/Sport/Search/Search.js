import React from 'react'

const Search = ({oninputchange,inputchange}) => {
  return (
    <div>
      <input type='text' placeholder='search product here' onChange={oninputchange} value={inputchange}/>
        {/* <input type='text' placeholder='search product here' onChange={oninputchange} value={inputvalue}/> */}
    </div>
  )
}
// {oninputchange,inputvalue}
export default Search