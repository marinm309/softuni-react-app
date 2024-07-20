import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

const tempResults = [
    {id: 1, img: '/category-placeholder.jpg', title: 'Placeholder title', price: '$999', place: 'Shumen', latestUpdate: 'Placeholder', query: 'ball', category: 'sport'},
    {id: 2, img: '/category-placeholder.jpg', title: 'Placeholder title', price: '$999', place: 'Shumen', latestUpdate: 'Placeholder', query: 'ball', category: 'sport'},
    {id: 3, img: '/category-placeholder.jpg', title: 'Placeholder title', price: '$999', place: 'Shumen', latestUpdate: 'Placeholder', query: 'ball', category: 'sport'},
    {id: 4, img: '/category-placeholder.jpg', title: 'Placeholder title', price: '$999', place: 'Shumen', latestUpdate: 'Placeholder', query: 'ball', category: 'sport'},
    {id: 5, img: '/category-placeholder.jpg', title: 'Placeholder title', price: '$999', place: 'Shumen', latestUpdate: 'Placeholder', query: 'ball', category: 'sport'},
    {id: 6, img: '/category-placeholder.jpg', title: 'Placeholder title', price: '$999', place: 'Shumen', latestUpdate: 'Placeholder', query: 'ball', category: 'sport'},
    {id: 7, img: '/category-placeholder.jpg', title: 'Placeholder title', price: '$999', place: 'Shumen', latestUpdate: 'Placeholder', query: 'ball', category: 'sport'},
    {id: 8, img: '/category-placeholder.jpg', title: 'Placeholder title', price: '$999', place: 'Shumen', latestUpdate: 'Placeholder', query: 'ball', category: 'sport'},
    {id: 9, img: '/category-placeholder.jpg', title: 'Placeholder title', price: '$999', place: 'Shumen', latestUpdate: 'Placeholder', query: 'ball', category: 'sport'},
    {id: 10, img: '/category-placeholder.jpg', title: 'Placeholder title', price: '$999', place: 'Shumen', latestUpdate: 'Placeholder', query: 'ball', category: 'art'},
    {id: 11, img: '/category-placeholder.jpg', title: 'Placeholder title', price: '$999', place: 'Shumen', latestUpdate: 'Placeholder', query: 'ball', category: 'art'},
    {id: 12, img: '/category-placeholder.jpg', title: 'Placeholder title', price: '$999', place: 'Shumen', latestUpdate: 'Placeholder', query: 'ball', category: 'art'},
]

const tempCategories = [...new Set(tempResults.map(item => item.category))]

function Results(props){
    const filterQuery = useParams()
    const items = filterQuery.productQuery ? tempResults.filter((item) => tempCategories.includes(filterQuery.productQuery) ? item.category == filterQuery.productQuery : item.title.includes(filterQuery.productQuery)) : tempResults

    return(
            <div className="latest-products-section">

                <h2>{props.title ? props.title : `Total results: ${items.length}` }</h2>

                <ul className="latest-products-container">
                    {items.map((r) => 
                    <Link key={r.id} to={`/product/${r.query}`}>
                        <li>
                            <img src={r.img} />
                            <p>{r.title}</p>
                            <p>{r.price}</p>
                            <p>{r.place}</p>
                            <p>Last update: {r.latestUpdate}</p>
                        </li>
                    </Link>)}
                </ul>
            </div>
    )
}

export default Results