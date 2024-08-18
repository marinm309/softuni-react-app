import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { ClientContext } from '../../context/clientContext.js'

function Register(){

    function onRegister(e){
        e.preventDefault()

        if(credentials.password != rePassword){
            setErr(true)
            setErrMessage("Password doesn't match")
            return
        }

        const formData = new FormData();
        for (let key in credentials) {
            formData.append(key, credentials[key]);
        }
        client.post('/users/register', formData)
        .then(function(res){
            setCurrentUser(true)
        })
        .catch(function(error){
            console.log(error)
            setErr(true)
            setErrMessage(error.response.data.error)
        })
    }

    function handleChange(e){
        setCredentials((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleImageChange = (e) => {
        let newData = { ...credentials };
        newData["image"] = e.target.files[0];
        setCredentials(newData);
    }

    function rePasswordChange(e){
        setRePassword(e.target.value)
    }

    const [ credentials, setCredentials ] = useState({
        email: '',
        name: '',
        password: '',
    })

    const client = useContext(ClientContext).client
    const setCurrentUser = useContext(ClientContext).setCurrentUser
    const [ rePassword, setRePassword ] = useState('')
    const [ err, setErr ] = useState(false)
    const [ errMessage, setErrMessage ] = useState('')

    return(
        <div className="login-register-form">
            <section className="container forms">
                <div className="form signup">
                    <div className="form-content">
                        <header>Signup</header>
                        {err && <h2 style={{'color': 'red'}}>{errMessage}</h2>}
                        <form onSubmit={onRegister}>
                            <div className="field input-field">
                                <input type="email" placeholder="Email" className="input" onChange={handleChange} value={credentials.email} name="email" />
                            </div>
                            <div className="field input-field">
                                <input type="text" placeholder="Name" className="input" onChange={handleChange} value={credentials.name} name="name" />
                            </div>
                            <div className="field input-field">
                                <input type="password" placeholder="Create password" className="password" onChange={handleChange} value={credentials.password} name="password" />
                            </div>
                            <div className="field input-field">
                                <input type="password" placeholder="Confirm password" className="password" onChange={rePasswordChange} value={rePassword} name="rePassword" />
                                <i className='bx bx-hide eye-icon'></i>
                            </div>
                            <br />
                            <div className="form-group file-area">
                                <input type="file" name="image" required="required" onChange={handleImageChange} />
                                <div className="file-dummy">
                                <div className="success">Great, your images are selected. Keep on.</div>
                                <div className="default">Please upload profile picture</div>
                                </div>
                            </div>
                            <div className="field button-field">
                                <button>Signup</button>
                            </div>
                        </form>
                        <div className="form-link">
                            <span>Already have an account? <Link to="/signin" className="link login-link">Login</Link></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register