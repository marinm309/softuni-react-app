import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ClientContext } from "../../context/clientContext"


function Categories(){

    const client = useContext(ClientContext).client
    const [ categories, setCategories ] = useState([])

    useEffect(() => {
        client.get('/categories')
        .then(function(res){
            setCategories(res.data)
        })
    }, [])

    return(
            <div className="categories-section">
                <h2>Main Categories</h2>

                <ul className="categories-container">
                    {categories.map((c) => <Link key={c.id} to={`/results/${c.name}`}><li><img src={c.image} />{c.name}</li></Link>)}
                </ul>
            </div>
    )
}

export default Categories