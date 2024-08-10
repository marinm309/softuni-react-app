import { ClientContext } from "../../context/clientContext"
import { useContext } from 'react'
import Cookies from "js-cookie"
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
            e.preventDefault()
            client.delete('/users/user',
                {
                    headers: {
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


    const client = useContext(ClientContext).client
    const setCurrentUser = useContext(ClientContext).setCurrentUser
    const profileInfo = useContext(ClientContext).profileInfo

    const csrfToken = Cookies.get('csrftoken')

    return(
        <div className="profile-container">
            <div className="profile-image-info-container">
                <div className="profile-image">
                    <img src='/category-placeholder.jpg' />
                </div>
                <div className="profile-info">
                    <ul>
                        <li><b>Name</b>: {profileInfo.data.user.name}</li>
                    </ul>
                </div>
                    <button className="edit-profile-btn button" onClick={onLogout}>Logout</button>
                    <button className="delete-profile-btn button" onClick={deleteHandler}>Delete</button>
            </div>
            <div>
                <Results title="Listed For Sale" profile={true} />
            </div>
        </div>
    )
}

export default Profile