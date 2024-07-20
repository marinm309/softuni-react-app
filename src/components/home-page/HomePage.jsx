import Search from "../search/Search"
import Results from "../results/Results"
import Categories from "../categories/Categories"

function HomePage(){
    return(
        <div className="home-container">

            <Search />

            <Categories />
            
            <Results title={'Latest products'} />

        </div>
    )
}

export default HomePage