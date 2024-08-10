import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState, useContext, useEffect } from "react"
import { ClientContext } from "../../context/clientContext"

function Results(props){

    useEffect(() => {
        client.get(URL)
        .then(function(res){
            setItems(res.data)
        })
    }, [])

    const [ items, setItems ] = useState([])
    const client = useContext(ClientContext).client
    const filterQuery = useParams()
    const profileInfo = useContext(ClientContext).profileInfo
    const keyWord = filterQuery.productQuery
    const URL = props.profile ? `/products?profile=${profileInfo.data.user.user_id}` : (keyWord ? `/products?category=${keyWord}` : '/products')

    return(
            <div className="latest-products-section">

                <h2>{props.title ? props.title : `Total results: ${items.length}` }</h2>

                <ul className="latest-products-container">
                    {items.map((r) => 
                    <Link key={r.id} to={`/product/${r.title}`}>
                        <li>
                            <img src={r.image} />
                            <p>{r.title}</p>
                            <p><b>Price</b>: <i>${r.price}</i></p>
                            <p><b>Address</b>: <i>{r.address}</i></p>
                            <p><b>Last update</b>: <i>{r.last_updated.split('T')[0] + ' ' + r.last_updated.split('T')[1].split('.')[0]}</i></p>
                        </li>
                    </Link>)}
                </ul>
            </div>
    )
}

export default Results