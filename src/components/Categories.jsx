import { Link } from "react-router-dom"

const tempCategories = [
    {id: 1, text: 'Sport', img: '/category-placeholder.jpg', query: 'sport'},
    {id: 2, text: 'Sport', img: '/category-placeholder.jpg', query: 'sport'},
    {id: 3, text: 'Sport', img: '/category-placeholder.jpg', query: 'sport'},
    {id: 4, text: 'Sport', img: '/category-placeholder.jpg', query: 'sport'},
    {id: 5, text: 'Sport', img: '/category-placeholder.jpg', query: 'sport'},
    {id: 6, text: 'Sport', img: '/category-placeholder.jpg', query: 'sport'},
    {id: 7, text: 'Sport', img: '/category-placeholder.jpg', query: 'sport'},
    {id: 8, text: 'Sport', img: '/category-placeholder.jpg', query: 'sport'},
    {id: 9, text: 'Sport', img: '/category-placeholder.jpg', query: 'sport'},
    {id: 10, text: 'Sport', img: '/category-placeholder.jpg', query: 'sport'},
    {id: 11, text: 'Sport', img: '/category-placeholder.jpg', query: 'art'},
    {id: 12, text: 'Sport', img: '/category-placeholder.jpg', query: 'art'},
    {id: 13, text: 'Sport', img: '/category-placeholder.jpg', query: 'art'},
    {id: 14, text: 'Sport', img: '/category-placeholder.jpg', query: 'art'},
    {id: 15, text: 'Sport', img: '/category-placeholder.jpg', query: 'art'},
    {id: 16, text: 'Sport', img: '/category-placeholder.jpg', query: 'art'},
]

function Categories(){
    return(
            <div className="categories-section">
                <h2>Main Categories</h2>

                <ul className="categories-container">
                    {tempCategories.map((c) => <Link key={c.id} to={`/results/${c.query}`}><li><img src={c.img} />{c.text}</li></Link>)}
                </ul>
            </div>
    )
}

export default Categories