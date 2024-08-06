import { client, ClientContext } from "../../context/clientContext"

import { useContext } from 'react'

import Results from "../results/Results"

function Profile(){

    function onLogout(e){
        e.preventDefault()
        client.post('/users/logout',
            {withCredentions: true}
        ).then(function(res){
            console.log(res)
            setCurrentUser(false)
        })
    }

    function deleteHandler(){
        const confirmation = confirm('Your account will be deleted permanently! Are you sure you would you to proceed?')
        if(confirmation){
            console.log('deleted')
        }
    }

    const setCurrentUser = useContext(ClientContext).setCurrentUser

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
                    <button className="edit-profile-btn button" onClick={onLogout}>Logout</button>
                    <button className="delete-profile-btn button" onClick={deleteHandler}>Delete</button>
            </div>
            <div>
                <Results title="Listed For Sale" />
            </div>
        </div>
    )
}

export default Profile