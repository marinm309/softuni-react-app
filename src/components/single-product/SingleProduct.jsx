import { useState, useEffect, useContext } from "react"
import { ClientContext } from "../../context/clientContext"
import { useParams, useNavigate  } from "react-router-dom"
import Cookies from 'js-cookie';

function SingleProduct(){

    function onEdit(e){
        e.preventDefault()
        navigate(`/edit-product/${pk.productId}`)
    }

    function onDelete(e){
        e.preventDefault()
        let confirmation = confirm('Are you sure you want to remove the item?')
        if(confirmation){
            client.delete(`/products/${pk.productId}`)
            .then(function(res){
                navigate('/profile')
            })
        }
    }

    const navigate = useNavigate();
    const client = useContext(ClientContext).client
    const [ productData, setProductData ] = useState({})
    const [ userData, setUserData ] = useState({})
    const [ waiting, setWaiting ] = useState(true)
    const pk = useParams()
    const profileInfo = useContext(ClientContext).profileInfo

    useEffect(() => {
        client.get(`/products/${pk.productId}`)
        .then(function(res){
            setProductData(res.data)
            setWaiting(false)
        })
        .catch(function(error){
            navigate('/')
        })
    }, [])

    useEffect(() => {
        if(!waiting){
            client.get(`/users/user/${productData.user}`)
            .then(function(res){
                setUserData(res.data)
            })
        }
    }, [waiting])
    
    return(
        <div className="single-product-container">
            <div className="single-product-info">
                <img src={productData.image} />
                <h2>{productData.title}</h2>
                <p>${productData.price}</p>
                <p><b>Address</b>: <i>{productData.address}</i></p>
                <hr></hr>
                <h4>Description</h4>
                <p>{productData.description}</p>
                {/* {userData.user && profileInfo && userData.user.user_id != profileInfo.data.user.user_id ? <button onClick={onFavorite} className="like-btn"><img className="like" src="/not-full-star.png" /><br/></button> : ''} */}
                {userData.user && profileInfo && userData.user.user_id == profileInfo.data.user.user_id ?
                <div className="single-product-buttons-container">
                    <button className="edit-profile-btn button" onClick={onEdit}>Edit</button>
                    <button className="delete-profile-btn button" onClick={onDelete}>Delete</button>
                </div> : ''}
            </div>

            <div className="single-product-profile">
                <ul>
                    <img className="single-product-profile-image" src={userData.user && userData.user.image ? userData.user.image : '/profile-placeholder.jpg'} />
                    <p><b>Name</b>: <i>{userData.user ? userData.user.name : ''}</i></p>
                    <p><b>Email</b>: <i>{userData.user ? userData.user.email : ''}</i></p>
                </ul>
            </div>
        </div>
    )
}

export default SingleProduct