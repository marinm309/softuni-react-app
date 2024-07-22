import { useEffect, useState } from "react"

import Results from "../results/Results"

function Profile(){

    const [ isEditing, setIsEditing ] = useState(false)

    function editHandler(){
        setIsEditing(oldIsEditing => !oldIsEditing)
    }

    function deleteHandler(){
        const confirmation = confirm('Your account will be deleted permanently! Are you sure you would you to proceed?')
        if(confirmation){
            console.log('deleted')
        }
    }

    function saveHandler(){
        console.log('save')
    }

    return(
        <div className="profile-container">
            <div className="profile-image-info-container">
                <div className="profile-image">
                    <img src='/category-placeholder.jpg' />
                </div>
                <div className="profile-info">
                    <ul>
                        <li><b>Name</b>: Placeholder</li>
                        <li><b>Address</b>: Placeholder</li>
                        <li><b>Phone number</b>: Placeholder</li>
                    </ul>
                </div>
                    {isEditing ? 
                    <>
                        <button className="edit-profile-btn button" onClick={saveHandler}>Save</button>
                        <button className="delete-profile-btn button" onClick={editHandler}>Cancel</button>
                    </> : 
                    <>
                        <button className="edit-profile-btn button" onClick={editHandler}>Edit</button>
                        <button className="delete-profile-btn button" onClick={deleteHandler}>Delete</button>
                    </>}
            </div>
            <div>
                <Results title="Listed For Sale" />
            </div>
        </div>
    )
}

export default Profile