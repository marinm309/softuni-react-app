import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { ClientContext } from '../../context/clientContext.js'

function Login(){

    function onLogin(e){
        e.preventDefault()
        client.post('/users/login', credentials)
        .then(function(res){
            setCurrentUser(true)
        })
        .catch(function(error){
            setErr(true)
        })
    }

    function handleChange(e){
        setCredentials((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const [ credentials, setCredentials ] = useState({
        email: '',
        password: '',
    })

    const client = useContext(ClientContext).client
    const setCurrentUser = useContext(ClientContext).setCurrentUser
    const [ err, setErr ] = useState(false)

    return(
        <div className="login-register-form">
            <section className="container forms">
                <div className="form login">
                    <div className="form-content">
                        <header>Login</header>
                        {err && <h2 style={{'color': 'red'}}>Wrong email or password</h2>}
                        <form onSubmit={onLogin}>
                            <div className="field input-field">
                                <input type="email" placeholder="Email" className="input" name="email" value={credentials.email} onChange={handleChange} />
                            </div>
                            <div className="field input-field">
                                <input type="password" placeholder="Password" className="password" name="password" value={credentials.password} onChange={handleChange} />
                                <i className='bx bx-hide eye-icon'></i>
                            </div>
                            <div className="form-link">
                                <a href="#" className="forgot-pass">Forgot password?</a>
                            </div>
                            <div className="field button-field">
                                <button>Login</button>
                            </div>
                        </form>
                        <div className="form-link">
                            <span>Don't have an account? <Link to="/signup" className="link signup-link">Signup</Link></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login