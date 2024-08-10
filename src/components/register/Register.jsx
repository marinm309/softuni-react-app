import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { ClientContext } from '../../context/clientContext.js'

function Register(){

    function onRegister(e){
        if(credentials.password != rePassword){
            console.log('p')
        }
        e.preventDefault()
        client.post('/users/register', credentials).then(function(res){
            setCurrentUser(true)
        })
    }

    function handleChange(e){
        setCredentials((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
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

    return(
        <div className="login-register-form">
            <section className="container forms">
                <div className="form signup">
                    <div className="form-content">
                        <header>Signup</header>
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