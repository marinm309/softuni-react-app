import Search from "./Search"
import Results from "./Results"
import Categories from "./Categories"

function HomePage(){
    return(
        <div className="home-container">

            <Search />

            <Categories />
            
            <Results homePageText={'Latest products'} />

        </div>
    )
}

export default HomePage