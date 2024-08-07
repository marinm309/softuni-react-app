import { client, ClientContext } from "../../context/clientContext"

import { useContext } from 'react'

import Results from "../results/Results"

function Profile(){

    function onLogout(e){
        e.preventDefault()
        client.post('/users/logout',
            {withCredentions: true}
        ).then(function(res){
            setCurrentUser((oldState) => {!oldState})
        })
    }

    function deleteHandler(e){
        const confirmation = confirm('Your account will be deleted permanently! Are you sure you would you to proceed?')
        if(confirmation){
            console.log(csrfToken)
            e.preventDefault()
            client.delete('/users/user',
                {
                    headers: {
                      'x-csrftoken': csrfToken,
                      'X-CSRFToken': csrfToken,
                    },
                    withCredentials: true,
                  }
            )
            .then(function(res){
                setCurrentUser((oldState) => {!oldState})
            })
            .catch(function(err){ console.log(err) })
        }
    }

    const setCurrentUser = useContext(ClientContext).setCurrentUser
    const profileInfo = useContext(ClientContext).profileInfo

    const csrfToken = useContext(ClientContext).csrfToken

    return(
        <div className="profile-container">
            <div className="profile-image-info-container">
                <div className="profile-image">
                    <img src='/category-placeholder.jpg' />
                </div>
                <div className="profile-info">
                    <ul>
                        <li><b>Name</b>: {profileInfo.data.user.email}</li>
                        <li><b>Address</b>: {profileInfo.data.user.email}</li>
                        <li><b>Phone number</b>: {profileInfo.data.user.email}</li>
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