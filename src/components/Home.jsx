import Search from "./Search"
import { Link } from "react-router-dom"

function Home(){
    return(
        <div className="home-container">
            <Search />

            <div className="categories-section">
                <h2>Main Categories</h2>

                <ul className="categories-container">
                    <Link><li><img src="/category-placeholder.jpg" />Sport</li></Link>
                    <Link><li><img src="/category-placeholder.jpg" />Sport</li></Link>
                    <Link><li><img src="/category-placeholder.jpg" />Sport</li></Link>
                    <Link><li><img src="/category-placeholder.jpg" />Sport</li></Link>
                    <Link><li><img src="/category-placeholder.jpg" />Sport</li></Link>
                    <Link><li><img src="/category-placeholder.jpg" />Sport</li></Link>
                    <Link><li><img src="/category-placeholder.jpg" />Sport</li></Link>
                    <Link><li><img src="/category-placeholder.jpg" />Sport</li></Link>
                    <Link><li><img src="/category-placeholder.jpg" />Sport</li></Link>
                    <Link><li><img src="/category-placeholder.jpg" />Sport</li></Link>
                    <Link><li><img src="/category-placeholder.jpg" />Sport</li></Link>
                    <Link><li><img src="/category-placeholder.jpg" />Sport</li></Link>
                    <Link><li><img src="/category-placeholder.jpg" />Sport</li></Link>
                    <Link><li><img src="/category-placeholder.jpg" />Sport</li></Link>
                    <Link><li><img src="/category-placeholder.jpg" />Sport</li></Link>
                    <Link><li><img src="/category-placeholder.jpg" />Sport</li></Link>
                </ul>
            </div>
            <div className="latest-products-section">
                <h2>Latest Products</h2>

                <ul className="latest-products-container">
                    <Link>
                        <li>
                            <img src="/category-placeholder.jpg" />
                            <p>Placeholder title</p>
                            <p>$999</p>
                            <p>Shumen</p>
                            <p>Last update: Placeholder</p>
                        </li>
                    </Link>

                    <Link>
                        <li>
                            <img src="/category-placeholder.jpg" />
                            <p>Placeholder title</p>
                            <p>$999</p>
                            <p>Shumen</p>
                            <p>Last update: Placeholder</p>
                        </li>
                    </Link>

                    <Link>
                        <li>
                            <img src="/category-placeholder.jpg" />
                            <p>Placeholder title</p>
                            <p>$999</p>
                            <p>Shumen</p>
                            <p>Last update: Placeholder</p>
                        </li>
                    </Link>

                    <Link>
                        <li>
                            <img src="/category-placeholder.jpg" />
                            <p>Placeholder title</p>
                            <p>$999</p>
                            <p>Shumen</p>
                            <p>Last update: Placeholder</p>
                        </li>
                    </Link>

                    <Link>
                        <li>
                            <img src="/category-placeholder.jpg" />
                            <p>Placeholder title</p>
                            <p>$999</p>
                            <p>Shumen</p>
                            <p>Last update: Placeholder</p>
                        </li>
                    </Link>

                    <Link>
                        <li>
                            <img src="/category-placeholder.jpg" />
                            <p>Placeholder title</p>
                            <p>$999</p>
                            <p>Shumen</p>
                            <p>Last update: Placeholder</p>
                        </li>
                    </Link>

                    <Link>
                        <li>
                            <img src="/category-placeholder.jpg" />
                            <p>Placeholder title</p>
                            <p>$999</p>
                            <p>Shumen</p>
                            <p>Last update: Placeholder</p>
                        </li>
                    </Link>

                    <Link>
                        <li>
                            <img src="/category-placeholder.jpg" />
                            <p>Placeholder title</p>
                            <p>$999</p>
                            <p>Shumen</p>
                            <p>Last update: Placeholder</p>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Home