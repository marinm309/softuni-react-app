
import { Link } from "react-router-dom"

import Results from "../results/Results"

function Profile(){
    return(
        <div className="profile-container">
            <div className="profile-image-info-container">
                <div className="profile-image">
                    <img src='/category-placeholder.jpg' />
                </div>
                <div className="profile-info">
                    <ul>
                        <li>Name: Placeholder</li>
                        <li>Address: Placeholder</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div>
                <Results title="Listed For Sale" />
            </div>
        </div>
    )
}

export default Profile