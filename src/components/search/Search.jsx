import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"

function Search(){

    function onSearch(e){
        if(e.key == 'Enter'){
            navigate(`/search/${searchData}`)
        }
    }

    function handleChange(e){
        setSearchData(oldState => e.target.value)
    }

    const navigate = useNavigate()
    const [ searchData, setSearchData ] = useState('')

    return(
        <div className="search-container">
            <input type="text" placeholder="What are you searching for?" value={searchData} onChange={handleChange} onKeyDown={onSearch} />
        </div>
    )
}

export default Search